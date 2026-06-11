import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Agathe Orsoni",
  description: "Mentions légales du site agatheorsoni.fr",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 pb-20" style={{ background: "#FAFAF8" }}>
      <div className="container-site">
        <div style={{ maxWidth: "760px" }}>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#9B7D5E" }}
          >
            Informations légales
          </p>
          <h1
            className="font-light leading-tight mb-12"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1A1A1A",
            }}
          >
            Mentions légales
          </h1>

          <div className="space-y-10" style={{ color: "#6B6B6B" }}>
            <div>
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "#1A1A1A" }}
              >
                1. Éditeur du site
              </h2>
              <div
                className="text-sm leading-relaxed p-5 rounded-xl space-y-1 mb-4"
                style={{ background: "#F4F1EC" }}
              >
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Nom :</strong> Agathe
                  Orsoni
                </p>
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Activité :</strong>{" "}
                  Consultante en stratégie digitale et IA, en portage salarial
                </p>
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Adresse :</strong>{" "}
                  78 rue Raynouard, 75106 Paris
                </p>
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Email :</strong>{" "}
                  <a
                    href="mailto:agathemk@gmail.com"
                    style={{ color: "#9B7D5E" }}
                  >
                    agathemk@gmail.com
                  </a>
                </p>
              </div>
              <p className="text-xs mb-3" style={{ color: "#9B7D5E" }}>
                Structure porteuse
              </p>
              <div
                className="text-sm leading-relaxed p-5 rounded-xl space-y-1"
                style={{ background: "#F4F1EC" }}
              >
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Raison sociale :</strong>{" "}
                  Jump Green
                </p>
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Forme juridique :</strong>{" "}
                  Société coopérative d&rsquo;activité et d&rsquo;emploi (CAE) — SCIC SA à conseil d&rsquo;administration
                </p>
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Siège social :</strong>{" "}
                  7, Place de l&rsquo;Hôtel de Ville, 93600 Aulnay-sous-Bois
                </p>
                <p>
                  <strong style={{ color: "#1A1A1A" }}>SIREN :</strong>{" "}
                  977 610 781 (RCS Bobigny)
                </p>
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Représentant légal :</strong>{" "}
                  Nicolas Fayon
                </p>
              </div>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "#1A1A1A" }}
              >
                2. Hébergement
              </h2>
              <div
                className="text-sm leading-relaxed p-5 rounded-xl space-y-1"
                style={{ background: "#F4F1EC" }}
              >
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Hébergeur :</strong>{" "}
                  Vercel Inc.
                </p>
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Adresse :</strong>{" "}
                  340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis
                </p>
                <p>
                  <strong style={{ color: "#1A1A1A" }}>Site :</strong>{" "}
                  <a href="https://vercel.com" style={{ color: "#9B7D5E" }}>
                    https://vercel.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "#1A1A1A" }}
              >
                3. Propriété intellectuelle
              </h2>
              <p className="text-sm leading-relaxed">
                L&rsquo;ensemble du contenu de ce site (textes, images,
                graphismes, logo, structure) est la propriété exclusive
                d&rsquo;Agathe Orsoni, sauf mention contraire. Toute
                reproduction, distribution, modification ou utilisation de ces
                contenus, sous quelque forme et par quelque moyen que ce soit,
                est interdite sans autorisation écrite préalable.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "#1A1A1A" }}
              >
                4. Limitation de responsabilité
              </h2>
              <p className="text-sm leading-relaxed">
                Agathe Orsoni s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude
                et la mise à jour des informations diffusées sur ce site. Elle
                se réserve le droit de corriger, à tout moment et sans préavis,
                le contenu de ce site. Agathe Orsoni ne peut être tenue
                responsable de l&rsquo;utilisation faite de ces informations et
                de tout préjudice direct ou indirect pouvant en découler.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "#1A1A1A" }}
              >
                5. Liens hypertextes
              </h2>
              <p className="text-sm leading-relaxed">
                Ce site peut contenir des liens vers des sites tiers. Agathe
                Orsoni n&rsquo;a aucun contrôle sur le contenu de ces sites et
                décline toute responsabilité quant à leur contenu ou leur
                disponibilité.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "#1A1A1A" }}
              >
                6. Droit applicable
              </h2>
              <p className="text-sm leading-relaxed">
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, les tribunaux français seront seuls
                compétents.
              </p>
            </div>
          </div>

          <div
            className="mt-10 pt-8 text-xs"
            style={{ borderTop: "1px solid #E5E0D8", color: "#9B7D5E" }}
          >
            Dernière mise à jour : avril 2026
          </div>
        </div>
      </div>
    </section>
  );
}
