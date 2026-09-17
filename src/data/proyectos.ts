import { StaticImageData } from "next/image"
import tenesis from "../../public/tenesis.jpg"
import clara from "../../public/clara.png"
import peni from "../../public/peni.jpg"
import sorteo from "../../public/sorteo.jpg"
import mundial from "../../public/mundial.jpg"
import turismo from "../../public/turismo.jpg"
import abogado from "../../public/abogado.jpg"
import dentista from "../../public/dentista.jpg"
import magia from "../../public/magia.jpg"
import pc from "../../public/pc.jpg"
import meraki from "../../public/meraki.jpg"
import analisis from "../../public/analisis.jpeg"
import ferrari from "../../public/ferrari.jpg"

export type ProyectoTipo = "web" | "ecommerce" | "personalizado"

export interface Proyecto {
  titulo: string
  categoria: string
  tipo: ProyectoTipo
  img: StaticImageData
  url: string
}

export const proyectos: Proyecto[] = [
  {
    titulo: "Asistente IA",
    categoria: "Chat Bot IA",
    tipo: "personalizado",
    img: tenesis,
    url: "https://chatbot-vercel-rho.vercel.app/",
  },
  {
    titulo: "Asistente IA Entrenamiento",
    categoria: "Chat Bot IA + Datos",
    tipo: "personalizado",
    img: clara,
    url: "https://chatfitsupabase.vercel.app/",
  },
  {
    titulo: "Limite Vertical",
    categoria: "Turismo",
    tipo: "web",
    img: peni,
    url: "https://limiteverticalmza.com/",
  },
  {
    titulo: "Sorteo Turismo",
    categoria: "Sistema + Base de datos",
    tipo: "personalizado",
    img: sorteo,
    url: "https://bonokids.wolftravel.com.ar/",
  },
  {
    titulo: "Promoción Mundial",
    categoria: "Web Promocional + Sistema de correos",
    tipo: "personalizado",
    img: mundial,
    url: "https://mundial.wolftravel.com.ar/",
  },
  {
    titulo: "Turismo Aventura",
    categoria: "Turismo",
    tipo: "web",
    img: turismo,
    url: "https://turismoa.netlify.app/",
  },
  {
    titulo: "Estudio Serio",
    categoria: "Abogacía",
    tipo: "web",
    img: abogado,
    url: "https://estudioserio.com.ar/",
  },
  {
    titulo: "Dental Studio",
    categoria: "Salud",
    tipo: "web",
    img: dentista,
    url: "https://dentista-smoky.vercel.app",
  },
  {
    titulo: "Agustin Magia",
    categoria: "Arte",
    tipo: "web",
    img: magia,
    url: "https://agustinmagia.netlify.app",
  },
  {
    titulo: "Modo PC",
    categoria: "Tecnología",
    tipo: "personalizado",
    img: pc,
    url: "https://modopc.netlify.app",
  },
  {
    titulo: "Meraki Arte",
    categoria: "E-commerce",
    tipo: "ecommerce",
    img: meraki,
    url: "https://merakiarteinsumo.com/",
  },
  {
    titulo: "Análisis de Datos IA",
    categoria: "Inteligencia Artificial",
    tipo: "personalizado",
    img: analisis,
    url: "https://zestly-0a3ce8.webflow.io/",
  },
  {
    titulo: "Ferrari",
    categoria: "Automovilismo",
    tipo: "web",
    img: ferrari,
    url: "https://ferrari7.netlify.app/",
  },
]
