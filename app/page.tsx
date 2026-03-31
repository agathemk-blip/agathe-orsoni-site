import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Agathe Orsoni — Consultante en Stratégie Digitale et IA",
  description:
    "Je conçois des stratégies digitales qui génèrent de vraies performances business, et j'aide les équipes à faire de l'IA un levier de rentabilité. 15 ans d'expérience grands comptes.",
  openGraph: {
    title: "Agathe Orsoni — Consultante en Stratégie Digitale et IA",
    description:
      "Je conçois des stratégies digitales qui génèrent de vraies performances business. ROI comme moteur, IA comme accélérateur.",
    url: "https://agatheorsoni.fr",
  },
};

const references = [
  "Kusmi Tea",
  "Petit Bateau",
  "Contentsquare",
  "Groupe Zebra",
  "Acracy",
];

const pillars = [
  {
    number: "01",
    title: "Construire",
    subtitle: "La stratégie",
    items: [
      "Définition de l'offre et du positionnement",
      "Choix des piliers marketing",
      "Angles de communication",
      "Objectifs et indicateurs de performance",
    ],
  },
  {
    number: "02",
    title: "Déployer",
    subtitle: "Les outils et la présence",
    items: [
      "Création ou optimisation de site web",
      "Mise en place des outils digitaux",
      "Structuration des tunnels et parcours clients",
      "Intégration de l'IA dans les process",
    ],
  },
  {
    number: "03",
    title: "Structurer",
    subtitle: "La performance dans la durée",
    items: [
      "Déploiement des campagnes",
      "Activation et production de contenus",
      "Suivi opérationnel et optimisation",
      "Formation des équipes à l'IA",
    ],
  },
];

const results = [
  {
    value: "+10 000",
    label: "abonnés YouTube",
    detail: "en seulement 3 mois",
  },
  {
    value: "CA stable",
    label: "chaque mois",
    detail: "grâce à des cours récurrents complets",
  },
  {
    value: "Communauté",
    label: "engagée",
    detail: "autour de rendez-vous réguliers et identifiés",
  },
  {
    value: "Croissance",
    label: "organique",
    detail: "sur l'ensemble des réseaux sociaux",
  },
];

const differentiators = [
  {
    title: "ROI comme boussole",
    desc: "Chaque action est orientée vers un résultat mesurable. Je refuse les stratégies déconnectées des enjeux business réels.",
  },
  {
    title: "IA intégrée, pas plaquée",
    desc: "L'IA n'est pas un effet d'annonce. Je l'intègre concrètement dans les stratégies, les process et les équipes.",
  },
  {
    title: "Stratégie + exécution",
    desc: "Je ne livre pas seulement des slides. Je reste présente jusqu'aux livrables concrets et aux premiers résultats.",
  },
  {
    title: "Exigence et clarté",
    desc: "Je dis non aux projets sans ambition de transformation. Je m'engage pleinement sur ceux où je crée une vraie différence.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center pt-20"
        aria-labelledby="hero-heading"
      >
        <div className="container-site w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texte */}
            <div className="order-2 lg:order-1">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-up"
                style={{ color: "#9B7D5E" }}
              >
                Consultante en stratégie digitale &amp; IA
              </p>

              <h1
                id="hero-heading"
                className="font-light leading-[1.1] tracking-tight mb-6 animate-fade-up animate-delay-100"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                  color: "#1A1A1A",
                }}
              >
                Ce qui ne crée pas
                <br />
                de valeur n&rsquo;est
                <br />
                <em>que du bruit.</em>
              </h1>

              <p
                className="text-lg leading-relaxed max-w-lg mb-10 animate-fade-up animate-delay-200"
                style={{ color: "#6B6B6B" }}
              >
                J&rsquo;aide les dirigeants et leurs équipes à construire des
                stratégies digitales qui{" "}
                <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
                  génèrent de vraies performances business
                </strong>{" "}
                — et à faire de l&rsquo;IA un levier de rentabilité concret,
                pas un gadget.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up animate-delay-300">
                <CTAButton href="/contact" size="lg" variant="primary">
                  Demander un accompagnement
                </CTAButton>
                <CTAButton href="/mon-offre" size="lg" variant="ghost">
                  Découvrir l&rsquo;offre
                </CTAButton>
              </div>

              {/* Références */}
              <div className="mt-14 animate-fade-up animate-delay-400">
                <p
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{ color: "#9B7D5E" }}
                >
                  Expérience construite auprès de
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {references.map((ref) => (
                    <span
                      key={ref}
                      className="text-sm font-medium"
                      style={{ color: "#6B6B6B" }}
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up">
              <div
                className="relative w-full max-w-[440px] rounded-2xl overflow-hidden"
                style={{ aspectRatio: "3/4", background: "#F4F1EC" }}
              >
                <Image
                  src="/agathe-pro.jpg"
                  alt="Agathe Orsoni, consultante en stratégie digitale et IA"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTE ────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#1A1A1A" }}
        aria-labelledby="manifeste-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-8"
              style={{ color: "#C4A882" }}
            >
              Ma conviction
            </p>
            <blockquote>
              <p
                className="font-light leading-snug"
                id="manifeste-heading"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  color: "#FFFFFF",
                }}
              >
                &ldquo;Le digital n&rsquo;a de sens que s&rsquo;il sert la
                croissance. Stratégie, opérationnel et IA avancent ensemble —
                ou ils n&rsquo;avancent pas.&rdquo;
              </p>
            </blockquote>
            <p className="mt-6 text-sm" style={{ color: "#9B7D5E" }}>
              — Agathe Orsoni
            </p>
          </div>
        </div>
      </section>

      {/* ── OFFRE EN 3 PILIERS ───────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="offre-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              Mon approche
            </p>
            <h2
              id="offre-heading"
              className="font-light leading-tight mb-4"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                color: "#1A1A1A",
              }}
            >
              Une méthode en trois temps,
              <br />
              orientée résultats.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#6B6B6B" }}>
              Pas de stratégie sans exécution. Pas d&rsquo;exécution sans
              mesure. Je travaille de la vision jusqu&rsquo;aux livrables
              concrets.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "1px", background: "#E5E0D8" }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="pillar-card p-8 md:p-10"
              >
                <span
                  className="block mb-6 font-light text-4xl"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "#E5E0D8",
                  }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: "#1A1A1A" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm mb-6" style={{ color: "#9B7D5E" }}>
                  {pillar.subtitle}
                </p>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
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
                        style={{ color: "#6B6B6B" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton href="/mon-offre" size="lg" variant="ghost">
              Voir le détail de l&rsquo;accompagnement →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── CAS CLIENT ───────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#F4F1EC" }}
        aria-labelledby="cas-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#9B7D5E" }}
              >
                Cas client
              </p>
              <h2
                id="cas-heading"
                className="font-light leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#1A1A1A",
                }}
              >
                Le 4 de Bâton :<br />
                passer d&rsquo;un projet
                <br />à un système de croissance.
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "#6B6B6B" }}
              >
                En 2024, Le 4 de Bâton voulait passer d&rsquo;un contenu
                spontané à un modèle business structuré. L&rsquo;objectif
                n&rsquo;était pas &ldquo;faire plus de contenu&rdquo; — mais
                construire un système capable de générer une croissance
                durable.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#6B6B6B" }}
              >
                L&rsquo;accompagnement a couvert la structuration de
                l&rsquo;offre, la stratégie éditoriale, les outils digitaux et
                les tunnels de conversion — de l&rsquo;identification des
                formats jusqu&rsquo;au déploiement complet.
              </p>
              <CTAButton href="/qui-suis-je" size="md" variant="secondary">
                En savoir plus sur mon approche
              </CTAButton>
            </div>

            <div className="space-y-4">
              {results.map((result) => (
                <div
                  key={result.value}
                  className="flex items-start gap-5 p-6 rounded-xl"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E0D8",
                  }}
                >
                  <div className="flex-shrink-0">
                    <p
                      className="text-2xl font-semibold"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: "#1A1A1A",
                      }}
                    >
                      {result.value}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#9B7D5E" }}
                    >
                      {result.label}
                    </p>
                  </div>
                  <div
                    className="self-stretch"
                    style={{ width: "1px", background: "#E5E0D8" }}
                  />
                  <p
                    className="text-sm self-center leading-snug"
                    style={{ color: "#6B6B6B" }}
                  >
                    {result.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── À PROPOS MINI ────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="about-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div
                className="relative w-full max-w-sm rounded-2xl overflow-hidden"
                style={{ aspectRatio: "4/5", background: "#F4F1EC" }}
              >
                <Image
                  src="/agathe-pro.jpg"
                  alt="Agathe Orsoni"
                  fill
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#9B7D5E" }}
              >
                Qui je suis
              </p>
              <h2
                id="about-heading"
                className="font-light leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#1A1A1A",
                }}
              >
                15 ans d&rsquo;expérience
                <br />
                au service de votre performance.
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "#6B6B6B" }}
              >
                Après 15 ans dans le marketing et le digital auprès de marques
                comme{" "}
                <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
                  Kusmi Tea, Petit Bateau et Contentsquare
                </strong>
                , j&rsquo;ai choisi de travailler directement au service des
                entreprises qui veulent transformer leur digital en actif
                business réel — sans politique, sans bruit inutile.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#6B6B6B" }}
              >
                Mon engagement : stratégie, opérationnel et IA avancent
                ensemble. Jamais l&rsquo;un sans l&rsquo;autre.
              </p>
              <CTAButton href="/qui-suis-je" size="md" variant="ghost">
                Découvrir mon parcours
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── RÉASSURANCE ──────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#F4F1EC" }}
        aria-labelledby="reassurance-heading"
      >
        <div className="container-site">
          <div className="max-w-xl mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              Pourquoi travailler avec moi
            </p>
            <h2
              id="reassurance-heading"
              className="font-light leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1A1A1A",
              }}
            >
              Une consultante qui fait
              <br />
              ce qu&rsquo;elle dit.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl transition-colors duration-200"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E0D8",
                }}
              >
                <div
                  className="w-8 h-px mb-6"
                  style={{ background: "#9B7D5E" }}
                />
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#1A1A1A" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  {item.desc}
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
        aria-labelledby="cta-final-heading"
      >
        <div className="container-site text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#C4A882" }}
          >
            Passons à l&rsquo;action
          </p>
          <h2
            id="cta-final-heading"
            className="font-light leading-tight mb-6 mx-auto"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "#FFFFFF",
              maxWidth: "680px",
            }}
          >
            Votre stratégie digitale mérite mieux qu&rsquo;un audit de 50 pages
            qu&rsquo;on ne lit pas.
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: "#9B7D5E" }}
          >
            Échangeons sur votre situation, vos enjeux et la manière dont je
            peux vous aider à créer de la vraie valeur.
          </p>
          <CTAButton href="/contact" size="lg" variant="primary">
            Demander un accompagnement
          </CTAButton>
        </div>
      </section>
    </>
  );
}
