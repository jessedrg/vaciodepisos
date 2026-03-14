import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { CITIES_SPAIN, getCityDisplayName } from "@/lib/cities"
import { Phone, Clock, CheckCircle2, Truck, Euro, Home, Building2, Warehouse, Package, ArrowRight, Recycle, MapPin, ChevronDown, Boxes } from "lucide-react"

export const metadata: Metadata = {
  title: "Vaciado de Pisos y Casas | Rapido, Economico | Toda España",
  description:
    "Vaciado de pisos, casas, trasteros, garajes, locales y oficinas en toda España. Servicio rapido y economico. Retirada de muebles y enseres. Presupuesto GRATIS. ☎️ 936 941 681.",
  keywords:
    "vaciado de pisos, vaciar piso, vaciado de casas, vaciar casa, vaciar piso precio, vaciar casa precio, empresa vaciado de pisos, empresa vaciar pisos, vaciado de viviendas, vaciar vivienda, vaciado de muebles, retirar muebles piso, retirada de muebles, retirar muebles viejos, vaciar trastero, vaciado de trasteros, vaciar garaje, vaciar local comercial, vaciado de locales, vaciado de oficinas, limpiar piso vacio, vaciado de casa por herencia, vaciar piso herencia, vaciar piso urgente, vaciado de pisos urgente, vaciar casa urgente, vaciar piso rapido, vaciado de casas completo, vaciado integral de pisos, empresa vaciado de viviendas, servicio vaciado de pisos, vaciado de muebles viejos, vaciado de enseres, retirada de enseres, vaciar casa de muebles, vaciar piso de muebles, vaciado de piso gratis, vaciado de pisos economico, vaciado de pisos cerca de mi, mudanzas, empresa de mudanzas, mudanzas economicas, portes y mudanzas, portes economicos, pequeñas mudanzas, mudanzas locales, mudanzas baratas, empresa de portes, servicio de mudanzas, mini mudanzas, mudanzas pisos, transporte de muebles",
  openGraph: {
    title: "Vaciado de Pisos y Casas | Rapido y Economico | Toda España",
    description:
      "Servicio profesional de vaciado de pisos, casas, trasteros y locales. Retirada de muebles y enseres. Presupuesto GRATIS sin compromiso.",
    type: "website",
    locale: "es_ES",
    siteName: "Vaciado de Pisos",
  },
  alternates: {
    canonical: "/",
  },
}

const PROVINCE_DISPLAY: Record<string, string> = {
  barcelona: "Barcelona", girona: "Girona", tarragona: "Tarragona", lleida: "Lleida",
  madrid: "Madrid", malaga: "Málaga", sevilla: "Sevilla", granada: "Granada",
  cordoba: "Córdoba", cadiz: "Cádiz", almeria: "Almería", huelva: "Huelva", jaen: "Jaén",
  valencia: "Valencia", alicante: "Alicante", castellon: "Castellón",
  bizkaia: "Bizkaia", gipuzkoa: "Gipuzkoa", araba: "Álava",
  a_coruna: "A Coruña", pontevedra: "Pontevedra", ourense: "Ourense", lugo: "Lugo",
  valladolid: "Valladolid", burgos: "Burgos", leon: "León", salamanca: "Salamanca",
  zamora: "Zamora", palencia: "Palencia", segovia: "Segovia", soria: "Soria", avila: "Ávila",
  toledo: "Toledo", ciudad_real: "Ciudad Real", albacete: "Albacete",
  guadalajara: "Guadalajara", cuenca: "Cuenca",
  zaragoza: "Zaragoza", huesca: "Huesca", teruel: "Teruel",
  murcia: "Murcia", baleares: "Baleares",
  las_palmas: "Las Palmas", tenerife: "Tenerife",
  asturias: "Asturias", cantabria: "Cantabria", navarra: "Navarra", la_rioja: "La Rioja",
  badajoz: "Badajoz", caceres: "Cáceres", ceuta_melilla: "Ceuta y Melilla",
}

const HIDDEN_PROVINCES = ["expansion_batch_2"]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "#service",
  name: "Vaciado de Pisos y Casas - España",
  description:
    "Servicio profesional de vaciado de pisos, casas, viviendas, trasteros, garajes, locales y oficinas en toda España. Retirada de muebles, enseres y vaciado integral.",
  provider: {
    "@type": "Organization",
    name: "Vaciado de Pisos España",
    telephone: "+34936941681",
  },
  areaServed: { "@type": "Country", name: "España" },
  serviceType: [
    "Vaciado de pisos", "Vaciado de casas", "Vaciado de viviendas",
    "Retirada de muebles", "Vaciado de trasteros", "Vaciado de locales",
    "Vaciado de oficinas", "Vaciado de garajes",
    "Mudanzas", "Portes y mudanzas", "Pequeñas mudanzas", "Transporte de muebles",
  ],
  offers: { "@type": "Offer", priceCurrency: "EUR", price: "0", description: "Presupuesto gratuito sin compromiso" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuanto cuesta vaciar un piso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de vaciar un piso depende del tamaño y la cantidad de muebles. Un piso pequeño (1-2 habitaciones) cuesta entre 200-400€. Un piso mediano (3 habitaciones) entre 400-700€. Un piso grande o casa completa desde 700€. Presupuesto cerrado y gratuito.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuanto se tarda en vaciar un piso completo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un vaciado de piso estandar se completa en 2-4 horas. Pisos grandes o con mucha acumulacion pueden requerir un dia completo. Ofrecemos servicio urgente para vaciar pisos en el mismo dia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Vaciais pisos por herencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, realizamos vaciado de casas por herencia. Nos encargamos de retirar todos los muebles, enseres y objetos personales, dejando la vivienda completamente vacia y limpia para su venta o alquiler.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tambien vaciais trasteros, garajes y locales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, ofrecemos vaciado de trasteros, garajes, locales comerciales y oficinas. El servicio incluye carga, transporte y gestion de residuos de todos los enseres.",
      },
    },
    {
      "@type": "Question",
      name: "¿El vaciado de pisos puede ser gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En algunos casos, si el piso contiene objetos de valor (muebles antiguos, electrodomesticos funcionando), el vaciado puede salir gratis o a coste reducido. Evaluamos cada caso con presupuesto gratuito.",
      },
    },
    {
      "@type": "Question",
      name: "¿Haceis mudanzas y portes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, ofrecemos servicio de mudanzas, portes y pequeñas mudanzas. Transporte de muebles y enseres entre domicilios. Mudanzas economicas con equipo profesional y furgonetas equipadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuanto cuesta una mudanza o porte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de una mudanza depende de la distancia, volumen y accesibilidad. Pequeñas mudanzas o portes desde 80€. Mudanzas de piso completo desde 300€. Siempre con presupuesto cerrado y gratuito.",
      },
    },
  ],
}

const faqs = [
  {
    q: "¿Cuanto cuesta vaciar un piso completo?",
    a: "El precio de vaciar un piso depende del tamaño de la vivienda y la cantidad de muebles y enseres a retirar. Un piso pequeño (1-2 habitaciones) cuesta entre 200-400€. Un piso mediano de 3 habitaciones entre 400-700€. Casas grandes o pisos con mucha acumulacion desde 700€. Siempre damos presupuesto cerrado y gratuito antes de empezar. Sin sorpresas.",
  },
  {
    q: "¿Cuanto se tarda en vaciar un piso?",
    a: "Un vaciado de piso estandar con 3 habitaciones se completa en 2-4 horas. Pisos mas grandes o con mucha acumulacion pueden requerir un dia completo. Ofrecemos vaciado de pisos urgente para necesidades inmediatas, completando el trabajo en el mismo dia.",
  },
  {
    q: "¿Vaciais pisos y casas por herencia?",
    a: "Si. El vaciado de casa por herencia es uno de nuestros servicios mas solicitados. Nos encargamos de retirar absolutamente todos los muebles, enseres y objetos personales. Dejamos la vivienda completamente vacia y limpia, lista para vender o alquilar. Tratamos los recuerdos familiares con el maximo respeto.",
  },
  {
    q: "¿Tambien vaciais trasteros, garajes y locales comerciales?",
    a: "Si. Ademas del vaciado de pisos y casas, ofrecemos vaciado de trasteros, vaciado de garajes, vaciado de locales comerciales y vaciado de oficinas. El servicio incluye carga, transporte y gestion de todos los residuos y enseres.",
  },
  {
    q: "¿Que haceis con los muebles y enseres retirados?",
    a: "Los muebles viejos y enseres en buen estado se donan a entidades sociales o se reciclan. El resto se transporta al punto limpio correspondiente. Gestionamos el 100% de los residuos de forma legal y ecologica.",
  },
  {
    q: "¿El vaciado de pisos puede ser gratis?",
    a: "En algunos casos, si. Si el piso contiene objetos de valor (muebles antiguos, electrodomesticos funcionando, metales), el vaciado de piso puede salir gratis o a coste muy reducido. Evaluamos cada caso individualmente con un presupuesto gratuito y sin compromiso.",
  },
  {
    q: "¿Ofreceis limpieza despues del vaciado?",
    a: "Si. Podemos limpiar el piso vacio tras el vaciado completo. El servicio de limpieza post-vaciado deja la vivienda lista para entrar a vivir, vender o alquilar. Incluye barrido, fregado, limpieza de baños y cocina.",
  },
  {
    q: "¿Haceis mudanzas y portes?",
    a: "Si. Ademas del vaciado de pisos, ofrecemos servicio de mudanzas, portes y pequeñas mudanzas. Nos encargamos del transporte de muebles y enseres entre domicilios. Mudanzas economicas con equipo profesional, furgonetas equipadas y seguro de transporte incluido.",
  },
  {
    q: "¿Cuanto cuesta una mudanza o porte?",
    a: "El precio de una mudanza depende de la distancia, volumen y accesibilidad. Pequeñas mudanzas o portes desde 80€. Mudanzas de piso completo desde 300€. Siempre con presupuesto cerrado y gratuito.",
  },
  {
    q: "¿Trabajais en toda España?",
    a: "Si. Nuestro servicio de vaciado de pisos y mudanzas cubre toda España: Madrid, Barcelona, Valencia, Sevilla, Malaga, Bilbao, Zaragoza y todas las demas ciudades y pueblos. Selecciona tu localidad en la seccion de ciudades.",
  },
]

export default function HomePage() {
  const provinces = Object.entries(CITIES_SPAIN)
    .filter(([province]) => !HIDDEN_PROVINCES.includes(province))
    .sort((a, b) => b[1].length - a[1].length)

  const topProvinces = provinces.slice(0, 8)
  const totalCities = provinces.reduce((sum, [, cities]) => sum + cities.length, 0)

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative bg-background px-4 py-20 sm:py-28 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-foreground/5 rounded-full blur-3xl scale-150" />
              <div className="relative inline-flex items-center justify-center h-28 w-28 md:h-32 md:w-32 rounded-full bg-foreground text-background shadow-2xl">
                <Truck className="h-14 w-14 md:h-16 md:w-16" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-foreground text-background text-sm font-bold shadow-lg">
              <Clock className="h-4 w-4" />
              <span>Presupuesto gratis • Respuesta inmediata</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] max-w-5xl">
              Vaciado de Pisos y Casas
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl leading-tight">
              Vaciamos tu piso, casa, trastero o local. Rapido, economico y sin que tengas que hacer nada.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              <strong>Empresa de vaciado de pisos</strong> en toda España. Retiramos muebles, enseres y todo tipo de objetos.
              Servicio integral: vaciado + limpieza + gestion de residuos.
            </p>

            <a
              href="tel:936941681"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F59E0B] text-white font-bold text-lg shadow-xl hover:bg-[#D97706] transition-colors"
            >
              <Phone className="h-5 w-5" />
              Llamar: 936 941 681
            </a>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-4 text-sm text-muted-foreground">
              <span>Sin compromiso</span>
              <span className="hidden sm:inline">•</span>
              <span>Profesionales verificados</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-foreground">24h</p>
              <p className="text-sm text-muted-foreground">Respuesta rapida</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">Gratis</p>
              <p className="text-sm text-muted-foreground">Presupuesto sin compromiso</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Gestion legal de residuos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">{totalCities}+</p>
              <p className="text-sm text-muted-foreground">Ciudades con cobertura</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="servicios" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
            Servicios de vaciado que ofrecemos
          </h2>
          <p className="text-muted-foreground mb-10">
            Empresa de vaciado de viviendas, locales y todo tipo de espacios en toda España
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Home, title: "Vaciado de pisos y casas", desc: "Vaciado completo de pisos y casas. Retiramos todos los muebles, electrodomesticos y enseres. Servicio de vaciado integral de pisos con limpieza incluida." },
              { icon: Home, title: "Vaciado de casa por herencia", desc: "Vaciar piso o casa por herencia con total respeto. Nos encargamos de retirar todos los muebles y enseres, dejando la vivienda lista para venta o alquiler." },
              { icon: Package, title: "Vaciado de trasteros", desc: "Vaciar trastero completo. Retiramos trastos viejos, muebles almacenados, cajas y todo tipo de enseres acumulados. Vaciado de trasteros rapido y economico." },
              { icon: Warehouse, title: "Vaciado de garajes", desc: "Vaciar garaje de trastos, muebles viejos y objetos acumulados. Dejamos el garaje completamente vacio y limpio, listo para usar." },
              { icon: Building2, title: "Vaciado de locales y oficinas", desc: "Vaciar local comercial u oficina. Vaciado de locales completo con retirada de mobiliario, estanterias, equipos y enseres de oficina." },
              { icon: Recycle, title: "Retirada de muebles y enseres", desc: "Retirar muebles viejos, retirada de muebles de piso, retirada de enseres y vaciado de muebles. Recogemos y gestionamos todo tipo de mobiliario." },
              { icon: Boxes, title: "Mudanzas y portes", desc: "Servicio de mudanzas economicas, portes y pequeñas mudanzas. Transporte de muebles entre domicilios. Empresa de mudanzas con furgonetas equipadas y equipo profesional." },
              { icon: Truck, title: "Pequeñas mudanzas y mini portes", desc: "Mini mudanzas y portes economicos para muebles sueltos, electrodomesticos o cajas. Mudanzas locales rapidas y asequibles. Portes y mudanzas sin complicaciones." },
            ].map((service, i) => (
              <div key={i} className="p-6 rounded-2xl bg-muted/30 border border-border">
                <div className="p-2 rounded-xl bg-[#F59E0B]/10 w-fit mb-4">
                  <service.icon className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">
            Como funciona nuestro servicio de vaciado de pisos
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {[
              "Llamanos o pide presupuesto online. Cuentanos que necesitas vaciar: piso, casa, trastero, garaje o local.",
              "Un profesional visita el espacio (o valoramos por fotos) y te da presupuesto cerrado gratuito.",
              "El equipo acude con furgoneta, retira todos los muebles, enseres y objetos. Vaciado rapido y limpio.",
              "Gestionamos los residuos: donacion, reciclaje y punto limpio. Te entregamos el espacio vacio y limpio.",
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="p-6 rounded-2xl bg-background border border-border h-full">
                  <div className="w-10 h-10 rounded-full bg-[#F59E0B] text-white font-bold flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                </div>
                {i < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-[#F59E0B] -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>

          {/* SEO CONTENT BLOCKS */}
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Vaciado de pisos: servicio completo e integral
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Cuando necesitas <strong>vaciar un piso</strong> completo, ya sea por mudanza, reforma, herencia o simplemente porque quieres deshacerte de muebles viejos, lo ultimo que quieres es perder dias cargando muebles y haciendo viajes al punto limpio. Nuestro <strong>servicio de vaciado de pisos</strong> se encarga de absolutamente todo: desde el sofa del salon hasta la ultima caja del trastero.
                </p>
                <p className="leading-relaxed">
                  Somos una <strong>empresa de vaciado de pisos</strong> con cobertura en toda España. Nuestros equipos profesionales llegan con furgonetas preparadas, protegen suelos y paredes durante el trabajo, y retiran cada mueble, electrodomestico y enseres del inmueble. El resultado: un <strong>vaciado de casas completo</strong> en cuestion de horas, con la vivienda lista para lo que necesites.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Vaciar piso por herencia: un proceso delicado
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  El <strong>vaciado de casa por herencia</strong> es una situacion especialmente sensible. Cuando un familiar fallece y hay que <strong>vaciar el piso de la herencia</strong>, enfrentarse a una vivienda llena de recuerdos puede resultar abrumador. Nuestro equipo esta preparado para gestionar el <strong>vaciado de pisos por herencia</strong> con total profesionalidad y respeto.
                </p>
                <p className="leading-relaxed">
                  Nos encargamos de <strong>vaciar la casa de muebles</strong> y enseres, separando los objetos de valor que quieras conservar, donando lo que este en buen estado y gestionando el resto de forma responsable. Si necesitas <strong>vaciar piso herencia</strong> de forma rapida para poder vender o alquilar el inmueble, ofrecemos servicio urgente en 24-48 horas.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Vaciado de trasteros, garajes, locales y oficinas
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Ademas de <strong>vaciar pisos</strong> y casas, ofrecemos <strong>vaciado de trasteros</strong> colapsados de trastos, <strong>vaciar garaje</strong> lleno de objetos acumulados durante años, <strong>vaciar local comercial</strong> tras cierre de negocio y <strong>vaciado de oficinas</strong> con retirada de mobiliario, equipos informaticos y archivo.
                </p>
                <p className="leading-relaxed">
                  Cada tipo de espacio tiene sus particularidades. Un <strong>vaciado de trasteros</strong> suele requerir sacar objetos por escaleras estrechas. <strong>Vaciar un local comercial</strong> puede implicar desmontar estanterias y vitrinas. Nuestros profesionales tienen experiencia en todo tipo de <strong>vaciado de locales</strong> y saben como gestionar cada situacion.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Retirada de muebles viejos y enseres
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  ¿No necesitas vaciar el piso entero sino solo <strong>retirar muebles viejos</strong>? Tambien nos encargamos. Ofrecemos <strong>retirada de muebles</strong> suelta: ese armario que ya no cabe, el sofa viejo, la nevera que no funciona o cualquier <strong>vaciado de muebles viejos</strong> que necesites. Tambien <strong>retirada de enseres</strong> como colchones, somieres, electrodomesticos y trastos en general.
                </p>
                <p className="leading-relaxed">
                  El servicio de <strong>retirar muebles del piso</strong> incluye desmontaje cuando es necesario, proteccion de zonas comunes del edificio, carga en furgoneta y transporte a punto limpio o centro de reciclaje. <strong>Vaciar piso de muebles</strong> nunca fue tan facil: tu no mueves ni un dedo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="precios" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 rounded-3xl bg-[#F59E0B]/5 border border-[#F59E0B]/20">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#F59E0B]/10">
                <Euro className="w-6 h-6 text-[#F59E0B]" />
              </div>
              Precios orientativos: vaciar piso precio
            </h2>
            <p className="text-muted-foreground mb-6">
              Precios orientativos para el <strong>vaciado de pisos economico</strong>. El precio final depende del volumen de muebles y enseres, accesibilidad y ubicacion.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { service: "Vaciar piso pequeño (1-2 hab.)", price: "200-400€" },
                { service: "Vaciar piso mediano (3 hab.)", price: "400-700€" },
                { service: "Vaciar casa grande / chalet", price: "700-1.500€" },
                { service: "Vaciar trastero", price: "100-300€" },
                { service: "Vaciar garaje", price: "150-400€" },
                { service: "Vaciar local comercial", price: "300-800€" },
                { service: "Vaciar oficina", price: "400-1.000€" },
                { service: "Retirar muebles sueltos", price: "Desde 50€" },
                { service: "Pequeña mudanza / porte", price: "Desde 80€" },
                { service: "Mudanza piso completo", price: "Desde 300€" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-background border border-border">
                  <p className="text-sm text-muted-foreground mb-1">{item.service}</p>
                  <p className="font-bold text-foreground text-lg">{item.price}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#F59E0B] font-medium">
              * Precios orientativos IVA incluido. Presupuesto exacto y cerrado antes de empezar. El vaciado de piso puede ser gratis si contiene objetos de valor recuperable.
            </p>
          </div>
        </div>
      </section>

      {/* URGENTE + ECONOMICO */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#F59E0B]" />
                Vaciar piso urgente
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ¿Necesitas <strong>vaciar piso urgente</strong> o <strong>vaciar casa urgente</strong>?
                Ofrecemos <strong>vaciado de pisos urgente</strong> en 24-48 horas. Ideal para desahucios,
                entregas de llaves inminentes o ventas cerradas con fecha limite.
                <strong> Vaciar piso rapido</strong> es nuestra especialidad cuando el tiempo apremia.
              </p>
              <ul className="space-y-2">
                {["Vaciado en 24-48 horas", "Equipos disponibles fines de semana", "Coordinacion con inmobiliarias", "Entrega con limpieza incluida"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Euro className="w-6 h-6 text-[#F59E0B]" />
                Vaciado de pisos economico
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Buscamos siempre el mejor precio. Nuestro <strong>vaciado de pisos economico</strong> ofrece
                la mejor relacion calidad-precio del mercado. Si hay objetos con valor de reventa,
                el <strong>vaciado de piso puede ser gratis</strong> o con descuento importante. Somos la
                <strong> empresa de vaciado de pisos</strong> mas competitiva.
              </p>
              <ul className="space-y-2">
                {["Presupuesto cerrado sin sorpresas", "Posibilidad de vaciado gratis", "Descuento por objetos recuperables", "Sin costes ocultos ni extras"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MUDANZAS SEO CONTENT */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              Mudanzas y portes economicos
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Ademas del vaciado de pisos, somos tu <strong>empresa de mudanzas</strong> de confianza. Ofrecemos <strong>mudanzas economicas</strong> para particulares y empresas en toda España. Desde <strong>pequeñas mudanzas</strong> y <strong>mini portes</strong> hasta mudanzas completas de pisos y oficinas.
              </p>
              <p className="leading-relaxed">
                Nuestro servicio de <strong>portes y mudanzas</strong> incluye equipo profesional, furgonetas equipadas, material de embalaje y seguro de transporte. Ya necesites una <strong>mudanza local</strong>, un <strong>porte economico</strong> de muebles o una <strong>mudanza de piso</strong> completa, nos adaptamos a tus necesidades y presupuesto.
              </p>
              <p className="leading-relaxed">
                ¿Solo necesitas mover unos muebles? Las <strong>pequeñas mudanzas</strong> y <strong>portes economicos</strong> son ideales para transportar sofas, armarios, electrodomesticos o cajas entre domicilios. <strong>Mudanzas baratas</strong> sin renunciar a la calidad del servicio. Pide tu presupuesto gratuito de <strong>mudanzas</strong> hoy mismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CITY LINKS */}
      <section id="ciudades" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-[#F59E0B]/10">
              <MapPin className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">
              Vaciado de pisos en toda España
            </h2>
          </div>
          <p className="text-muted-foreground mb-8 ml-14">
            Servicio en {totalCities}+ ciudades y pueblos. Selecciona tu localidad:
          </p>

          <div className="space-y-6">
            {topProvinces.map(([province, cities]) => (
              <div key={province}>
                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  {PROVINCE_DISPLAY[province] || province} ({cities.length})
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cities.map((city) => (
                    <Link
                      key={city}
                      href={`/${city}`}
                      className="text-xs px-2.5 py-1.5 rounded-full bg-muted/50 border border-border text-muted-foreground hover:border-[#F59E0B]/50 hover:text-[#F59E0B] transition-colors"
                    >
                      {getCityDisplayName(city)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {provinces.length > 8 && (
            <details className="mt-6">
              <summary className="flex items-center gap-2 mx-auto w-fit px-6 py-3 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] font-medium text-sm hover:bg-[#F59E0B]/20 transition-colors cursor-pointer list-none">
                <ChevronDown className="w-4 h-4" />
                Ver las {provinces.length - 8} provincias restantes
              </summary>
              <div className="space-y-6 mt-6">
                {provinces.slice(8).map(([province, cities]) => (
                  <div key={province}>
                    <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      {PROVINCE_DISPLAY[province] || province} ({cities.length})
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cities.map((city) => (
                        <Link
                          key={city}
                          href={`/${city}`}
                          className="text-xs px-2.5 py-1.5 rounded-full bg-muted/50 border border-border text-muted-foreground hover:border-[#F59E0B]/50 hover:text-[#F59E0B] transition-colors"
                        >
                          {getCityDisplayName(city)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">
            Preguntas frecuentes sobre vaciado de pisos
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl bg-background border border-border">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-foreground">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
            ¿Necesitas vaciar un piso?
          </h2>
          <p className="text-muted-foreground mb-8">
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
