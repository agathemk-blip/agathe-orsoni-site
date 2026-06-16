import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact, Agathe Orsoni, Consultante Stratégie Digitale & IA",
  description:
    "Demandez un accompagnement en stratégie digitale et IA. Décrivez votre projet et vos enjeux, je vous répondrai avec clarté.",
  openGraph: {
    title: "Contact, Agathe Orsoni",
    description:
      "Un projet, une question, une envie de transformer votre digital ? Prenons contact.",
    url: "https://agatheorsoni.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="pt-24 pb-10 md:pt-32 md:pb-14"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="contact-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Intro */}
            <div className="lg:col-span-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "#9B7D5E" }}
              >
                Contact
              </p>
              <h1
                id="contact-heading"
                className="font-light leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#1A1A1A",
                }}
              >
                Parlons de votre projet.
              </h1>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#6B6B6B" }}
              >
                Décrivez-moi votre situation, vos enjeux et ce que vous
                attendez d&rsquo;un accompagnement.
              </p>

              <div className="mt-8 space-y-4">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: "#9B7D5E" }}
                  >
                    Email direct
                  </p>
                  <a
                    href="mailto:agathemk@gmail.com"
                    className="text-sm font-medium hover:underline"
                    style={{ color: "#1A1A1A" }}
                  >
                    agathemk@gmail.com
                  </a>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: "#9B7D5E" }}
                  >
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/agathe-orsoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                    style={{ color: "#1A1A1A" }}
                  >
                    in/agathe-orsoni
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-7">
              <div
                className="p-8 md:p-10 rounded-2xl"
                style={{ background: "#F4F1EC" }}
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
