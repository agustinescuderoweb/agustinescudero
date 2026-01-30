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

      <main>
        {/* HERO */}
        <section className="relative flex flex-col md:flex-row min-h-screen bg-black text-white">
          <div className="flex flex-col md:w-1/2 justify-center items-center text-center px-8 gap-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Diseño de Sitios Web Profesionales
            </h1>

            <p className="text-gray-300 max-w-xl">
              Tu sitio web es la base de tu presencia digital. Diseño sitios modernos,
              rápidos y pensados para transmitir confianza y convertir visitas en clientes.
            </p>

            <a
              href="https://wa.link/elp2e3"
              className="relative group bg-[rgb(50,205,50)] text-white px-8 py-4 font-bold rounded-md overflow-hidden transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              Solicitar mi sitio web
            </a>
          </div>

          <div className="relative md:w-1/2 h-[400px] md:h-auto">
            <Image
              src={sitio}
              alt="Ejemplo de diseño de sitio web profesional"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-60"
            />
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="py-20 px-8 text-center">
          <h2 className="text-4xl font-semibold mb-12">Beneficios de tener tu sitio web</h2>

          <ul className="flex flex-col items-center gap-6">
            {[
              'Presencia online las 24 horas',
              'Mayor credibilidad y profesionalismo',
              'Captación constante de clientes',
              'Control total de tu marca digital',
            ].map((item, i) => (
              <li
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="w-full max-w-lg bg-gray-100 p-5 rounded-lg text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="bg-black text-white py-20 px-8">
          <h2 className="text-4xl font-semibold text-center mb-16">
            ¿Qué incluye tu sitio web?
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              'Formulario de contacto',
              'Diseño responsive (mobile, tablet y desktop)',
              'Dominio personalizado',
              'Enlaces a redes sociales',
              'Secciones a medida',
              'Múltiples páginas',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white text-black p-6 rounded-lg shadow-lg"
              >
                <Check size={28} className="text-green-500" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <a
              href="https://wa.link/elp2e3"
              className="relative group bg-[rgb(50,205,50)] px-10 py-4 font-bold rounded-md transition-transform hover:scale-105"
            >
              Solicitar presupuesto
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-20 px-8 text-center">
          <h2 className="text-3xl font-bold mb-10">Preguntas frecuentes</h2>

          <div className="max-w-3xl mx-auto space-y-8 text-left">
            <div>
              <h3 className="font-semibold text-lg">
                ¿Cuánto tarda en desarrollarse un sitio web?
              </h3>
              <p className="text-gray-600">
                En promedio entre 1 y 3 semanas, según el alcance del proyecto.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿Puedo solicitar cambios luego de la entrega?
              </h3>
              <p className="text-gray-600">
                Sí, incluyo revisiones según el paquete contratado.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿El sitio queda preparado para Google?
              </h3>
              <p className="text-gray-600">
                Sí, aplico buenas prácticas SEO para que Google pueda indexarlo correctamente.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
