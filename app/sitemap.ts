import type { MetadataRoute } from "next"
import { CITIES_SPAIN } from "@/lib/cities"

const BASE_URL = "https://www.rapidfix.es"

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  const mainProvinces = Object.entries(CITIES_SPAIN)
    .filter(([key]) => key !== "expansion_batch_2")

  for (const [, cities] of mainProvinces) {
    for (const city of cities) {
      entries.push({
        url: `${BASE_URL}/${city}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  }

  return entries
}
