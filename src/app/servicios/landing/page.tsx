'use client'

import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '@/app/componetes/inicio/menu'
import Footer from '@/app/componetes/inicio/footer'
import landing from '../../../../public/landing.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Check } from 'lucide-react'

export default function Page() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  return (
    <>
      <Head>
        <title>Landing Pages Profesionales | Agustín Escudero</title>
        <meta
          name="description"
          content="Diseño de landing pages profesionales optimizadas para convertir visitas en clientes. Ideales para campañas en Google e Instagram."
        />
      </Head>

      <Menu />

      <main>
        {/* HERO */}
        <section className="flex flex-col md:flex-row min-h-screen bg-black">
          <div className="flex flex-col justify-center items-center flex-1 px-6 md:px-12 gap-8 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Diseño de Landing Pages que convierten
            </h1>

            <p className="text-gray-300 max-w-xl text-base md:text-lg">
              Landing pages optimizadas para generar contactos, ventas y resultados reales.
              Pensadas para campañas publicitarias y negocios que quieren crecer.
            </p>

            <a
              href="https://wa.link/elp2e3"
              className="bg-[rgb(50,205,50)] text-white px-8 py-4 rounded-md font-bold text-lg transition-transform hover:scale-105"
            >
              Solicitá tu landing
            </a>
          </div>

          <div className="relative flex-1">
            <Image
              src={landing}
              alt="Ejemplo de landing page profesional"
              fill
              priority
              className="object-cover opacity-60"
            />
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="bg-[#f9f9f9] py-20 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            ¿Por qué usar una landing page?
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Se enfoca en un solo objetivo: convertir',
              'Ideal para campañas en Google e Instagram',
              'Más rápida y económica que un sitio completo',
              'Diseñada para mobile y conversiones',
            ].map((item, i) => (
              <li
                key={i}
                data-aos="fade-up"
                className="bg-white p-6 rounded-lg shadow text-lg font-medium"
              >
                ✅ {item}
              </li>
            ))}
          </ul>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="bg-black py-24 px-6 text-center">
          <h2 className="text-4xl text-white font-semibold mb-16">
            ¿Qué incluye tu landing?
          </h2>

          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              'Formulario de contacto',
              'Diseño responsive',
              'Dominio personalizado',
              'Integración con redes sociales',
              'Secciones optimizadas para conversión',
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-lg"
              >
                <Check size={28} className="text-green-500" />
                <span className="text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.link/elp2e3"
            className="inline-block mt-14 bg-[rgb(50,205,50)] text-white px-10 py-4 rounded-md font-bold text-lg transition-transform hover:scale-105"
          >
            Pedí tu landing ahora
          </a>
        </section>

        {/* FAQ */}
        <section className="bg-white px-8 py-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Preguntas frecuentes</h2>

          <div className="max-w-3xl mx-auto space-y-8 text-left">
            <div>
              <h3 className="font-semibold text-lg">
                ¿Cuánto tarda una landing page?
              </h3>
              <p className="text-gray-600">
                Entre 1 y 5 días, dependiendo del contenido y revisiones.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿Incluye SEO?
              </h3>
              <p className="text-gray-600">
                Sí, incluye estructura optimizada para Google desde el inicio.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿Se puede escalar luego a un sitio completo?
              </h3>
              <p className="text-gray-600">
                Sí, la landing puede evolucionar a un sitio web sin rehacer todo.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
