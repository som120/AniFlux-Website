import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ani-flux.vercel.app/",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ani-flux.vercel.app/delete-account",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
