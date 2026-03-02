import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const base = "https://www.gmis.sa"; // Update to your production domain

const paths: Array<{ path: string; priority: number; changeFrequency: "monthly" | "yearly" }> = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/landscaping", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/concrete", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/irrigation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sectors", priority: 0.7, changeFrequency: "monthly" },
  { path: "/hseq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/sustainability", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const { path, priority, changeFrequency } of paths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }
  }
  return entries;
}
