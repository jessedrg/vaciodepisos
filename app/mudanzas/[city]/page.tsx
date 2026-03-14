import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { CITIES_SPAIN, getCityDisplayName, getCityRegion } from "@/lib/cities"
import { Phone, Clock, CheckCircle2, Truck, Euro, Package, ArrowLeft, MapPin, Boxes, ShieldCheck, Route } from "lucide-react"

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
    title: `Mudanzas en ${cityName} | Economicas y Profesionales | Presupuesto Gratis`,
    description: `Mudanzas en ${cityName} (${province}). Empresa de mudanzas economicas, portes, pequeñas mudanzas y transporte de muebles. Equipo profesional. Presupuesto GRATIS. ☎️ 936 941 681.`,
    keywords: `mudanzas ${cityName}, empresa de mudanzas ${cityName}, mudanzas economicas ${cityName}, portes ${cityName}, portes economicos ${cityName}, pequeñas mudanzas ${cityName}, mudanzas baratas ${cityName}, empresa de portes ${cityName}, transporte de muebles ${cityName}, mudanzas locales ${cityName}, mini mudanzas ${cityName}, mudanzas pisos ${cityName}`,
    openGraph: {
      title: `Mudanzas en ${cityName} | Economicas y Profesionales`,
      description: `Servicio de mudanzas economicas en ${cityName}. Portes, pequeñas mudanzas y mudanzas completas. Presupuesto GRATIS.`,
      type: "website",
      locale: "es_ES",
      siteName: "Mudanzas - El Vaciado de Pisos",
    },
    alternates: {
      canonical: `/mudanzas/${city}`,
    },
  }
}

export async function generateStaticParams() {
  const mainProvinces = Object.entries(CITIES_SPAIN)
    .filter(([key]) => key !== "expansion_batch_2")
  const cities = mainProvinces.flatMap(([, c]) => c)
  return cities.map((city) => ({ city }))
}

export default async function MudanzasCityPage({ params }: Props) {
  const { city } = await params

  if (!isValidCity(city)) {
    notFound()
  }

  const cityName = getCityDisplayName(city)
  const province = getCityRegion(city)
  const nearbyCities = getNearbyCities(city)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: `Mudanzas en ${cityName}`,
    description: `Empresa de mudanzas economicas en ${cityName} (${province}). Portes, pequeñas mudanzas, mudanzas de pisos y transporte de muebles.`,
    provider: {
      "@type": "LocalBusiness",
      name: "Mudanzas - El Vaciado de Pisos",
      telephone: "+34936941681",
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName,
        addressRegion: province,
        addressCountry: "ES",
      },
    },
    areaServed: { "@type": "City", name: cityName },
    serviceType: ["Mudanzas", "Portes", "Pequeñas mudanzas", "Transporte de muebles", "Mudanzas de pisos", "Mudanzas de oficinas"],
    offers: { "@type": "Offer", priceCurrency: "EUR", price: "0", description: "Presupuesto gratuito sin compromiso" },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Cuanto cuesta una mudanza en ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `El precio de una mudanza en ${cityName} depende de la distancia, volumen y accesibilidad. Pequeñas mudanzas desde 80€. Mudanzas de piso completo desde 300€. Presupuesto cerrado y gratuito.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Haceis portes economicos en ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Si, ofrecemos portes economicos en ${cityName} desde 50€. Ideal para mover muebles sueltos, electrodomesticos o cajas. Servicio rapido y profesional.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Ofreceis mudanzas de oficinas en ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Si, realizamos mudanzas de oficinas y locales comerciales en ${cityName}. Incluye desmontaje y montaje de mobiliario, embalaje de equipos y transporte seguro.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Las mudanzas incluyen embalaje en ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Si, nuestro servicio de mudanzas en ${cityName} puede incluir embalaje completo: cajas, plastico burbuja, proteccion de muebles y etiquetado. Tambien ofrecemos mudanzas sin embalaje a precio reducido.`,
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
          Inicio
        </Link>
      </div>

      {/* HERO */}
      <section className="px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-foreground text-background shadow-xl">
            <Boxes className="h-10 w-10" />
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-bold">
            <MapPin className="h-4 w-4" />
            {cityName} ({province})
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
            Mudanzas en {cityName}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <strong>Empresa de mudanzas en {cityName}</strong>. Mudanzas economicas, portes, pequeñas mudanzas y transporte de muebles.
            Equipo profesional y furgonetas equipadas. <strong>Presupuesto gratis</strong>.
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

      {/* TRUST BAR */}
      <section className="py-8 border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-foreground">24h</p>
              <p className="text-sm text-muted-foreground">Respuesta rapida</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">Gratis</p>
              <p className="text-sm text-muted-foreground">Presupuesto sin compromiso</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Seguro de transporte</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">Pro</p>
              <p className="text-sm text-muted-foreground">Equipo profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            Servicios de mudanzas en {cityName}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Boxes, title: `Mudanza de piso en ${cityName}`, desc: `Mudanza completa de piso en ${cityName}. Embalaje, carga, transporte y descarga. Montaje y desmontaje de muebles incluido. Mudanzas de pisos economicas.` },
              { icon: Truck, title: `Portes en ${cityName}`, desc: `Portes economicos en ${cityName}. Transporte de muebles sueltos, electrodomesticos, cajas y enseres. Portes rapidos con furgoneta.` },
              { icon: Package, title: `Pequeñas mudanzas en ${cityName}`, desc: `Mini mudanzas y pequeñas mudanzas en ${cityName}. Ideal para mover pocas cosas entre pisos. Servicio rapido y economico.` },
              { icon: Route, title: `Mudanzas locales en ${cityName}`, desc: `Mudanzas locales dentro de ${cityName} y ${province}. Conocemos las rutas, los accesos y las zonas de carga. Mudanzas sin complicaciones.` },
              { icon: ShieldCheck, title: `Mudanzas con seguro en ${cityName}`, desc: `Todas nuestras mudanzas en ${cityName} incluyen seguro de transporte. Tus muebles y enseres protegidos durante todo el trayecto.` },
              { icon: Euro, title: `Mudanzas economicas en ${cityName}`, desc: `Las mudanzas mas economicas de ${cityName}. Mejor relacion calidad-precio. Sin costes ocultos. Presupuesto cerrado y gratuito.` },
              { icon: Clock, title: `Mudanzas urgentes en ${cityName}`, desc: `Mudanzas urgentes en ${cityName} en 24-48 horas. Para entregas de llaves, cambios de piso de ultima hora o mudanzas express.` },
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

      {/* SEO CONTENT */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Empresa de mudanzas en {cityName}: profesionales y economicos
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ¿Buscas una <strong>empresa de mudanzas en {cityName}</strong>? Somos especialistas en <strong>mudanzas economicas en {cityName}</strong> y toda la provincia de {province}. Nuestro equipo profesional se encarga de todo: embalaje, desmontaje de muebles, carga, transporte y montaje en el nuevo domicilio.
              </p>
              <p>
                Realizamos <strong>mudanzas de pisos</strong>, casas, chalets, oficinas y locales comerciales en {cityName}. Cada mudanza incluye furgonetas equipadas con sistemas de sujecion, mantas protectoras y material de embalaje profesional. Tu <strong>mudanza en {cityName}</strong> en manos de profesionales.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Portes y pequeñas mudanzas en {cityName}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                No todas las mudanzas son iguales. Si solo necesitas mover unos muebles o unas cajas, nuestro servicio de <strong>portes en {cityName}</strong> es la solucion perfecta. <strong>Portes economicos</strong> desde 50€ para transportar sofas, armarios, electrodomesticos o cualquier objeto entre domicilios.
              </p>
              <p>
                Las <strong>pequeñas mudanzas en {cityName}</strong> son ideales cuando cambias de piso y no tienes demasiadas cosas, o cuando necesitas mover muebles de una habitacion a otra vivienda. <strong>Mini mudanzas</strong> rapidas, economicas y sin complicaciones. Llama y te hacemos presupuesto al momento.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              ¿Cuanto cuesta una mudanza en {cityName}?
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                El precio de una <strong>mudanza en {cityName}</strong> depende del volumen de objetos, la distancia entre domicilios y la accesibilidad (ascensor, escaleras, zona de carga). Ofrecemos siempre presupuesto cerrado y gratuito para que sepas el coste exacto antes de empezar.
              </p>
            </div>
          </div>

          {/* PRICES */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Precios de mudanzas en {cityName}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { s: "Porte / mini mudanza", p: "Desde 50€" },
                { s: "Pequeña mudanza (estudio/1 hab.)", p: "Desde 150€" },
                { s: "Mudanza piso 2-3 hab.", p: "Desde 300€" },
                { s: "Mudanza casa grande / chalet", p: "Desde 600€" },
                { s: "Mudanza oficina / local", p: "Desde 400€" },
                { s: "Embalaje completo (adicional)", p: "Desde 100€" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border">
                  <span className="text-sm text-muted-foreground">{item.s}</span>
                  <span className="font-bold text-foreground">{item.p}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              * Precios orientativos IVA incluido para mudanzas en {cityName}. Presupuesto exacto y cerrado antes de empezar. Sin sorpresas.
            </p>
          </div>

          {/* HOW IT WORKS */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Como funciona nuestro servicio de mudanzas en {cityName}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { step: "1", title: "Pide presupuesto", desc: `Llamanos o escribenos. Te hacemos presupuesto gratuito para tu mudanza en ${cityName}.` },
                { step: "2", title: "Preparamos todo", desc: "Organizamos la logistica: furgonetas, equipo, material de embalaje y ruta optima." },
                { step: "3", title: "Realizamos la mudanza", desc: "Embalaje, desmontaje, carga, transporte y descarga. Todo en un dia." },
                { step: "4", title: "Montaje en destino", desc: "Montamos tus muebles en el nuevo domicilio y retiramos todo el material de embalaje." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border">
                  <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-white font-bold flex items-center justify-center mb-3 text-sm">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Preguntas frecuentes - Mudanzas en {cityName}
            </h3>
            <div className="space-y-3">
              {[
                { q: `¿Cuanto cuesta una mudanza en ${cityName}?`, a: `El precio depende del volumen, distancia y accesibilidad. Portes desde 50€. Pequeñas mudanzas desde 150€. Mudanzas de piso completo desde 300€. Presupuesto cerrado y gratuito.` },
                { q: `¿Haceis portes economicos en ${cityName}?`, a: `Si, ofrecemos portes economicos en ${cityName} desde 50€. Ideal para mover muebles sueltos, electrodomesticos o cajas entre domicilios.` },
                { q: `¿Las mudanzas incluyen montaje de muebles?`, a: `Si. Nuestro servicio de mudanzas en ${cityName} incluye desmontaje en origen y montaje en destino de todos los muebles. Sin coste adicional.` },
                { q: `¿Ofreceis embalaje para la mudanza?`, a: `Si, podemos encargarnos del embalaje completo: cajas, plastico burbuja, proteccion de muebles y etiquetado. Tambien ofrecemos mudanzas sin embalaje a precio reducido.` },
                { q: `¿Haceis mudanzas urgentes en ${cityName}?`, a: `Si, ofrecemos mudanzas urgentes en ${cityName} en 24-48 horas. Para cambios de piso de ultima hora, entregas de llaves o mudanzas express.` },
                { q: `¿Tambien haceis vaciado de pisos en ${cityName}?`, a: `Si. Ademas de mudanzas, ofrecemos vaciado de pisos, casas, trasteros y locales en ${cityName}. Visita nuestra pagina de vaciado de pisos en ${cityName}.` },
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

      {/* CROSS-LINK TO VACIADO */}
      <section className="py-8 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-3">¿Tambien necesitas vaciar un piso en {cityName}?</p>
          <Link
            href={`/${city}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Ver vaciado de pisos en {cityName}
          </Link>
        </div>
      </section>

      {/* NEARBY CITIES */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-lg font-bold text-foreground mb-4">
              Mudanzas en ciudades cercanas a {cityName}
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((c) => (
                <Link
                  key={c}
                  href={`/mudanzas/${c}`}
                  className="text-xs px-3 py-2 rounded-full bg-muted/50 border border-border text-muted-foreground hover:border-[#F59E0B]/50 hover:text-[#F59E0B] transition-colors"
                >
                  Mudanzas {getCityDisplayName(c)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            ¿Necesitas una mudanza en {cityName}?
          </h2>
          <p className="text-muted-foreground mb-6">
            Llamanos para un presupuesto gratuito y sin compromiso. Respondemos en menos de 1 hora.
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
