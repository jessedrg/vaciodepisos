import Link from "next/link"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-3">Vaciado de Pisos</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Servicio profesional de vaciado de pisos, casas, trasteros y locales en toda España. Presupuesto gratis.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Vaciado de pisos y casas</li>
              <li>Vaciado por herencia</li>
              <li>Retirada de muebles</li>
              <li>Vaciado de trasteros</li>
              <li>Vaciado de locales</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">Ciudades principales</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/madrid" className="hover:text-foreground transition-colors">Vaciado pisos Madrid</Link></li>
              <li><Link href="/barcelona" className="hover:text-foreground transition-colors">Vaciado pisos Barcelona</Link></li>
              <li><Link href="/valencia" className="hover:text-foreground transition-colors">Vaciado pisos Valencia</Link></li>
              <li><Link href="/sevilla" className="hover:text-foreground transition-colors">Vaciado pisos Sevilla</Link></li>
              <li><Link href="/malaga" className="hover:text-foreground transition-colors">Vaciado pisos Malaga</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">Contacto</h3>
            <a
              href="tel:936941681"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-[#F59E0B] transition-colors"
            >
              <Phone className="w-4 h-4" />
              936 941 681
            </a>
            <p className="text-sm text-muted-foreground mt-2">Disponible de lunes a sabado</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vaciado de Pisos España. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
