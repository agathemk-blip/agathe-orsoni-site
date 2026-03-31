import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim().slice(0, 2000);
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, company, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "L'adresse email n'est pas valide." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Votre message est trop court." },
        { status: 400 }
      );
    }

    // Sanitisation
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanCompany = company ? sanitize(company) : "";
    const cleanSubject = sanitize(subject);
    const cleanMessage = sanitize(message);

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email à Agathe
    const mailToAgathe = {
      from: `"Site Agathe Orsoni" <${process.env.SMTP_USER}>`,
      to: "agathemk@gmail.com",
      replyTo: cleanEmail,
      subject: `[Nouveau contact] ${cleanSubject}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head><meta charset="UTF-8"></head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <div style="border-left: 3px solid #9B7D5E; padding: 24px; background: #FAFAF8;">
            <h2 style="color: #1A1A1A; font-size: 20px; margin: 0 0 20px;">
              Nouveau message depuis votre site
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #9B7D5E; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; width: 120px;">Nom</td>
                <td style="padding: 8px 0; color: #1A1A1A;">${cleanName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9B7D5E; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 8px 0; color: #1A1A1A;"><a href="mailto:${cleanEmail}" style="color: #9B7D5E;">${cleanEmail}</a></td>
              </tr>
              ${cleanCompany ? `<tr><td style="padding: 8px 0; color: #9B7D5E; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">Entreprise</td><td style="padding: 8px 0; color: #1A1A1A;">${cleanCompany}</td></tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #9B7D5E; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">Sujet</td>
                <td style="padding: 8px 0; color: #1A1A1A;">${cleanSubject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #E5E0D8;">
              <p style="color: #9B7D5E; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px;">Message</p>
              <p style="color: #1A1A1A; line-height: 1.7; margin: 0; white-space: pre-wrap;">${cleanMessage}</p>
            </div>
          </div>
          <p style="color: #9B7D5E; font-size: 11px; margin-top: 20px; text-align: center;">
            Message reçu depuis agatheorsoni.fr
          </p>
        </body>
        </html>
      `,
      text: `
Nouveau message depuis votre site\n
Nom : ${cleanName}
Email : ${cleanEmail}
${cleanCompany ? `Entreprise : ${cleanCompany}\n` : ""}Sujet : ${cleanSubject}

Message :
${cleanMessage}
      `,
    };

    // Email de confirmation à l'expéditeur
    const mailToSender = {
      from: `"Agathe Orsoni" <${process.env.SMTP_USER}>`,
      to: cleanEmail,
      subject: "J'ai bien reçu votre message",
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head><meta charset="UTF-8"></head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <div style="padding: 32px 24px; background: #FAFAF8;">
            <p style="color: #9B7D5E; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 24px;">Agathe Orsoni</p>
            <h2 style="color: #1A1A1A; font-size: 22px; font-weight: 300; margin: 0 0 20px; line-height: 1.3;">
              Bonjour ${cleanName},
            </h2>
            <p style="color: #6B6B6B; line-height: 1.7; margin: 0 0 16px;">
              J'ai bien reçu votre message. Je vous lis avec attention et reviendrai vers vous dans les meilleurs délais.
            </p>
            <p style="color: #6B6B6B; line-height: 1.7; margin: 0 0 32px;">
              À très bientôt,
            </p>
            <p style="color: #1A1A1A; font-weight: 500; margin: 0;">Agathe Orsoni</p>
            <p style="color: #9B7D5E; font-size: 13px; margin: 4px 0 0;">
              Consultante en stratégie digitale &amp; IA
            </p>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailToAgathe);
    await transporter.sendMail(mailToSender);

    return NextResponse.json(
      { success: true, message: "Votre message a bien été envoyé." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou me contacter directement à agathemk@gmail.com",
      },
      { status: 500 }
    );
  }
}
