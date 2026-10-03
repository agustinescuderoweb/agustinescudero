import type { StaticImageData } from "next/image"
import estudiantil from "../../public/mdzestudiantil.jpeg"
import limiteVertical from "../../public/rental.jpeg"
import turismoAventura from "../../public/turismoa.jpeg"

/**
 * ============================================================
 *  PROYECTOS DESTACADOS DE /turismo  —  EDITAR ACÁ
 * ============================================================
 * Título, categoría, imagen y URL salen de src/data/proyectos.ts (datos reales).
 * Los campos que empiezan con "PROYECTO N —" son PLACEHOLDERS: reemplazalos
 * por el texto real. No se inventó cliente, problema, solución ni tecnologías.
 *
 * Para cambiar un proyecto: editá su objeto, o cambiá la imagen importada arriba.
 */

export interface TourismProject {
  title: string
  /** Nombre del cliente. */
  client: string
  category: string
  description: string
  problem: string
  solution: string
  image: StaticImageData
  imageAlt: string
  technologies: string[]
  /** URL pública. Si está vacía, el botón lleva al portafolio. */
  url: string
}

export const PLACEHOLDER_PREFIX = "PROYECTO"

/** True si el texto todavía es un placeholder sin completar. */
export const isPending = (value: string) => value.startsWith(PLACEHOLDER_PREFIX)

export const tourismProjects: TourismProject[] = [
  {
    title: "Mendoza Estudiantil",
    client: "Mendoza Estudiantil",
    category: "Turismo / Desarrollo Web",
    description: "Esta web esta destinada a turismo regional mendocino",
    problem: "Se buscaba realizar una web intuitiva con el objetivo de contactar con nuevos clientes",
    solution: "Contacto de clientes por medio de whatsaap",
    image: estudiantil,
    imageAlt: "Captura completa del sitio Mendoza Estudiantil",
    technologies: [],
    url: "https://www.mendozaestudiantil.com.ar/",
  },
  {
    title: "Limite Vertical",
    client: "Límite Vertical",
    category: "Turismo / Desarrollo Ecommerce",
    description: "Esta tienda fué creada para alquilar servicios de Sky",
    problem: "Necesitaban crear un sitio donde promover y alquilar sus servicios",
    solution: "Sistema de Alquiler de Equipos + contactos a Whatsaap",
    image: limiteVertical,
    imageAlt: "Captura del proyecto Limite Vertical",
    technologies: [],
    url: "https://limiteverticalmza.com/",
  },
  {
    title: "Turismo Aventura",
    client: "Turismo Aventura",
    category: "Turismo / Desarrollo Web",
    description: "Web genérica de turismo + contacto a whatsaap + formulario y correo",
    problem: "Necesidad de mostrar servicios turisticos y contacto real",
    solution: "Los clientes pueden informarse y contactar a los vendedores por medio de whatssap y correo electrónico",
    image: turismoAventura,
    imageAlt: "Captura del proyecto Turismo Aventura",
    technologies: [],
    url: "https://turismoa.netlify.app/",
  },
]
