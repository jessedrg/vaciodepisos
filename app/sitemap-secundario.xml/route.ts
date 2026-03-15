import { CITIES_SPAIN } from "@/lib/cities"

const BASE_URL = "https://elvaciodepisos.com"

export async function GET() {
  const mainProvinces = Object.entries(CITIES_SPAIN)
    .filter(([key]) => key !== "expansion_batch_2")

  const allCities = mainProvinces.flatMap(([, cities]) => cities)

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`

  for (const city of allCities) {
    xml += `
  <url>
    <loc>${BASE_URL}/${city}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${BASE_URL}/mudanzas/${city}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  }

  xml += `
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
