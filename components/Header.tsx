"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/mon-offre", label: "Mon offre" },
  { href: "/cas-clients", label: "Cas clients" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const darkHero = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#E5E0D8]"
          : "bg-transparent"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-[var(--font-playfair)] text-lg font-semibold tracking-tight hover:text-[#9B7D5E] transition-colors ${darkHero ? "text-white" : "text-[#1A1A1A]"}`}
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Agathe Orsoni
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-[#C4A882] ${
                  pathname === link.href
                    ? "text-[#C4A882] font-medium"
                    : darkHero ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                darkHero
                  ? "bg-white text-[#1A1A1A] hover:bg-[#C4A882] hover:text-white"
                  : "bg-[#1A1A1A] text-white hover:bg-[#9B7D5E]"
              }`}
            >
              Demander un accompagnement
            </Link>
          </nav>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${darkHero ? "bg-white" : "bg-[#1A1A1A]"} ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${darkHero ? "bg-white" : "bg-[#1A1A1A]"} ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${darkHero ? "bg-white" : "bg-[#1A1A1A]"} ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#FAFAF8] z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="flex flex-col p-8 gap-6"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-light transition-colors hover:text-[#9B7D5E] ${
                pathname === link.href ? "text-[#9B7D5E]" : "text-[#1A1A1A]"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-6 border-t border-[#E5E0D8]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#1A1A1A] text-white text-base font-medium rounded-full hover:bg-[#9B7D5E] transition-colors duration-200"
            >
              Demander un accompagnement
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
