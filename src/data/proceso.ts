import {
  MessageSquare,
  FileText,
  CreditCard,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react"

export interface ProcesoStep {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

export const proceso: ProcesoStep[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contanos tu proyecto",
    description: "Analizamos tu negocio y objetivo.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Propuesta",
    description: "Definimos solución, alcance, inversión y tiempos.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Inicio",
    description: "Con el pago del 50% comienza el onboarding.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Desarrollo",
    description: "Diseñamos y desarrollamos tu proyecto.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Publicación",
    description: "Revisamos, publicamos y acompañamos la puesta en marcha.",
  },
]
