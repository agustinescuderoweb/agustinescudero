import { Monitor, ShoppingCart, type LucideIcon } from "lucide-react"
import { waLink } from "@/lib/site"

export interface ProductFeature {
  label: string
}

export interface Product {
  slug: string
  icon: LucideIcon
  name: string
  description: string
  price: string
  features: string[]
  deliveryText: string
  ctaLabel: string
  ctaHref: string
  featured?: boolean
}

export const products: Product[] = [
  {
    slug: "web-business",
    icon: Monitor,
    name: "Web Business",
    description:
      "Para profesionales y empresas que necesitan una presencia digital profesional orientada a generar consultas y clientes.",
    price: "Desde US$450",
    features: [
      "Diseño profesional personalizado",
      "Hasta 5 páginas o secciones",
      "Responsive",
      "WhatsApp",
      "Formularios",
      "SEO inicial",
      "Google Analytics",
      "Search Console",
      "SSL",
      "Optimización",
      "2 rondas de modificaciones",
      "Capacitación",
      "30 días de soporte",
    ],
    deliveryText: "Entrega objetivo: 10 días hábiles",
    ctaLabel: "Quiero mi Web Business",
    ctaHref: waLink("Hola Agustín, quiero info sobre Web Business"),
  },
  {
    slug: "ecommerce-business",
    icon: ShoppingCart,
    name: "Ecommerce Business",
    description:
      "Una tienda online profesional configurada para mostrar productos, recibir pagos y gestionar pedidos.",
    price: "Desde US$900",
    features: [
      "Diseño profesional",
      "Catálogo de productos",
      "Carrito",
      "Checkout",
      "Mercado Pago",
      "Transferencia",
      "Configuración básica de envíos",
      "Categorías",
      "Hasta 20 productos iniciales",
      "Gestión de pedidos",
      "Emails transaccionales",
      "SEO inicial",
      "Google Analytics",
      "Search Console",
      "Responsive",
      "Capacitación",
      "30 días de soporte",
    ],
    deliveryText: "Entrega objetivo: 15–20 días hábiles",
    ctaLabel: "Quiero mi Ecommerce",
    ctaHref: waLink("Hola Agustín, quiero info sobre Ecommerce Business"),
    featured: true,
  },
]
