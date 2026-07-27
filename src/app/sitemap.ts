import type { MetadataRoute } from "next";
import { labelConfigs } from "@/lib/labelConfigs";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/labels",
    "/nutrition-analysis",
    "/contact-us",
    "/disclaimer",
    "/terms",
    "/privacy",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const labelRoutes = labelConfigs.map((c) => ({
    url: `${SITE_URL}/labels/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...labelRoutes];
}
