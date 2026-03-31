import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Agathe Orsoni",
  description: "CGV applicables aux prestations de conseil en stratégie digitale et IA d'Agathe Orsoni.",
  robots: { index: false, follow: false },
};

export default function CGVPage() {
  return (
    <section className="pt-32 pb-20" style={{ background: "#FAFAF8" }}>
      <div className="container-site">
        <div style={{ maxWidth: "760px" }}>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#9B7D5E" }}
          >
            Conditions commerciales
          </p>
          <h1
            className="font-light leading-tight mb-12"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1A1A1A",
            }}
          >
            Conditions Générales de Vente
          </h1>

          <div className="space-y-10" style={{ color: "#6B6B6B" }}>
            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                1. Objet
              </h2>
              <p className="text-sm leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) régissent
                les relations contractuelles entre Agathe Orsoni (ci-après
                &ldquo;le Prestataire&rdquo;) et toute personne physique ou
                morale (ci-après &ldquo;le Client&rdquo;) souhaitant bénéficier
                des prestations de conseil en stratégie digitale et IA.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                2. Identification du prestataire
              </h2>
              <div
                className="text-sm leading-relaxed p-5 rounded-xl space-y-1"
                style={{ background: "#F4F1EC" }}
              >
                <p><strong style={{ color: "#1A1A1A" }}>Nom :</strong> Agathe Orsoni</p>
                <p><strong style={{ color: "#1A1A1A" }}>Activité :</strong> Conseil en stratégie digitale et IA</p>
                <p><strong style={{ color: "#1A1A1A" }}>Statut :</strong> [STATUT JURIDIQUE — à compléter]</p>
                <p><strong style={{ color: "#1A1A1A" }}>SIRET :</strong> [NUMÉRO SIRET — à compléter]</p>
                <p><strong style={{ color: "#1A1A1A" }}>Adresse :</strong> [ADRESSE — à compléter]</p>
                <p><strong style={{ color: "#1A1A1A" }}>Email :</strong> <a href="mailto:agathemk@gmail.com" style={{ color: "#9B7D5E" }}>agathemk@gmail.com</a></p>
                <p><strong style={{ color: "#1A1A1A" }}>TVA :</strong> [NUMÉRO TVA INTRACOMMUNAUTAIRE si applicable — à compléter]</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                3. Nature des prestations
              </h2>
              <p className="text-sm leading-relaxed">
                Le Prestataire propose des prestations de conseil, d&rsquo;accompagnement
                et de stratégie dans les domaines suivants : stratégie digitale,
                stratégie marketing, intégration de l&rsquo;intelligence artificielle,
                déploiement d&rsquo;outils digitaux, formation d&rsquo;équipes et pilotage
                de la performance. Chaque prestation fait l&rsquo;objet d&rsquo;un devis
                ou d&rsquo;une proposition commerciale spécifique.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                4. Formation du contrat
              </h2>
              <p className="text-sm leading-relaxed">
                Le contrat est formé dès lors que le Client a retourné au
                Prestataire un devis ou une proposition commerciale signé(e),
                accompagné(e) du règlement de l&rsquo;acompte si applicable.
                Toute commande implique l&rsquo;acceptation sans réserve des
                présentes CGV.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                5. Tarifs et facturation
              </h2>
              <p className="text-sm leading-relaxed">
                Les prix des prestations sont définis dans chaque devis ou
                proposition commerciale et sont exprimés en euros HT. [CONDITIONS
                DE TVA — à préciser selon le statut fiscal]. Le Prestataire se
                réserve le droit de modifier ses tarifs à tout moment, sans
                toutefois affecter les missions en cours confirmées par devis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                6. Modalités de paiement
              </h2>
              <p className="text-sm leading-relaxed">
                [CONDITIONS DE PAIEMENT — à compléter : acompte, solde,
                délais, modes de paiement acceptés]. En cas de retard de
                paiement, des pénalités de retard seront appliquées conformément
                à la loi (taux légal en vigueur + 10 points). Une indemnité
                forfaitaire de 40€ pour frais de recouvrement sera également
                exigible.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                7. Obligations du Prestataire
              </h2>
              <p className="text-sm leading-relaxed">
                Le Prestataire s&rsquo;engage à réaliser les prestations avec
                diligence et selon les meilleures pratiques professionnelles.
                Il est soumis à une obligation de moyens et non de résultats.
                Il s&rsquo;engage à maintenir la confidentialité des informations
                communiquées par le Client dans le cadre de la mission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                8. Obligations du Client
              </h2>
              <p className="text-sm leading-relaxed">
                Le Client s&rsquo;engage à fournir en temps utile toutes les
                informations, accès et ressources nécessaires à la bonne
                réalisation de la mission. Il s&rsquo;engage également à régler
                les factures dans les délais convenus.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                9. Propriété intellectuelle
              </h2>
              <p className="text-sm leading-relaxed">
                [CONDITIONS DE CESSION DE DROITS — à compléter selon la
                politique du prestataire : droits conservés, droits cédés,
                conditions de cession]. Sauf mention contraire dans le contrat,
                les livrables produits dans le cadre de la mission deviennent
                la propriété du Client à compter du paiement intégral de la
                prestation.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                10. Confidentialité
              </h2>
              <p className="text-sm leading-relaxed">
                Les parties s&rsquo;engagent mutuellement à garder confidentielles
                toutes informations échangées dans le cadre de la mission,
                pendant la durée de celle-ci et pour une période de 2 ans
                après son terme.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                11. Résiliation
              </h2>
              <p className="text-sm leading-relaxed">
                En cas de manquement grave d&rsquo;une partie à ses obligations,
                l&rsquo;autre partie peut résilier le contrat après mise en demeure
                restée sans effet pendant 15 jours ouvrés. Les sommes déjà dues
                restent exigibles.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                12. Limitation de responsabilité
              </h2>
              <p className="text-sm leading-relaxed">
                La responsabilité du Prestataire est limitée au montant des
                honoraires perçus au titre de la mission concernée. Le
                Prestataire ne saurait être tenu responsable des dommages
                indirects, de perte de bénéfices ou d&rsquo;opportunités.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#1A1A1A" }}>
                13. Droit applicable et litiges
              </h2>
              <p className="text-sm leading-relaxed">
                Les présentes CGV sont soumises au droit français. En cas de
                litige, les parties s&rsquo;engagent à rechercher une solution
                amiable avant tout recours judiciaire. À défaut, les tribunaux
                du ressort de [VILLE — à compléter] seront seuls compétents.
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
