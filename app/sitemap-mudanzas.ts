import type { MetadataRoute } from "next"
import { CITIES_SPAIN } from "@/lib/cities"

const BASE_URL = "https://elvaciodepisos.com"

export default function sitemapMudanzas(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  const mainProvinces = Object.entries(CITIES_SPAIN)
    .filter(([key]) => key !== "expansion_batch_2")

  for (const [, cities] of mainProvinces) {
    for (const city of cities) {
      entries.push({
        url: `${BASE_URL}/mudanzas/${city}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  }

  return entries
}
