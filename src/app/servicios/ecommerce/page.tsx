import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '@/app/componetes/inicio/menu'
import Footer from '@/app/componetes/inicio/footer'
import ecommerce from '../../../../public/ecommer.jpg'
import { Check } from 'lucide-react'

const beneficios = [
  'Ventas online las 24 horas',
  'Alcance ilimitado a nuevos clientes',
  'Menores costos que un local físico',
  'Integración con redes sociales y pagos',
]

const incluye = [
  'Catálogo de productos',
  'Carrito de compras',
  'Pagos online seguros',
  'Diseño responsive',
  'Dominio personalizado',
  'Integración con redes sociales',
  'Secciones y páginas personalizadas',
  'Formulario de contacto',
]

const faqs = [
  {
    pregunta: '¿Cuánto tarda en desarrollarse un ecommerce?',
    respuesta:
      'Entre 1 y 3 semanas, según cantidad de productos y funcionalidades.',
  },
  {
    pregunta: '¿Incluye medios de pago?',
    respuesta:
      'Sí, integro pagos online seguros según tu país y negocio.',
  },
  {
    pregunta: '¿El ecommerce se puede escalar?',
    respuesta:
      'Sí, se puede ampliar con más productos, categorías y funciones.',
  },
]

export default function Page() {
  return (
    <>
      <Head>
        <title>E-commerce Profesional | Agustín Escudero</title>

        <meta
          name="description"
          content="Diseño y desarrollo de tiendas online profesionales para vender productos 24/7. Ecommerce rápidos, seguros y optimizados para convertir."
        />

        <meta
          name="keywords"
          content="ecommerce, tienda online, desarrollo ecommerce, tienda virtual, comercio electrónico"
        />

        <meta
          property="og:title"
          content="E-commerce Profesional | Agustín Escudero"
        />

        <meta
          property="og:description"
          content="Diseño y desarrollo de tiendas online profesionales para vender productos 24/7."
        />

        <meta
          property="og:url"
          content="https://agustinescuderoweb.com/servicios/ecommerce"
        />

        <meta
          property="og:image"
          content="https://agustinescuderoweb.com/logo.png"
        />

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
              Desarrollo de E-commerce profesional
            </h1>

            <p className="text-white/50 max-w-md text-[0.95rem] leading-relaxed">
              Tu tienda online lista para vender las 24 horas, aceptar pagos
              seguros y escalar tu negocio sin límites geográficos.
            </p>

            <div className="flex gap-3 flex-wrap pt-2">
              <a
                href="https://wa.link/elp2e3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lime-400 text-[#0a0a0a] px-6 py-3 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:bg-lime-300 hover:-translate-y-[2px] !no-underline"
              >
                Solicitá tu ecommerce
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative flex-1 min-h-[340px] md:min-h-screen">
            <Image
              src={ecommerce}
              alt="Ejemplo de ecommerce profesional"
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
              Por qué tener una tienda online
            </span>

            <h2 className="mt-3 text-2xl md:text-[1.8rem] font-bold tracking-tight text-[#f0ede8] mb-12">
              Beneficios de vender online
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beneficios.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/[0.07] rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:border-lime-400/30"
                >
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 bg-lime-400/10 border border-lime-400/25 flex items-center justify-center">
                    <Check size={14} className="text-lime-400" />
                  </div>

                  <span className="text-white/70 text-sm font-medium">
                    {item}
                  </span>
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
              ¿Qué incluye tu ecommerce?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {incluye.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/[0.07] rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:border-lime-400/30"
                >
                  <div className="w-7 h-7 rounded-lg flex-shrink-0 bg-lime-400/10 border border-lime-400/25 flex items-center justify-center">
                    <Check size={13} className="text-lime-400" />
                  </div>

                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.link/elp2e3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lime-400 text-[#0a0a0a] px-6 py-3 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:bg-lime-300 hover:-translate-y-[2px] !no-underline"
            >
              Pedí tu ecommerce ahora
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