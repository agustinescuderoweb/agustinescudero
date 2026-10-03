import { waLink } from "@/lib/site"
import type { FaqItem } from "@/data/faq"

/** Mensajes prearmados de WhatsApp para /turismo. El número vive en src/lib/site.ts. */
export const turismoWa = {
  general: waLink(
    "Hola Agustín, tengo un negocio de turismo y quiero consultar por una web."
  ),
  whatsappPlan: waLink(
    "Hola Agustín, quiero consultar por la Web Turismo + WhatsApp."
  ),
  bookingPlan: waLink(
    "Hola Agustín, quiero consultar por una web con sistema de reservas online."
  ),
}

/** Genera el link "Reservar por WhatsApp" de una experiencia (mensaje conceptual del producto). */
export const experienceWaLink = (name: string) =>
  waLink(`Hola, quiero consultar disponibilidad para ${name}.`)

export const problems: string[] = [
  "Todo termina en mensajes de Instagram.",
  "WhatsApp se llena de las mismas preguntas.",
  "El cliente no encuentra fácilmente precios o servicios.",
  "Las excursiones están dispersas.",
  "No existe un lugar profesional donde mostrar la oferta.",
  "Las reservas se gestionan manualmente.",
  "El negocio depende demasiado de redes sociales.",
]

export interface Plan {
  id: "whatsapp" | "online"
  kicker: string
  title: string
  idealFor: string
  flow: string[]
  benefits: string[]
  cta: string
  ctaHref: string
  contactHref: string
  /** TODO: completar cuando se defina el precio (ej. "Desde US$X"). Vacío = no se muestra. */
  price: string
  note?: string
}

export const plans: Plan[] = [
  {
    id: "whatsapp",
    kicker: "Opción 1",
    title: "Web + WhatsApp",
    idealFor:
      "Quiero una web profesional pero prefiero cerrar personalmente cada reserva.",
    flow: ["Instagram / Google", "Web", "Experiencia", "WhatsApp", "Reserva"],
    benefits: [
      "Centralizá la información de todos tus servicios",
      "Mostrá excursiones, habitaciones y paquetes con fotos, duración y ubicación",
      "Convertí visitas de Instagram en consultas",
      "Reducí las preguntas repetitivas",
      "Presencia profesional en Google",
    ],
    cta: "Quiero esta solución",
    ctaHref: turismoWa.whatsappPlan,
    contactHref: "/contactos?producto=web-business",
    price: "",
  },
  {
    id: "online",
    kicker: "Opción 2",
    title: "Reservas online",
    idealFor:
      "Quiero que mis clientes puedan reservar o comprar directamente desde la web.",
    flow: [
      "Instagram / Google",
      "Web",
      "Experiencia",
      "Fecha / Personas",
      "Pago",
      "Reserva confirmada",
    ],
    benefits: [
      "Vendé las 24 horas",
      "Reducí la gestión manual",
      "Organizá disponibilidad y recibí pagos online",
      "Panel administrativo y emails de confirmación",
      "Una base para escalar tu negocio",
    ],
    cta: "Quiero un sistema de reservas",
    ctaHref: turismoWa.bookingPlan,
    contactHref: "/contactos?producto=ecommerce-business",
    price: "",
    note: "Según el proyecto, algunas funcionalidades se implementan mediante integraciones externas.",
  },
]

export const comparison: { feature: string; whatsapp: boolean; online: boolean }[] = [
  { feature: "Web profesional", whatsapp: true, online: true },
  { feature: "Diseño responsive", whatsapp: true, online: true },
  { feature: "Catálogo de servicios", whatsapp: true, online: true },
  { feature: "Galería", whatsapp: true, online: true },
  { feature: "SEO inicial", whatsapp: true, online: true },
  { feature: "WhatsApp", whatsapp: true, online: true },
  { feature: "Calendario", whatsapp: false, online: true },
  { feature: "Disponibilidad", whatsapp: false, online: true },
  { feature: "Carrito", whatsapp: false, online: true },
  { feature: "Pagos online", whatsapp: false, online: true },
  { feature: "Reservas automáticas", whatsapp: false, online: true },
  { feature: "Panel administrativo", whatsapp: false, online: true },
  { feature: "Emails automáticos", whatsapp: false, online: true },
]

export const audience: string[] = [
  "Agencias de viajes",
  "Excursiones",
  "Alojamientos",
  "Cabañas",
  "Hoteles",
  "Experiencias",
  "Turismo aventura",
  "Operadores turísticos",
]

export const tourismProcess: { number: string; title: string }[] = [
  { number: "01", title: "Conocemos tu negocio" },
  { number: "02", title: "Definimos cómo querés recibir reservas" },
  { number: "03", title: "Diseño y desarrollo" },
  { number: "04", title: "Cargamos tus servicios" },
  { number: "05", title: "Probamos el proceso" },
  { number: "06", title: "Publicamos" },
]

export const aboutTech = ["Next.js", "React", "TypeScript", "Tailwind", "Firebase", "Supabase"]

export const tourismFaq: FaqItem[] = [
  {
    question: "¿La web funciona desde celular?",
    answer:
      "Sí. Se diseña pensando primero en el celular, que es desde donde llega la mayoría del tráfico de Instagram y Google.",
  },
  {
    question: "¿Puedo recibir las reservas por WhatsApp?",
    answer:
      "Sí. Cada excursión, habitación o paquete tiene un botón que abre WhatsApp con un mensaje ya armado con el nombre de la experiencia, así el cliente te escribe directo y con la consulta clara.",
  },
  {
    question: "¿Puedo agregar pagos online?",
    answer:
      "Sí, con la opción de reservas online. Según el proyecto, el cobro se resuelve con una pasarela de pagos integrada. Lo definimos juntos al armar la propuesta.",
  },
  {
    question: "¿Puedo administrar mis excursiones?",
    answer:
      "Sí. Según la solución elegida, podés gestionar tus servicios, fechas y reservas desde un panel o con ayuda mía. Lo acordamos en la propuesta.",
  },
  {
    question: "¿Puedo agregar nuevas experiencias?",
    answer:
      "Sí. La web se arma con una estructura pensada para sumar excursiones, habitaciones o paquetes nuevos sin rehacer el sitio.",
  },
  {
    question: "¿La web aparece en Google?",
    answer:
      "Todas las webs incluyen un SEO inicial: estructura, títulos y velocidad pensados para que Google entienda tu oferta. El posicionamiento depende de varios factores y no se garantizan resultados.",
  },
  {
    question: "¿Necesito tener dominio?",
    answer:
      "Si ya tenés uno, lo usamos. Si no, te ayudamos a elegirlo y registrarlo a tu nombre.",
  },
  {
    question: "¿Puedo empezar con WhatsApp y agregar reservas online después?",
    answer:
      "Sí, y es una muy buena forma de empezar. La web se diseña para evolucionar: hoy recibís consultas por WhatsApp y más adelante sumamos calendario, disponibilidad y pagos sin empezar de cero.",
  },
]
