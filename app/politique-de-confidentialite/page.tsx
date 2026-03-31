import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Agathe Orsoni",
  description: "Politique de confidentialité et gestion des données personnelles du site agatheorsoni.fr",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-32 pb-20" style={{ background: "#FAFAF8" }}>
      <div className="container-site">
        <div style={{ maxWidth: "760px" }}>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#9B7D5E" }}
          >
            Protection des données
          </p>
          <h1
            className="font-light leading-tight mb-12"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1A1A1A",
            }}
          >
            Politique de confidentialité
          </h1>

          <div className="space-y-10" style={{ color: "#6B6B6B" }}>
            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                1. Responsable du traitement
              </h2>
              <p className="text-sm leading-relaxed">
                Agathe Orsoni, consultante en stratégie digitale et IA,
                est responsable du traitement des données personnelles
                collectées sur le site agatheorsoni.fr.
                Contact : <a href="mailto:agathemk@gmail.com" style={{ color: "#9B7D5E" }}>agathemk@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                2. Données collectées
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Les seules données personnelles collectées sur ce site le sont
                via le formulaire de contact. Ces données sont :
              </p>
              <ul className="text-sm leading-relaxed space-y-2 pl-4">
                {[
                  "Nom et prénom",
                  "Adresse email",
                  "Nom de l'entreprise (optionnel)",
                  "Contenu du message",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 rounded-full" style={{ width: "5px", height: "5px", background: "#9B7D5E", display: "inline-block" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mt-4">
                Ce site ne collecte aucune donnée de navigation, n&rsquo;utilise pas
                de cookies de traçage, et ne met en œuvre aucun système
                d&rsquo;analyse comportementale sans consentement préalable.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                3. Finalité du traitement
              </h2>
              <p className="text-sm leading-relaxed">
                Les données collectées via le formulaire de contact sont
                utilisées exclusivement pour répondre à votre demande de contact
                ou d&rsquo;accompagnement. Elles ne sont jamais utilisées à des
                fins commerciales, ni cédées ou revendues à des tiers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                4. Durée de conservation
              </h2>
              <p className="text-sm leading-relaxed">
                Les données sont conservées pendant la durée nécessaire au
                traitement de votre demande et, le cas échéant, à la relation
                commerciale qui pourrait en découler — et au maximum 3 ans à
                compter du dernier contact.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                5. Destinataires des données
              </h2>
              <p className="text-sm leading-relaxed">
                Vos données sont destinées à Agathe Orsoni uniquement. Elles
                peuvent transiter par le prestataire d&rsquo;hébergement email
                (service SMTP) dans le cadre de l&rsquo;envoi de votre message,
                conformément à ses propres engagements en matière de
                confidentialité.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                6. Vos droits (RGPD)
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez des
                droits suivants :
              </p>
              <ul className="text-sm leading-relaxed space-y-2 pl-4">
                {[
                  "Droit d'accès à vos données personnelles",
                  "Droit de rectification",
                  "Droit à l'effacement (droit à l'oubli)",
                  "Droit à la limitation du traitement",
                  "Droit à la portabilité",
                  "Droit d'opposition",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 rounded-full" style={{ width: "5px", height: "5px", background: "#9B7D5E", display: "inline-block" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mt-4">
                Pour exercer ces droits, contactez : <a href="mailto:agathemk@gmail.com" style={{ color: "#9B7D5E" }}>agathemk@gmail.com</a>
              </p>
              <p className="text-sm leading-relaxed mt-3">
                Vous pouvez également introduire une réclamation auprès de la
                CNIL (Commission Nationale de l&rsquo;Informatique et des
                Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#9B7D5E" }}>www.cnil.fr</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                7. Sécurité
              </h2>
              <p className="text-sm leading-relaxed">
                Des mesures techniques et organisationnelles appropriées sont
                mises en œuvre pour protéger vos données contre tout accès non
                autorisé, perte ou divulgation. Le site utilise une connexion
                sécurisée HTTPS.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                8. Cookies
              </h2>
              <p className="text-sm leading-relaxed">
                Ce site n&rsquo;utilise pas de cookies de traçage publicitaire.
                Des cookies techniques strictement nécessaires au bon
                fonctionnement du site peuvent être déposés. Ils ne nécessitent
                pas de consentement préalable selon la réglementation en
                vigueur.
              </p>
            </div>
          </div>

          <div
            className="mt-10 pt-8 text-xs"
            style={{ borderTop: "1px solid #E5E0D8", color: "#9B7D5E" }}
          >
            Dernière mise à jour : mars 2025
          </div>
        </div>
      </div>
    </section>
  );
}
