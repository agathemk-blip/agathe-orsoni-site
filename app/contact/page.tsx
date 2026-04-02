import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Agathe Orsoni, Consultante Stratégie Digitale & IA",
  description:
    "Demandez un accompagnement en stratégie digitale et IA. Décrivez votre projet et vos enjeux — je vous répondrai avec clarté.",
  openGraph: {
    title: "Contact — Agathe Orsoni",
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
        className="pt-32 pb-16 md:pt-40 md:pb-20"
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
                Parlons de
                <br />
                ce que vous
                <br />
                voulez construire.
              </h1>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#6B6B6B" }}
              >
                Décrivez-moi votre situation, vos enjeux et ce que vous
                attendez d&rsquo;un accompagnement. Je vous lirai avec
                attention et vous répondrai avec clarté — sans jargon, sans
                promesse en l&rsquo;air.
              </p>

              <div
                className="space-y-4 p-6 rounded-xl"
                style={{ background: "#F4F1EC" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#9B7D5E" }}
                >
                  Ce que je peux faire pour vous
                </p>
                {[
                  "Construire votre stratégie digitale de A à Z",
                  "Intégrer l'IA dans vos process et vos équipes",
                  "Créer ou optimiser votre présence en ligne",
                  "Structurer vos campagnes et vos contenus",
                  "Accompagner votre transformation digitale",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span
                      className="flex-shrink-0"
                      style={{ color: "#9B7D5E", fontSize: "1rem", lineHeight: 1 }}
                    >
                      →
                    </span>
                    <p
                      className="text-sm leading-snug"
                      style={{ color: "#6B6B6B" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
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
