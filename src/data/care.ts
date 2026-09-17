import { waLink } from "@/lib/site"
import type { IconName } from "@/lib/icons"

export interface CarePlan {
  icon: IconName
  name: string
  description: string
  features: string[]
  ctaLabel: string
  ctaHref: string
}

export const carePlans: CarePlan[] = [
  {
    icon: "ShieldCheck",
    name: "Web Care",
    description: "Pensado para sitios Web Business.",
    features: [
      "Hosting administrado",
      "Backups",
      "Actualizaciones",
      "Monitoreo",
      "Seguridad",
      "Soporte",
      "Pequeñas modificaciones",
    ],
    ctaLabel: "Consultar Web Care",
    ctaHref: waLink("Hola Agustín, quiero consultar sobre el plan Web Care"),
  },
  {
    icon: "ShoppingBag",
    name: "Commerce Care",
    description: "Pensado para ecommerce.",
    features: [
      "Hosting administrado",
      "Backups",
      "Actualizaciones",
      "Checkout",
      "Pasarelas",
      "Monitoreo",
      "Soporte técnico",
    ],
    ctaLabel: "Consultar Commerce Care",
    ctaHref: waLink(
      "Hola Agustín, quiero consultar sobre el plan Commerce Care"
    ),
  },
]
