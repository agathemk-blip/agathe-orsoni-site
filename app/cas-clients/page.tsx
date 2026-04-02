import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Cas clients — Agathe Orsoni, Consultante Stratégie Digitale & IA",
  description:
    "Découvrez un exemple concret d'accompagnement : Le 4 de Bâton, stratégie éditoriale, tunnel de vente et croissance communautaire.",
  openGraph: {
    title: "Cas clients — Agathe Orsoni",
    description:
      "De la vision aux résultats : comment j'accompagne concrètement mes clients dans leur transformation digitale.",
    url: "https://agatheorsoni.fr/cas-clients",
  },
};

export default function CasClientsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="cas-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#9B7D5E" }}
            >
              Cas clients
            </p>
            <h1
              id="cas-heading"
              className="font-light leading-tight mb-8"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#1A1A1A",
              }}
            >
              Ce que ça donne
              <br />
              dans la vraie vie.
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#6B6B6B", maxWidth: "560px" }}
            >
              Pas de promesse en l&rsquo;air. Des résultats concrets, construits
              avec des clients qui ont choisi de s&rsquo;engager dans une vraie
              démarche de transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ── CAS CLIENT : LE 4 DE BÂTON ───────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#F4F1EC" }}
        aria-labelledby="cas-4baton-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#9B7D5E" }}
            >
              Le 4 de Bâton — 2025
            </p>
            <h2
              id="cas-4baton-heading"
              className="font-light leading-tight mb-10"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1A1A1A",
              }}
            >
              Repenser une offre et créer
              <br />
              une mécanique de croissance durable.
            </h2>

            {/* Contexte */}
            <div className="mb-10">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#9B7D5E" }}
              >
                Le contexte
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B6B6B" }}
              >
                Le projet existait déjà. Le contenu était là. La vision aussi.
                Mais tout reposait sur une dynamique trop dépendante de
                l&rsquo;énergie du moment : pas de rendez-vous fixes, pas de
                tunnel clair entre contenu et chiffre d&rsquo;affaires, pas de
                parcours client structuré.
              </p>
            </div>

            {/* Ce qui a été fait */}
            <div className="mb-10">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#9B7D5E" }}
              >
                Ce qui a été fait
              </p>
              <div className="space-y-3">
                {[
                  "Refonte du positionnement et clarification de l'offre",
                  "Structuration d'une stratégie éditoriale YouTube cohérente",
                  "Mise en place d'un tunnel de vente entre contenu et cours",
                  "Création d'une newsletter régulière et d'automatisations",
                  "Intégration d'outils IA pour accélérer la production de contenu",
                  "Suivi mensuel de la performance et optimisation continue",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "#9B7D5E", fontSize: "1rem" }}
                    >
                      →
                    </span>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#6B6B6B" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Résultats */}
            <div
              className="rounded-2xl p-8 md:p-10 mb-10"
              style={{ background: "#FFFFFF", border: "1px solid #E5E0D8" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "#9B7D5E" }}
              >
                Les résultats
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "+10 000", label: "abonnés YouTube en 3 mois" },
                  { value: "CA stable", label: "chaque mois" },
                  { value: "Cours complets", label: "régulièrement" },
                  { value: "Communauté", label: "engagée et fidèle" },
                ].map((r) => (
                  <div key={r.value} className="text-center">
                    <p
                      className="text-2xl font-semibold mb-2"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: "#1A1A1A",
                      }}
                    >
                      {r.value}
                    </p>
                    <p
                      className="text-xs leading-tight"
                      style={{ color: "#9B7D5E" }}
                    >
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transformation */}
            <div
              className="p-6 rounded-xl"
              style={{ background: "#F4F1EC", border: "1px solid #E5E0D8" }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6B6B6B" }}
              >
                <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
                  Ce qui a changé :
                </strong>{" "}
                d&rsquo;une logique de production à une logique de système.
                D&rsquo;un contenu spontané à une stratégie éditoriale.
                D&rsquo;une présence digitale à un actif business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="cta-cas-heading"
      >
        <div className="container-site">
          <div
            className="rounded-2xl p-10 md:p-16 text-center"
            style={{ background: "#F4F1EC" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              Travaillons ensemble
            </p>
            <h2
              id="cta-cas-heading"
              className="font-light leading-tight mb-6 mx-auto"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#1A1A1A",
                maxWidth: "560px",
              }}
            >
              Vous voulez construire la même mécanique pour votre activité ?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 mx-auto"
              style={{ color: "#6B6B6B", maxWidth: "480px" }}
            >
              Décrivez-moi votre projet et vos enjeux. Je vous répondrai avec
              clarté.
            </p>
            <CTAButton href="/contact" size="lg" variant="primary">
              Demander un accompagnement
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
