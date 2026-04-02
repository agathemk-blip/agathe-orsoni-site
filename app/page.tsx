import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Agathe Orsoni — Consultante en Stratégie Digitale et IA",
  description:
    "J'accompagne dirigeants et équipes dans la construction de stratégies digitales et e-commerce concrètes, avec une lecture business et une approche opérationnelle. 15 ans d'expérience en retail et digital.",
  openGraph: {
    title: "Agathe Orsoni — Consultante en Stratégie Digitale et IA",
    description:
      "Stratégie digitale et IA au service de la performance business. 15 ans d'expérience en retail et digital.",
    url: "https://agathe-orsoni.vercel.app",
  },
};

const references = [
  "Kusmi Tea",
  "Petit Bateau",
  "Contentsquare",
  "BETC Digital",
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

const differentiators = [
  {
    title: "Le ROI comme priorité",
    desc: "Chaque action est orientée vers un résultat mesurable, connectée aux enjeux business réels.",
  },
  {
    title: "L'IA comme levier d'efficacité",
    desc: "Intégrée concrètement dans les stratégies, les process et les équipes, pas mise en avant pour faire bien.",
  },
  {
    title: "Stratégie et exécution",
    desc: "Au-delà des recommandations, je peux porter les projets ou en assurer le suivi, jusqu'aux livrables concrets et aux premiers résultats.",
  },
  {
    title: "Écoute et proximité",
    desc: "Je place l'humain au cœur de chaque projet, avec une attention sincère portée aux enjeux, aux personnes et à la réalité du terrain.",
  },
];

const testimonials = [
  {
    quote:
      "Agathe a su exactement comment transformer une idée en résultat concret et impactant.",
    name: "Juliette",
    role: "Fondatrice, Le 4 de Bâton",
  },
  {
    quote:
      "Agathe a su créer un site parfaitement aligné avec nos attentes, avec une rapidité d'exécution impressionnante, beaucoup de rigueur et une grande précision dans chaque détail.",
    name: "Déborah",
    role: "Mirza Conseil",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />

        {/* Overlay sombre pour lisibilité */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,15,15,0.82) 45%, rgba(15,15,15,0.55) 70%, rgba(15,15,15,0.3) 100%)",
          }}
        />

        {/* Contenu */}
        <div className="relative z-10 container-site w-full pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-up"
              style={{ color: "#C4A882" }}
            >
              Consultante en stratégie digitale &amp; IA
            </p>

            <h1
              id="hero-heading"
              className="font-light leading-[1.05] tracking-tight mb-8 animate-fade-up animate-delay-100"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                color: "#FFFFFF",
              }}
            >
              Digital et IA
              <br />
              au service de la
              <br />
              <em>performance</em>
            </h1>

            <p
              className="text-base leading-relaxed mb-10 animate-fade-up animate-delay-200"
              style={{ color: "rgba(255,255,255,0.75)", maxWidth: "440px" }}
            >
              J&rsquo;accompagne dirigeants et équipes dans la construction de
              stratégies digitales et e-commerce concrètes, avec une lecture
              business et une approche opérationnelle. 15 ans
              d&rsquo;expérience en retail et digital, de Petit Bateau à Kusmi
              Tea en passant par Contentsquare.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up animate-delay-300">
              <CTAButton href="/contact" size="lg" variant="primary">
                Demander un accompagnement
              </CTAButton>
              <CTAButton href="/mon-offre" size="lg" variant="ghost" className="!text-white !border-white hover:!bg-white hover:!text-[#1A1A1A]">
                Découvrir l&rsquo;offre
              </CTAButton>
            </div>

            {/* Références */}
            <div className="mt-16 animate-fade-up animate-delay-400">
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "#C4A882" }}
              >
                Expérience construite auprès de
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {references.map((ref) => (
                  <span
                    key={ref}
                    className="text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {ref}
                  </span>
                ))}
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
                &ldquo;La performance digitale atteint son plein potentiel quand
                stratégie, opérationnel et IA avancent vraiment ensemble.&rdquo;
              </p>
            </blockquote>
            <p className="mt-6 text-sm" style={{ color: "#9B7D5E" }}>
              Agathe Orsoni
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
                Après 15 ans dans le marketing et le digital, auprès de marques
                comme{" "}
                <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
                  Kusmi Tea, Petit Bateau et Contentsquare
                </strong>
                , j&rsquo;ai choisi de travailler autrement : en prenant le
                temps de comprendre vraiment chaque contexte, chaque équipe,
                chaque enjeu. Pas de solution standard. Chaque collaboration est
                construite sur mesure, à partir de ce qui compte réellement pour
                l&rsquo;entreprise.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#6B6B6B" }}
              >
                Mon engagement : une approche qui articule stratégie,
                opérationnel et IA, avec une dimension humaine au cœur de chaque
                collaboration.
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
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-10"
            style={{ color: "#9B7D5E" }}
          >
            Pourquoi travailler avec moi
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl"
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

      {/* ── AVIS CLIENTS ─────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="avis-heading"
      >
        <div className="container-site">
          <div className="max-w-xl mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              Avis clients
            </p>
            <h2
              id="avis-heading"
              className="font-light leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1A1A1A",
              }}
            >
              Ce qu&rsquo;ils disent
              <br />
              de la collaboration.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl flex flex-col justify-between"
                style={{ background: "#F4F1EC", border: "1px solid #E5E0D8" }}
              >
                <div
                  className="text-6xl font-light mb-2 leading-none"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "#C4A882",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  className="text-base leading-relaxed mb-8 flex-1"
                  style={{ color: "#1A1A1A" }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-px"
                    style={{ background: "#9B7D5E" }}
                  />
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#1A1A1A" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#9B7D5E" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
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
