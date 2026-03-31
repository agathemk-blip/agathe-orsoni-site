import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/cgv", "/mentions-legales", "/politique-de-confidentialite"],
      },
    ],
    sitemap: "https://agatheorsoni.fr/sitemap.xml",
  };
}
