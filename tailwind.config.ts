import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF8",
        charcoal: "#1A1A1A",
        muted: "#6B6B6B",
        bronze: "#9B7D5E",
        "bronze-light": "#C4A882",
        "bronze-dark": "#7A6248",
        border: "#E5E0D8",
        "bg-soft": "#F4F1EC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-1": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-2": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-3": ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "small": ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        "content": "1200px",
        "text": "680px",
        "narrow": "520px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
