import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Agathe Orsoni — Consultante Stratégie Digitale & IA",
    default: "Agathe Orsoni — Consultante en Stratégie Digitale et IA",
  },
  description:
    "Agathe Orsoni, consultante en stratégie digitale et IA. J'aide les entreprises à construire des stratégies digitales orientées ROI et à intégrer l'IA comme levier de performance durable.",
  keywords: [
    "consultante stratégie digitale",
    "stratégie digitale IA",
    "consultant digital freelance",
    "transformation digitale PME",
    "stratégie marketing digital",
    "accompagnement digital entreprise",
    "Agathe Orsoni",
  ],
  authors: [{ name: "Agathe Orsoni" }],
  creator: "Agathe Orsoni",
  metadataBase: new URL("https://agatheorsoni.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Agathe Orsoni",
    images: [
      {
        url: "/agathe-pro.jpg",
        width: 1200,
        height: 630,
        alt: "Agathe Orsoni — Consultante en Stratégie Digitale et IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@agatheorsoni",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#1A1A1A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
