'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Check } from 'lucide-react'
import Menu from '@/app/componetes/inicio/menu'
import Footer from '@/app/componetes/inicio/footer'
import sitio from '../../../../public/sitio.jpg'

const beneficios = [
  'Presencia online las 24 horas',
  'Mayor credibilidad y profesionalismo',
  'Captación constante de clientes',
  'Control total de tu marca digital',
]

const incluye = [
  'Formulario de contacto',
  'Diseño responsive (mobile, tablet y desktop)',
  'Dominio personalizado',
  'Enlaces a redes sociales',
  'Secciones a medida',
  'Múltiples páginas',
]

const faqs = [
  {
    pregunta: '¿Cuánto tarda en desarrollarse un sitio web?',
    respuesta: 'En promedio entre 1 y 3 semanas, según el alcance del proyecto.',
  },
  {
    pregunta: '¿Puedo solicitar cambios luego de la entrega?',
    respuesta: 'Sí, incluyo revisiones según el paquete contratado.',
  },
  {
    pregunta: '¿El sitio queda preparado para Google?',
    respuesta: 'Sí, aplico buenas prácticas SEO para que Google pueda indexarlo correctamente.',
  },
]

export default function Page() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' })
  }, [])

  return (
    <>
      <Head>
        <title>Diseño de Sitios Web Profesionales | Agustín Escudero</title>
        <meta
          name="description"
          content="Diseño y desarrollo de sitios web profesionales para negocios y marcas personales. Sitios rápidos, modernos y optimizados para generar confianza y clientes."
        />
        <meta
          name="keywords"
          content="diseño web, desarrollo web, sitio web profesional, páginas web, web para negocios"
        />
        <meta property="og:title" content="Diseño de Sitios Web Profesionales" />
        <meta
          property="og:description"
          content="Creá una presencia online sólida con un sitio web profesional, rápido y adaptable."
        />
        <meta property="og:image" content="https://agustinescuderoweb.com/logo.png" />
        <meta property="og:url" content="https://agustinescuderoweb.com/servicios/sitios" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Menu />

      <main className="bg-[#0a0a0a] text-white">

        {/* HERO */}
        <section className="flex flex-col md:flex-row min-h-screen border-b border-white/[0.06]">

          {/* Texto */}
          <div className="flex flex-col justify-end flex-1 px-8 md:px-16 pb-16 pt-32 gap-6">
            <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
              Servicio
            </span>

            <h1 className="text-4xl md:text-[2.8rem] font-bold leading-[1.1] tracking-tight text-[#f0ede8] max-w-lg">
              Diseño de Sitios Web Profesionales
            </h1>

            <p className="text-white/50 max-w-md text-[0.95rem] leading-relaxed">
              Tu sitio web es la base de tu presencia digital. Diseño sitios modernos,
              rápidos y pensados para transmitir confianza y convertir visitas en clientes.
            </p>

            <div className="flex gap-3 flex-wrap pt-2">
              <a
                href="https://wa.link/elp2e3"
                className="
                  inline-flex items-center gap-2
                  bg-lime-400 text-[#0a0a0a]
                  px-6 py-3 rounded-[10px]
                  text-sm font-semibold
                  transition-all duration-200
                  hover:bg-lime-300 hover:-translate-y-[2px]
                  !no-underline
                "
              >
                Solicitar mi sitio web
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative flex-1 min-h-[340px] md:min-h-screen">
            <Image
              src={sitio}
              alt="Ejemplo de diseño de sitio web profesional"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
          </div>

        </section>

        {/* BENEFICIOS */}
        <section className="py-24 px-6 border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto">

            <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
              Por qué tener un sitio web
            </span>
            <h2 className="mt-3 text-2xl md:text-[1.8rem] font-bold tracking-tight text-[#f0ede8] mb-12">
              Beneficios de tener tu sitio web
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beneficios.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="
                    bg-[#111111]
                    border border-white/[0.07]
                    rounded-2xl p-6
                    flex items-center gap-4
                    transition-all duration-300
                    hover:border-lime-400/30
                  "
                >
                  <div className="
                    w-8 h-8 rounded-lg flex-shrink-0
                    bg-lime-400/10 border border-lime-400/25
                    flex items-center justify-center
                  ">
                    <Check size={14} className="text-lime-400" />
                  </div>
                  <span className="text-white/70 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="py-24 px-6 border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto">

            <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
              Detalle del servicio
            </span>
            <h2 className="mt-3 text-2xl md:text-[1.8rem] font-bold tracking-tight text-[#f0ede8] mb-12">
              ¿Qué incluye tu sitio web?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {incluye.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  className="
                    bg-[#111111]
                    border border-white/[0.07]
                    rounded-2xl p-5
                    flex items-center gap-4
                    transition-all duration-300
                    hover:border-lime-400/30
                  "
                >
                  <div className="
                    w-7 h-7 rounded-lg flex-shrink-0
                    bg-lime-400/10 border border-lime-400/25
                    flex items-center justify-center
                  ">
                    <Check size={13} className="text-lime-400" />
                  </div>
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.link/elp2e3"
              className="
                inline-flex items-center gap-2
                bg-lime-400 text-[#0a0a0a]
                px-6 py-3 rounded-[10px]
                text-sm font-semibold
                transition-all duration-200
                hover:bg-lime-300 hover:-translate-y-[2px]
                !no-underline
              "
            >
              Solicitar presupuesto
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">

            <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
              FAQ
            </span>
            <h2 className="mt-3 text-2xl md:text-[1.8rem] font-bold tracking-tight text-[#f0ede8] mb-12">
              Preguntas frecuentes
            </h2>

            <div className="flex flex-col gap-0">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  className="py-8 border-b border-white/[0.06]"
                >
                  <h3 className="text-[#f0ede8] font-semibold text-base mb-3">
                    {faq.pregunta}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
