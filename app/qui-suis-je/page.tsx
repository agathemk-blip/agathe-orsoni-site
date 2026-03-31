import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Qui suis-je — Agathe Orsoni",
  description:
    "15 ans d'expérience en marketing et stratégie digitale. Passée par Kusmi Tea, Petit Bateau et Contentsquare, j'accompagne aujourd'hui les entreprises dans leur transformation digitale avec l'IA comme accélérateur.",
  openGraph: {
    title: "Qui suis-je — Agathe Orsoni, Consultante Stratégie Digitale & IA",
    description:
      "15 ans d'expérience grands comptes → consultante indépendante. Mon parcours, ma vision, ma manière de travailler.",
    url: "https://agatheorsoni.fr/qui-suis-je",
  },
};

const experiences = [
  {
    period: "Aujourd'hui",
    role: "Consultante indépendante",
    company: "Stratégie digitale & IA",
    desc: "J'accompagne dirigeants et équipes dans la construction de stratégies digitales orientées ROI et l'intégration concrète de l'IA dans les organisations.",
  },
  {
    period: "2022 – 2023",
    role: "Experte digitale",
    company: "Contentsquare",
    desc: "Environnement international de référence en analytics et expérience utilisateur. Confirmation de mon expertise en transformation digitale et en performance.",
  },
  {
    period: "Avant 2022",
    role: "Marketing & e-commerce",
    company: "Kusmi Tea, Petit Bateau",
    desc: "15 ans d'expérience en marketing client, e-commerce et pilotage de la performance dans des environnements retail et internationaux exigeants.",
  },
];

const values = [
  {
    title: "L'efficacité ne peut pas exister sans respect de l'humain.",
    desc: "C'est la conviction qui m'a amenée à quitter le salariat. Je refuse les organisations où l'on parle fort pour exister, où la pression remplace la stratégie.",
  },
  {
    title: "Stratégie, opérationnel, IA : les trois ou rien.",
    desc: "Je n'interviens jamais sur un seul volet. Une stratégie sans exécution est un PowerPoint. Une exécution sans stratégie est de l'agitation. L'IA sans l'un ni l'autre, c'est du bruit.",
  },
  {
    title: "Le ROI n'est pas un gros mot.",
    desc: "Je travaille pour que votre digital génère des résultats mesurables. Trafic, leads, ventes, fidélisation — pas des métriques de vanité.",
  },
  {
    title: "Je dis non pour pouvoir dire oui vraiment.",
    desc: "Je refuse les projets sans ambition de transformation réelle. Quand je m'engage, je m'engage complètement — jusqu'aux résultats.",
  },
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
                  Contentsquare, j&rsquo;ai construit une expertise à
                  l&rsquo;intersection de la stratégie, de l&rsquo;opérationnel
                  et de la performance.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  En 2022, une expérience de management toxique chez Kusmi Tea
                  a été le déclencheur. J&rsquo;ai compris ce jour-là que{" "}
                  <em style={{ color: "#1A1A1A" }}>
                    l&rsquo;efficacité ne peut pas exister sans respect de
                    l&rsquo;humain.
                  </em>{" "}
                  Puis Contentsquare a confirmé mon aversion pour un monde du
                  salariat trop politique, où ceux qui parlent le plus fort sont
                  souvent mieux reconnus que ceux qui font bien.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  J&rsquo;ai alors fait le grand saut : travailler pour moi,
                  pour mettre mon savoir-faire au service des entreprises dans
                  un cadre fondé sur le{" "}
                  <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
                    respect, l&rsquo;écoute et l&rsquo;efficacité réelle.
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
              Une expertise construite
              <br />
              dans les tranchées du digital.
            </h2>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
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
              Mes convictions
              <br />
              ne sont pas négociables.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
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

      {/* ── APPROCHE ─────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#1A1A1A" }}
        aria-labelledby="approche-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "#C4A882" }}
              >
                Ma posture
              </p>
              <h2
                id="approche-heading"
                className="font-light leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#FFFFFF",
                }}
              >
                Je me donne le droit
                <br />
                d&rsquo;être exigeante.
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "#9B7D5E" }}
              >
                Je refuse les cadres figés, les discours déconnectés du réel et
                les projets sans ambition de transformation. Je m&rsquo;engage à
                affirmer clairement ce que je propose et à défendre une vision
                du digital orientée ROI.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#9B7D5E" }}
              >
                Stratégie, opérationnel et IA avancent ensemble. Parce que
                j&rsquo;ai l&rsquo;expérience des trois, je ne cloisonne
                jamais. Je les intègre comme un levier concret d&rsquo;efficacité
                et de rentabilité, au service du ROI et des usages réels.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { pour: "Les TPE / PME qui veulent structurer leur digital." },
                {
                  pour: "Les entrepreneurs qui cherchent une vraie traction, pas des likes.",
                },
                {
                  pour: "Les équipes en transformation qui ont besoin d'un regard extérieur exigeant.",
                },
                {
                  pour: "Ceux qui veulent faire de l'IA un outil du quotidien, pas un projet pilote.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span style={{ color: "#C4A882", fontSize: "1.25rem" }}>
                    →
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#FFFFFF" }}
                  >
                    {item.pour}
                  </p>
                </div>
              ))}
            </div>
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
