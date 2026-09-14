import {
  BadgeDollarSign,
  Clock,
  ClipboardCheck,
  Headphones,
  type LucideIcon,
} from "lucide-react"

export interface ConfianzaItem {
  icon: LucideIcon
  title: string
  description: string
}

export const confianza: ConfianzaItem[] = [
  {
    icon: BadgeDollarSign,
    title: "Precio claro",
    description: "Sin sorpresas durante el proyecto.",
  },
  {
    icon: Clock,
    title: "Plazos definidos",
    description:
      "El proyecto comienza cuando recibimos toda la información necesaria.",
  },
  {
    icon: ClipboardCheck,
    title: "Alcance definido",
    description: "Antes de comenzar queda claro qué incluye el proyecto.",
  },
  {
    icon: Headphones,
    title: "Soporte",
    description: "Tenés acompañamiento posterior a la publicación.",
  },
]
