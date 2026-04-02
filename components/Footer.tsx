import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E0D8] bg-[#F4F1EC] mt-auto">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Colonne 1 — Identité */}
          <div>
            <p
              className="text-lg font-semibold text-[#1A1A1A] mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Agathe Orsoni
            </p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-xs">
              Consultante en stratégie digitale et IA. J'aide les entreprises à
              transformer leur présence digitale en levier de croissance réel.
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9B7D5E] mb-4">
              Navigation
            </p>
            <nav aria-label="Navigation secondaire">
              <ul className="space-y-2.5">
                {[
                  { href: "/", label: "Accueil" },
                  { href: "/qui-suis-je", label: "Qui suis-je" },
                  { href: "/mon-offre", label: "Mon offre" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Colonne 3 — Contact + CTA */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9B7D5E] mb-4">
              Travailler ensemble
            </p>
            <p className="text-sm text-[#6B6B6B] mb-5">
              Un projet, une question, une envie de transformer votre stratégie
              digitale ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#9B7D5E] transition-colors duration-200"
            >
              Demander un accompagnement
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E5E0D8] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-[#9B7D5E]">
            © {currentYear} Agathe Orsoni. Tous droits réservés.
          </p>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <p className="text-xs text-[#9B7D5E]">Made with Claude with ♥</p>
            <nav aria-label="Liens légaux">
              <ul className="flex flex-wrap gap-x-5 gap-y-1">
                {[
                  { href: "/mentions-legales", label: "Mentions légales" },
                  {
                    href: "/politique-de-confidentialite",
                    label: "Politique de confidentialité",
                  },
                  { href: "/cgv", label: "CGV" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#9B7D5E] hover:text-[#1A1A1A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
