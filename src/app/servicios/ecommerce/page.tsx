'use client'

import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '@/app/componetes/inicio/menu'
import Footer from '@/app/componetes/inicio/footer'
import ecommerce from '../../../../public/ecommer.jpg'
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
        <title>E-commerce Profesional | Agustín Escudero</title>
        <meta
          name="description"
          content="Diseño y desarrollo de tiendas online profesionales para vender productos 24/7. Ecommerce rápidos, seguros y optimizados para convertir."
        />
      </Head>

      <Menu />

      <main>
        {/* HERO */}
        <section className="flex flex-col md:flex-row min-h-screen bg-black">
          <div className="flex flex-col justify-center items-center flex-1 px-6 md:px-12 gap-8 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Desarrollo de E-commerce profesional
            </h1>

            <p className="text-gray-300 max-w-xl text-base md:text-lg">
              Tu tienda online lista para vender las 24 horas, aceptar pagos seguros
              y escalar tu negocio sin límites geográficos.
            </p>

            <a
              href="https://wa.link/elp2e3"
              className="bg-[rgb(50,205,50)] text-white px-8 py-4 rounded-md font-bold text-lg transition-transform hover:scale-105"
            >
              Solicitá tu ecommerce
            </a>
          </div>

          <div className="relative flex-1">
            <Image
              src={ecommerce}
              alt="Ejemplo de ecommerce profesional"
              fill
              priority
              className="object-cover opacity-60"
            />
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="bg-[#f9f9f9] py-20 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Beneficios de tener tu tienda online
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Ventas online las 24 horas',
              'Alcance ilimitado a nuevos clientes',
              'Menores costos que un local físico',
              'Integración con redes sociales y pagos',
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
            ¿Qué incluye tu ecommerce?
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Catálogo de productos',
              'Carrito de compras',
              'Pagos online seguros',
              'Diseño responsive',
              'Dominio personalizado',
              'Integración con redes sociales',
              'Secciones y páginas personalizadas',
              'Formulario de contacto',
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
            Pedí tu ecommerce ahora
          </a>
        </section>

        {/* FAQ */}
        <section className="bg-white px-8 py-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Preguntas frecuentes</h2>

          <div className="max-w-3xl mx-auto space-y-8 text-left">
            <div>
              <h3 className="font-semibold text-lg">
                ¿Cuánto tarda en desarrollarse un ecommerce?
              </h3>
              <p className="text-gray-600">
                Entre 1 y 3 semanas, según cantidad de productos y funcionalidades.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿Incluye medios de pago?
              </h3>
              <p className="text-gray-600">
                Sí, integro pagos online seguros según tu país y negocio.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿El ecommerce se puede escalar?
              </h3>
              <p className="text-gray-600">
                Sí, se puede ampliar con más productos, categorías y funciones.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
