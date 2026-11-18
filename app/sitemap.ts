import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://mooreconsultants.com.au", lastModified: new Date(), changeFrequency: "weekly", priority: 1 }]
}
