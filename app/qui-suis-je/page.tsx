import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Qui suis-je, Agathe Orsoni, Consultante IA & Stratégie Digitale",
  description:
    "Consultante IA, stratégie digitale et e-commerce. Après 15 ans en marketing digital grands comptes, j'accompagne entrepreneurs et dirigeants dans leur transformation digitale et l'intégration concrète de l'IA.",
  openGraph: {
    title: "Qui suis-je, Agathe Orsoni, Consultante IA & Stratégie Digitale",
    description:
      "15 ans d'expérience grands comptes, aujourd'hui 100% focalisée sur l'IA et la transformation digitale concrète.",
    url: "https://agathe-orsoni.vercel.app/qui-suis-je",
  },
};

const experiences = [
  {
    period: "Aujourd'hui",
    role: "Consultante indépendante",
    company: "Stratégie digitale & IA",
    desc: "J'accompagne les entreprises dans leurs enjeux de stratégie digitale et de transformation, en alliant vision stratégique et mise en œuvre opérationnelle : positionnement, site web, outils, parcours clients, pilotage de projets et intégration concrète de l'IA.",
  },
  {
    period: "2022 – 2025",
    role: "Customer Success et transformation d'une organisation SaaS",
    company: "Contentsquare",
    desc: "Management d'une équipe en charge de faire évoluer l'organisation Customer Success vers un modèle plus scalable, plus structuré et davantage orienté valeur.",
  },
  {
    period: "2020 – 2022",
    role: "Direction digitale omnicanale et rôle de CODIR",
    company: "Kusmi Tea",
    desc: "Membre du comité de direction, en charge de la transformation digitale omnicanale, de l'expérience client et de la performance e-commerce. Pilotage stratégique et opérationnel de l'activité digitale en France et à l'international, avec la responsabilité des P&L e-commerce.",
  },
  {
    period: "2012 – 2020",
    role: "Pilotage de la performance e-commerce et CRM international",
    company: "Petit Bateau",
    desc: "Expérience construite au croisement du CRM, de l'animation des marchés internationaux, du e-commerce et du pilotage digital. Un rôle transverse, au service de la performance commerciale, de la fidélisation client et de la coordination entre les expertises centrales et les marchés.",
  },
];

const convictions = [
  {
    title: "Le ROI comme priorité.",
    desc: "Chaque action doit répondre à un enjeu business clair et contribuer à un résultat mesurable.",
  },
  {
    title: "L'IA comme levier d'efficacité.",
    desc: "Je l'intègre concrètement dans les stratégies, les process et les outils du quotidien : automatisation, création d'agents personnalisés, production de contenus assistée par l'IA, formation des équipes. L'objectif est toujours le même : gagner en temps, en pertinence et en impact.",
  },
  {
    title: "Stratégie et exécution.",
    desc: "Je ne m'arrête pas aux recommandations : je peux porter les projets ou en assurer le suivi jusqu'à leur mise en œuvre effective.",
  },
  {
    title: "Écoute et proximité.",
    desc: "Je place l'humain au cœur de chaque projet, avec une attention réelle portée aux besoins, aux contextes et à la réalité du terrain.",
  },
];

const cibles = [
  "Les indépendants et entrepreneurs qui veulent se structurer digitalement : site, outils, IA.",
  "Les entrepreneurs qui cherchent à automatiser, structurer leur digital et aller plus vite.",
  "Les TPE et PME en transformation qui ont besoin d'un regard extérieur concret.",
];

export default function QuiSuisJePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="pt-24 pb-10 md:pt-32 md:pb-14"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="quisuisje-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <div className="lg:col-span-5 order-1 lg:self-stretch">
              <div
                className="relative w-full max-w-md rounded-2xl overflow-hidden lg:h-full"
                style={{ minHeight: "480px", background: "#F4F1EC" }}
              >
                <Image
                  src="/agathe-2.jpg"
                  alt="Agathe Orsoni, consultante en stratégie digitale et IA"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Texte */}
            <div className="lg:col-span-7 order-2 pt-0 lg:pt-8">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "#9B7D5E" }}
              >
                Qui suis-je
              </p>
              <h1
                id="quisuisje-heading"
                className="font-light leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
                  color: "#1A1A1A",
                }}
              >
                Stratégie digitale, e-commerce et IA.
              </h1>

              <div className="space-y-5 mb-10">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  Avec plus de 15 ans d&rsquo;expérience en marketing,
                  e-commerce et transformation digitale auprès de marques comme
                  Kusmi Tea, Petit Bateau, Contentsquare ou BETC Digital,
                  j&rsquo;ai construit une expertise solide à l&rsquo;intersection
                  de la stratégie, de l&rsquo;opérationnel et de la performance.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  Puis j&rsquo;ai fait un virage délibéré vers l&rsquo;IA : le levier
                  le plus puissant disponible aujourd&rsquo;hui pour gagner du temps,
                  structurer son activité et créer de la valeur différemment.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  J&rsquo;accompagne aujourd&rsquo;hui des entrepreneurs
                  et dirigeants dans la construction de leur stratégie digitale,
                  le développement de leur e-commerce et l&rsquo;intégration
                  concrète de l&rsquo;IA.
                </p>
              </div>

              <CTAButton href="/contact" size="lg" variant="primary">
                Demander un accompagnement
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARCOURS ─────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#F4F1EC" }}
        aria-labelledby="parcours-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              Parcours
            </p>
            <h2
              id="parcours-heading"
              className="font-light leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1A1A1A",
              }}
            >
              Une expertise à l&rsquo;intersection
              <br />
              de la stratégie, du digital et de l&rsquo;exécution.
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 hidden md:block"
              style={{ width: "1px", background: "#E5E0D8", left: "120px" }}
            />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12"
                >
                  <div className="md:text-right">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest pt-1"
                      style={{ color: "#9B7D5E" }}
                    >
                      {exp.period}
                    </p>
                  </div>
                  <div
                    className="pl-0 md:pl-10 pb-10 border-b"
                    style={{ borderColor: "#E5E0D8" }}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div
                        className="hidden md:block flex-shrink-0 rounded-full mt-1.5"
                        style={{
                          width: "10px",
                          height: "10px",
                          background: "#9B7D5E",
                          marginLeft: "-5px",
                        }}
                      />
                      <div>
                        <h3
                          className="text-lg font-semibold"
                          style={{ color: "#1A1A1A" }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-sm font-medium mb-3"
                          style={{ color: "#9B7D5E" }}
                        >
                          {exp.company}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "#6B6B6B" }}
                        >
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONVICTIONS ──────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="convictions-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              Ce en quoi je crois
            </p>
            <h2
              id="convictions-heading"
              className="font-light leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1A1A1A",
              }}
            >
              Mes convictions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {convictions.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl"
                style={{ background: "#F4F1EC" }}
              >
                <div
                  className="w-8 h-px mb-6"
                  style={{ background: "#9B7D5E" }}
                />
                <h3
                  className="text-lg font-medium mb-4 leading-snug"
                  style={{ color: "#1A1A1A" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── À QUI JE M'ADRESSE ───────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#F4F1EC" }}
        aria-labelledby="cibles-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#9B7D5E" }}
            >
              À qui je m&rsquo;adresse
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#6B6B6B" }}>
              Je travaille avec des entreprises de toutes tailles et m&rsquo;adapte à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {cibles.map((cible, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E0D8",
                }}
              >
                <span style={{ color: "#9B7D5E", fontSize: "1.1rem", marginTop: "1px" }}>
                  →
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#1A1A1A" }}
                >
                  {cible}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="cta-quisuisje-heading"
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
              id="cta-quisuisje-heading"
              className="font-light leading-tight mb-8 mx-auto"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#1A1A1A",
                maxWidth: "560px",
              }}
            >
              Décrivez-moi votre projet et vos enjeux.
            </h2>
            <CTAButton href="/contact" size="lg" variant="primary">
              Demander un accompagnement
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
