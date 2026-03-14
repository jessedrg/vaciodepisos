import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { CITIES_SPAIN, getCityDisplayName, getCityRegion } from "@/lib/cities"
import { Phone, Clock, CheckCircle2, Truck, Euro, Home, ArrowLeft, MapPin, Boxes } from "lucide-react"

export const dynamicParams = true
export const revalidate = 604800

const ALL_CITY_SLUGS = Object.values(CITIES_SPAIN).flat()

function isValidCity(slug: string): boolean {
  return ALL_CITY_SLUGS.includes(slug)
}

function getNearbyCities(citySlug: string): string[] {
  for (const [, cities] of Object.entries(CITIES_SPAIN)) {
    const idx = cities.indexOf(citySlug)
    if (idx !== -1) {
      return cities.filter((c) => c !== citySlug).slice(0, 12)
    }
  }
  return []
}

type Props = {
  params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  if (!isValidCity(city)) return {}

  const cityName = getCityDisplayName(city)
  const province = getCityRegion(city)

  return {
    title: `Vaciado de Pisos y Mudanzas en ${cityName} | Rapido y Economico | Presupuesto Gratis`,
    description: `Vaciado de pisos, casas y mudanzas en ${cityName} (${province}). Vaciar piso, retirada de muebles, vaciado de trasteros, portes y mudanzas economicas. Presupuesto GRATIS. ☎️ 936 941 681.`,
    keywords: `vaciado de pisos ${cityName}, vaciar piso ${cityName}, vaciado de casas ${cityName}, empresa vaciado de pisos ${cityName}, retirada de muebles ${cityName}, vaciar trastero ${cityName}, vaciado de pisos economico ${cityName}, vaciado de pisos cerca de mi, mudanzas ${cityName}, empresa de mudanzas ${cityName}, mudanzas economicas ${cityName}, portes ${cityName}, pequeñas mudanzas ${cityName}`,
    openGraph: {
      title: `Vaciado de Pisos en ${cityName} | Presupuesto Gratis`,
      description: `Servicio profesional de vaciado de pisos y casas en ${cityName}. Retirada de muebles y enseres. Presupuesto GRATIS.`,
      type: "website",
      locale: "es_ES",
      siteName: "Vaciado de Pisos",
    },
    alternates: {
      canonical: `/${city}`,
    },
  }
}

export async function generateStaticParams() {
  const mainProvinces = Object.entries(CITIES_SPAIN)
    .filter(([key]) => key !== "expansion_batch_2")
  const cities = mainProvinces.flatMap(([, c]) => c)
  return cities.map((city) => ({ city }))
}

export default async function VaciadoCityPage({ params }: Props) {
  const { city } = await params

  if (!isValidCity(city)) {
    notFound()
  }

  const cityName = getCityDisplayName(city)
  const province = getCityRegion(city)
  const nearbyCities = getNearbyCities(city)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Vaciado de Pisos en ${cityName}`,
    description: `Servicio profesional de vaciado de pisos, casas, trasteros y locales en ${cityName} (${province}).`,
    provider: {
      "@type": "LocalBusiness",
      name: "Vaciado de Pisos España",
      telephone: "+34936941681",
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName,
        addressRegion: province,
        addressCountry: "ES",
      },
    },
    areaServed: { "@type": "City", name: cityName },
    serviceType: ["Vaciado de pisos", "Vaciado de casas", "Retirada de muebles", "Vaciado de trasteros", "Mudanzas", "Portes y mudanzas"],
    offers: { "@type": "Offer", priceCurrency: "EUR", price: "0", description: "Presupuesto gratuito" },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Cuanto cuesta vaciar un piso en ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `El precio de vaciar un piso en ${cityName} depende del tamaño y cantidad de muebles. Pisos pequeños desde 200€, medianos desde 400€, grandes desde 700€. Presupuesto cerrado y gratuito.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Haceis vaciado de pisos urgente en ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Si, ofrecemos vaciado de pisos urgente en ${cityName} en 24-48 horas. Ideal para entregas de llaves, desahucios o ventas con fecha limite.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Tambien vaciais trasteros y locales en ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Si, ademas de pisos y casas, vaciamos trasteros, garajes, locales comerciales y oficinas en ${cityName} y alrededores.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Haceis mudanzas en ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Si, ofrecemos servicio de mudanzas y portes en ${cityName}. Mudanzas economicas, pequeñas mudanzas y transporte de muebles con equipo profesional y furgonetas equipadas.`,
        },
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Vaciado de pisos en toda España
        </Link>
      </div>

      {/* HERO */}
      <section className="px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-foreground text-background shadow-xl">
            <Truck className="h-10 w-10" />
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-bold">
            <MapPin className="h-4 w-4" />
            {cityName} ({province})
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
            Vaciado de Pisos en {cityName}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Servicio profesional de <strong>vaciado de pisos en {cityName}</strong>. Vaciamos tu piso, casa, trastero o local.
            Retiramos muebles y enseres. <strong>Presupuesto gratis</strong>.
          </p>

          <a
            href="tel:936941681"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F59E0B] text-white font-bold text-lg shadow-xl hover:bg-[#D97706] transition-colors"
          >
            <Phone className="h-5 w-5" />
            Llamar: 936 941 681
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            Servicios de vaciado en {cityName}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Home, title: `Vaciar piso en ${cityName}`, desc: `Vaciado completo de pisos en ${cityName}. Retiramos todos los muebles, electrodomesticos y enseres. Vaciado integral con limpieza.` },
              { icon: Home, title: `Vaciado por herencia en ${cityName}`, desc: `Vaciar piso o casa por herencia en ${cityName}. Gestionamos el vaciado completo con total respeto y profesionalidad.` },
              { icon: Truck, title: `Retirada de muebles en ${cityName}`, desc: `Retirar muebles viejos en ${cityName}. Recogemos sofas, armarios, electrodomesticos y cualquier enseres que necesites retirar.` },
              { icon: Home, title: `Vaciar trastero en ${cityName}`, desc: `Vaciado de trasteros en ${cityName}. Retiramos trastos, muebles almacenados y todo tipo de enseres acumulados.` },
              { icon: Euro, title: `Vaciado economico en ${cityName}`, desc: `Vaciado de pisos economico en ${cityName}. Mejores precios del mercado. Si hay objetos de valor, el vaciado puede ser gratis.` },
              { icon: Clock, title: `Vaciado urgente en ${cityName}`, desc: `Vaciar piso urgente en ${cityName} en 24-48h. Para entregas de llaves, desahucios o ventas con plazo.` },
              { icon: Boxes, title: `Mudanzas en ${cityName}`, desc: `Servicio de mudanzas economicas en ${cityName}. Portes, pequeñas mudanzas y transporte de muebles con equipo profesional.` },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border">
                <div className="p-2 rounded-lg bg-[#F59E0B]/10 w-fit mb-3">
                  <s.icon className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT / SEO */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Empresa de vaciado de pisos en {cityName}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ¿Necesitas <strong>vaciar un piso en {cityName}</strong>? Somos la empresa de referencia en <strong>vaciado de pisos en {cityName}</strong> y toda la provincia de {province}. Nos encargamos del vaciado completo: muebles, electrodomesticos, enseres, ropa, cajas... absolutamente todo.
              </p>
              <p>
                Nuestro equipo profesional llega a {cityName} con furgonetas preparadas, retira cada objeto del inmueble y gestiona los residuos de forma legal y ecologica. El resultado: tu piso completamente vacio y limpio en cuestion de horas.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Precios para vaciar un piso en {cityName}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { s: "Piso pequeño (1-2 hab.)", p: "200-400€" },
                { s: "Piso mediano (3 hab.)", p: "400-700€" },
                { s: "Casa grande / chalet", p: "700-1.500€" },
                { s: "Trastero o garaje", p: "100-400€" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border">
                  <span className="text-sm text-muted-foreground">{item.s}</span>
                  <span className="font-bold text-foreground">{item.p}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              * Precios orientativos IVA incluido para {cityName}. Presupuesto exacto y cerrado antes de empezar.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Preguntas frecuentes - Vaciado de pisos en {cityName}
            </h3>
            <div className="space-y-3">
              {[
                { q: `¿Cuanto cuesta vaciar un piso en ${cityName}?`, a: `El precio depende del tamaño del piso y la cantidad de muebles. Un piso pequeño en ${cityName} desde 200€, mediano desde 400€, grande desde 700€. Presupuesto cerrado y gratuito antes de empezar.` },
                { q: `¿Haceis vaciado urgente en ${cityName}?`, a: `Si, ofrecemos vaciado de pisos urgente en ${cityName} en 24-48 horas. Ideal para entregas de llaves inminentes, desahucios o ventas con fecha limite.` },
                { q: `¿Vaciais pisos por herencia en ${cityName}?`, a: `Si. El vaciado de casa por herencia en ${cityName} es uno de nuestros servicios mas solicitados. Nos encargamos de todo con total respeto y profesionalidad.` },
                { q: `¿Tambien vaciais trasteros y locales en ${cityName}?`, a: `Si, ademas de pisos y casas, vaciamos trasteros, garajes, locales comerciales y oficinas en ${cityName} y alrededores de ${province}.` },
                { q: `¿Haceis mudanzas en ${cityName}?`, a: `Si, ofrecemos mudanzas economicas en ${cityName}. Portes, pequeñas mudanzas y transporte de muebles entre domicilios con equipo profesional y furgonetas equipadas. Presupuesto gratuito.` },
              ].map((faq, i) => (
                <details key={i} className="group rounded-xl bg-muted/30 border border-border">
                  <summary className="flex items-center justify-between p-4 cursor-pointer list-none font-medium text-sm text-foreground">
                    {faq.q}
                  </summary>
                  <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY CITIES */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-lg font-bold text-foreground mb-4">
              Vaciado de pisos en ciudades cercanas a {cityName}
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((c) => (
                <Link
                  key={c}
                  href={`/${c}`}
                  className="text-xs px-3 py-2 rounded-full bg-background border border-border text-muted-foreground hover:border-[#F59E0B]/50 hover:text-[#F59E0B] transition-colors"
                >
                  Vaciado pisos {getCityDisplayName(c)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            ¿Necesitas vaciar un piso o una mudanza en {cityName}?
          </h2>
          <p className="text-muted-foreground mb-6">
            Llamanos para un presupuesto gratuito y sin compromiso.
          </p>
          <a
            href="tel:936941681"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#F59E0B] text-white font-bold text-xl shadow-xl hover:bg-[#D97706] transition-colors"
          >
            <Phone className="h-6 w-6" />
            936 941 681
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
