import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Qui suis-je — Agathe Orsoni",
  description:
    "15 ans d'expérience en marketing, e-commerce et transformation digitale. Passée par Kusmi Tea, Petit Bateau, Contentsquare et BETC Digital, j'accompagne aujourd'hui les entreprises dans leur stratégie digitale et l'intégration de l'IA.",
  openGraph: {
    title: "Qui suis-je — Agathe Orsoni, Consultante Stratégie Digitale & IA",
    description:
      "15 ans d'expérience grands comptes → consultante indépendante. Mon parcours, mes convictions, ma manière de travailler.",
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
    desc: "Je l'intègre de manière concrète dans les stratégies, les process et les équipes, avec une seule exigence : qu'elle fasse gagner en pertinence, en temps et en impact.",
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
  "Les TPE / PME qui veulent structurer leur digital.",
  "Les entrepreneurs qui cherchent une vraie traction, pas des likes.",
  "Les équipes en transformation qui ont besoin d'un regard extérieur exigeant.",
  "Ceux qui veulent faire de l'IA un outil du quotidien, pas un projet pilote.",
];

export default function QuiSuisJePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "#FAFAF8" }}
        aria-labelledby="quisuisje-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <div className="lg:col-span-5 order-1">
              <div
                className="relative w-full max-w-md rounded-2xl overflow-hidden"
                style={{ aspectRatio: "3/4", background: "#F4F1EC" }}
              >
                <Image
                  src="/agathe-pro.jpg"
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
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  color: "#1A1A1A",
                }}
              >
                J&rsquo;ai choisi la liberté
                <br />
                de créer de la vraie valeur.
              </h1>

              <div className="space-y-5 mb-10">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  Avec plus de{" "}
                  <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
                    15 ans d&rsquo;expérience en marketing, e-commerce et
                    transformation digitale
                  </strong>{" "}
                  auprès de marques comme Kusmi Tea, Petit Bateau et
                  Contentsquare ou BETC Digital, j&rsquo;ai construit une
                  expertise à l&rsquo;intersection de la stratégie, de
                  l&rsquo;opérationnel et de la performance.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  Mon parcours m&rsquo;a permis d&rsquo;affiner une conviction
                  essentielle : les transformations les plus solides sont celles
                  qui placent l&rsquo;humain au cœur de l&rsquo;action.
                  C&rsquo;est cette vision, à la fois exigeante et profondément
                  concrète, qui guide aujourd&rsquo;hui ma manière
                  d&rsquo;accompagner les entreprises.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  J&rsquo;ai choisi de travailler de manière indépendante pour
                  mettre mon expérience au service de projets portés par{" "}
                  <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
                    l&rsquo;écoute, le respect, la clarté et la recherche
                    d&rsquo;un impact tangible.
                  </strong>
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
            <h2
              id="cibles-heading"
              className="font-light leading-tight mb-4"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1A1A1A",
              }}
            >
              J&rsquo;accompagne ceux qui veulent
              <br />
              un impact réel, pas des promesses.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#6B6B6B" }}>
              Mon accompagnement s&rsquo;adresse à des profils variés, réunis
              par une même exigence : transformer leur digital en levier de
              croissance concret et mesurable.
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
              className="font-light leading-tight mb-6 mx-auto"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#1A1A1A",
                maxWidth: "560px",
              }}
            >
              Si vous cherchez une consultante qui s&rsquo;engage vraiment,
              nous avons peut-être quelque chose à construire ensemble.
            </h2>
            <p
              className="text-base leading-relaxed mb-8 mx-auto"
              style={{ color: "#6B6B6B", maxWidth: "480px" }}
            >
              Décrivez-moi votre projet, vos enjeux et ce que vous attendez
              d&rsquo;un accompagnement. Je vous répondrai avec clarté.
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
