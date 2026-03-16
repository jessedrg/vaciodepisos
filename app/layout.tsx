import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vaciado de Pisos y Casas | Toda España | Presupuesto Gratis",
  description:
    "Vaciado de pisos, casas, trasteros, garajes, locales y oficinas en toda España. Retirada de muebles y enseres. Servicio rapido y economico. Presupuesto GRATIS. ☎️ 936 941 681.",
  keywords:
    "vaciado de pisos, vaciar piso, vaciado de casas, vaciar casa, empresa vaciado de pisos, retirada de muebles, vaciado de trasteros, vaciado de pisos economico, vaciado de pisos cerca de mi, mudanzas, empresa de mudanzas, mudanzas economicas, portes y mudanzas, portes economicos, pequeñas mudanzas, mudanzas locales",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Vaciado de Pisos y Casas | Toda España",
    description: "Servicio profesional de vaciado de pisos y casas. Presupuesto gratis sin compromiso.",
    type: "website",
    locale: "es_ES",
    siteName: "Vaciado de Pisos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": "#organization",
              name: "Vaciado de Pisos España",
              description:
                "Servicio profesional de vaciado de pisos, casas, viviendas, trasteros, garajes, locales y oficinas en toda España.",
              telephone: "+34936941681",
              priceRange: "€€",
              currenciesAccepted: "EUR",
              paymentAccepted: "Efectivo, Tarjeta, Transferencia",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
                addressRegion: "España",
              },
              areaServed: {
                "@type": "Country",
                name: "España",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "20:00",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34936941681",
                contactType: "customer service",
                availableLanguage: "Spanish",
                areaServed: "ES",
              },
              knowsAbout: [
                "Vaciado de pisos",
                "Vaciado de casas",
                "Retirada de muebles",
                "Vaciado de trasteros",
                "Vaciado de garajes",
                "Vaciado de locales comerciales",
                "Vaciado de oficinas",
                "Vaciado por herencia",
                "Vaciado de enseres",
                "Mudanzas",
                "Portes y mudanzas",
                "Pequeñas mudanzas",
                "Mudanzas economicas",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
          <Navbar />
          <div className="pt-14">{children}</div>
          <Analytics />
        </body>
    </html>
  )
}
