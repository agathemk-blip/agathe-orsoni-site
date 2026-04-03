import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Mon offre — Agathe Orsoni, Consultante Stratégie Digitale & IA",
  description:
    "Accompagnement en stratégie digitale et IA pour TPE, PME et entrepreneurs. Méthode en 3 phases : Construire, Déployer, Structurer. Orienté ROI, exécution comprise.",
  openGraph: {
    title: "Mon offre — Stratégie digitale & IA avec Agathe Orsoni",
    description:
      "Un accompagnement en trois phases pour transformer votre digital en actif business. Stratégie, outils, IA — de la vision aux résultats.",
    url: "https://agatheorsoni.fr/mon-offre",
  },
};

const phases = [
  {
    number: "01",
    title: "Construire",
    subtitle: "La fondation stratégique",
    forWho: "Vous avez un projet, une activité, une vision, mais pas encore de cap digital clair.",
    problem:
      "Vous investissez du temps et de l'énergie dans le digital sans vraiment savoir où vous allez. Vos actions ne forment pas une stratégie cohérente. L'offre existe, mais elle n'est pas lisible ni activable.",
    what: [
      "Diagnostic de votre situation digitale actuelle",
      "Définition claire de votre positionnement et de votre offre",
      "Identification des piliers marketing prioritaires",
      "Choix des canaux et des angles de communication",
      "Définition des objectifs SMART et des KPIs",
      "Livraison d'une roadmap priorisée et actionnables",
    ],
    benefit:
      "Vous repartez avec une stratégie claire, un cap défini et un plan d'action que vous pouvez exécuter dès le lendemain.",
  },
  {
    number: "02",
    title: "Déployer",
    subtitle: "La présence et les outils",
    forWho:
      "Vous avez une stratégie mais votre présence en ligne ne la reflète pas, ou elle est inexistante.",
    problem:
      "Votre site web ne convertit pas. Vos outils digitaux sont éparpillés et ne forment pas un système. Vous perdez des clients à chaque étape du parcours parce que les tunnels ne sont pas structurés.",
    what: [
      "Création ou refonte de votre site web",
      "Mise en place des outils digitaux adaptés à votre activité",
      "Structuration des tunnels et parcours clients",
      "Intégration de l'IA dans vos process quotidiens",
      "Création de pages de vente efficaces",
      "Mise en place d'automatisations et de newsletters",
    ],
    benefit:
      "Votre présence digitale devient un actif business qui travaille pour vous, 24h/24, de manière cohérente.",
  },
  {
    number: "03",
    title: "Structurer",
    subtitle: "La performance dans la durée",
    forWho:
      "Vous avez la présence et les outils, mais vous n'arrivez pas à créer une croissance régulière.",
    problem:
      "Les résultats sont aléatoires. Vous n'avez pas de système pour mesurer ce qui fonctionne. Vos équipes ne sont pas autonomes. La croissance dépend trop de votre énergie du moment.",
    what: [
      "Déploiement des campagnes d'acquisition et de fidélisation",
      "Mise en place d'une stratégie de contenu orientée conversion",
      "Activation et pilotage éditorial",
      "Suivi opérationnel, mesure et optimisation continue",
      "Formation de vos équipes à l'IA et aux nouveaux outils",
      "Rituels de pilotage et de performance",
    ],
    benefit:
      "Votre croissance devient systémique, mesurable et reproductible, sans dépendre de l'aléatoire.",
  },
];

const faq = [
  {
    q: "À qui s'adresse votre accompagnement ?",
    a: "Principalement aux TPE, PME et entrepreneurs qui veulent transformer leur présence digitale en levier de croissance réel. Je travaille avec des entreprises de toutes tailles, du solo au groupe — dès lors qu'il y a une vraie ambition de transformation.",
  },
  {
    q: "Comment se déroule un accompagnement concrètement ?",
    a: "Chaque mission commence par un diagnostic approfondi de votre situation. Ensuite, je propose une roadmap adaptée à vos enjeux et votre budget. Je reste présente tout au long de l'exécution — pas juste pour les recommandations.",
  },
  {
    q: "Quelle est la durée d'un accompagnement ?",
    a: "Variable selon les besoins : de la mission courte (quelques semaines pour un diagnostic + stratégie) à l'accompagnement long (plusieurs mois pour Construire + Déployer + Structurer). Nous en discutons lors de notre premier échange.",
  },
  {
    q: "Travaillez-vous à distance ou en présentiel ?",
    a: "Les deux. Je m'adapte à votre organisation et à vos contraintes. La plupart des missions se font en mode hybride.",
  },
  {
    q: "Quels types de résultats peut-on espérer ?",
    a: "Des résultats mesurables : trafic qualifié, leads, conversions, chiffre d'affaires. Je refuse les indicateurs de vanité. Chaque mission est orientée vers un impact business réel et mesurable.",
  },
  {
    q: "Comment intégrez-vous l'IA dans votre accompagnement ?",
    a: "L'IA n'est pas un module à part. Je l'intègre concrètement dans la stratégie (génération de contenu, analyse, personnalisation) et dans les process des équipes (formation, outils du quotidien, automatisations). L'objectif est d'en faire un levier d'efficacité durable.",
  },
];

export default function MonOffrePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="offre-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#9B7D5E" }}
            >
              Mon offre
            </p>
            <h1
              id="offre-heading"
              className="font-light leading-tight mb-8"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#1A1A1A",
              }}
            >
              Un accompagnement qui va
              <br />
              de la stratégie aux résultats.
            </h1>
            <p
              className="text-lg leading-relaxed max-w-2xl mb-10"
              style={{ color: "#6B6B6B" }}
            >
              Je ne livre pas seulement des livrables. Je construis avec vous
              un système digital pensé pour générer une performance mesurable,
              en intégrant l&rsquo;IA de façon concrète.
            </p>
            <CTAButton href="/contact" size="lg" variant="primary">
              Demander un accompagnement
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── POUR QUI ─────────────────────────────────────── */}
      <section
        className="py-14"
        style={{ background: "#1A1A1A" }}
        aria-labelledby="pourqui-heading"
      >
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#C4A882" }}
          >
            Pour qui
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {[
              "Les TPE / PME qui veulent structurer leur digital.",
              "Les entrepreneurs qui cherchent à se structurer et monter en compétence sur l'IA.",
              "Les équipes en transformation qui ont besoin d'un regard extérieur exigeant.",
              "Ceux qui veulent faire de l'IA un outil du quotidien, pas un projet pilote.",
            ].map((cible, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ color: "#C4A882", fontSize: "1.1rem", marginTop: "1px" }}>
                  →
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "#FFFFFF" }}>
                  {cible}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 PHASES ─────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="phases-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              La méthode
            </p>
            <h2
              id="phases-heading"
              className="font-light leading-tight mb-4"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                color: "#1A1A1A",
              }}
            >
              Trois phases.
              <br />
              Un système cohérent.
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Chaque phase peut faire l&rsquo;objet d&rsquo;une mission
              indépendante, ou s&rsquo;enchaîner pour un accompagnement
              complet. Je m&rsquo;adapte à votre situation et vos priorités.
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid #E5E0D8" }}
              >
                {/* En-tête phase */}
                <div
                  className="p-8 md:p-10"
                  style={{ background: "#F4F1EC" }}
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    <span
                      className="flex-shrink-0 font-light"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                        color: "#C4A882",
                        lineHeight: 1,
                      }}
                    >
                      {phase.number}
                    </span>
                    <div>
                      <h3
                        className="font-semibold mb-1"
                        style={{
                          fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                          color: "#1A1A1A",
                        }}
                      >
                        {phase.title}
                      </h3>
                      <p
                        className="text-sm font-medium mb-4"
                        style={{ color: "#9B7D5E" }}
                      >
                        {phase.subtitle}
                      </p>
                      <p
                        className="text-sm leading-relaxed italic"
                        style={{ color: "#6B6B6B" }}
                      >
                        Pour vous si : {phase.forWho}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corps phase */}
                <div
                  className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                  style={{ background: "#FFFFFF" }}
                >
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-4"
                      style={{ color: "#9B7D5E" }}
                    >
                      Le problème adressé
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#6B6B6B" }}
                    >
                      {phase.problem}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-4"
                      style={{ color: "#9B7D5E" }}
                    >
                      Ce que contient l&rsquo;accompagnement
                    </p>
                    <ul className="space-y-2.5">
                      {phase.what.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="mt-1.5 flex-shrink-0 rounded-full"
                            style={{
                              width: "6px",
                              height: "6px",
                              background: "#9B7D5E",
                            }}
                          />
                          <span
                            className="text-sm leading-snug"
                            style={{ color: "#1A1A1A" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bénéfice */}
                <div
                  className="px-8 md:px-10 py-5"
                  style={{
                    background: "#1A1A1A",
                  }}
                >
                  <p className="text-sm" style={{ color: "#C4A882" }}>
                    <strong style={{ color: "#FFFFFF", fontWeight: 500 }}>
                      Résultat attendu :{" "}
                    </strong>
                    {phase.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS CLIENT SYNTHÈSE ──────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#F4F1EC" }}
        aria-labelledby="cas-offre-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              Preuve concrète
            </p>
            <h2
              id="cas-offre-heading"
              className="font-light leading-tight mb-8"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1A1A1A",
              }}
            >
              Ce que ça donne dans la vraie vie.
            </h2>

            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ background: "#FFFFFF", border: "1px solid #E5E0D8" }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#9B7D5E" }}
              >
                Le 4 de Bâton — 2025
              </p>
              <h3
                className="text-xl font-medium mb-4"
                style={{ color: "#1A1A1A" }}
              >
                Repenser une offre et créer une mécanique de croissance durable.
              </h3>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "#6B6B6B" }}
              >
                Le projet existait déjà. Le contenu était là. La vision aussi.
                Mais tout reposait sur une dynamique trop dépendante de
                l&rsquo;énergie du moment : pas de rendez-vous fixes, pas de
                tunnel clair entre contenu et chiffre d&rsquo;affaires, pas de
                parcours client structuré.
              </p>

              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 py-6 border-y"
                style={{ borderColor: "#E5E0D8" }}
              >
                {[
                  { value: "+10 000", label: "abonnés YouTube en 3 mois" },
                  { value: "CA stable", label: "chaque mois" },
                  { value: "Cours complets", label: "régulièrement" },
                  { value: "Communauté", label: "engagée et fidèle" },
                ].map((r) => (
                  <div key={r.value} className="text-center">
                    <p
                      className="text-lg font-semibold mb-1"
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

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6B6B6B" }}
              >
                <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
                  Ce qui a changé :
                </strong>{" "}
                d&rsquo;une logique de production à une logique de système.
                D&rsquo;un contenu spontané à une stratégie éditoriale. D&rsquo;une
                présence digitale à un actif business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="faq-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              Questions fréquentes
            </p>
            <h2
              id="faq-heading"
              className="font-light leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1A1A1A",
              }}
            >
              Ce que vous voulez
              <br />
              peut-être savoir.
            </h2>
          </div>

          <div className="max-w-3xl space-y-4">
            {faq.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6 md:p-8"
                style={{ background: "#F4F1EC" }}
              >
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#1A1A1A" }}
                >
                  {item.q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#1A1A1A" }}
        aria-labelledby="cta-offre-heading"
      >
        <div className="container-site text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#C4A882" }}
          >
            Prêt à avancer ?
          </p>
          <h2
            id="cta-offre-heading"
            className="font-light leading-tight mb-6 mx-auto"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "#FFFFFF",
              maxWidth: "640px",
            }}
          >
            La première étape,
            <br />
            c&rsquo;est juste un échange.
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: "#9B7D5E" }}
          >
            Décrivez-moi votre situation. Je vous dirai franchement si je peux
            vous aider — et comment.
          </p>
          <CTAButton href="/contact" size="lg" variant="primary">
            Demander un accompagnement
          </CTAButton>
        </div>
      </section>
    </>
  );
}
