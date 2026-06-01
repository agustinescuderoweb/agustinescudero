import React from 'react'
import Head from 'next/head'
import Menu from '../componetes/inicio/menu'
import Image from 'next/image'
import Agustin from '../../../public/agustin.jpg'
import Desarrollos from '../componetes/quiensoy/desarrollos'
import Github from '../componetes/quiensoy/github'
import Footer from '../componetes/inicio/footer'

export default function Page() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <Head>
        <title>Portafolio de Agustín Escudero | Desarrollador Web en Mendoza</title>
        <meta
          name="description"
          content="Conocé los proyectos web de Agustín Escudero, desarrollador web en Mendoza. Sitios, landing pages y tiendas online para emprendedores y marcas personales."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Portafolio | Agustín Escudero — Desarrollador Web Mendoza"
        />
        <meta
          property="og:description"
          content="Proyectos web, landing pages y tiendas online desarrolladas para emprendedores y marcas en Mendoza y todo el país."
        />
        <meta
          property="og:url"
          content="https://agustinescuderoweb.com/portafolio"
        />
        <meta
          property="og:image"
          content="https://agustinescuderoweb.com/logoopen.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Menu />

      <section className="min-h-screen flex items-center px-6 md:px-16 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16 py-24">
          <div className="flex flex-col gap-6 max-w-lg">
            <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
              Desarrollador Web · Mendoza
            </span>

            <h1 className="text-4xl md:text-[2.8rem] font-bold leading-[1.1] tracking-tight text-[#f0ede8]">
              Desarrollador web freelance en Mendoza —{' '}
              <span className="text-lime-400">Agustín Escudero</span>
            </h1>

            <p className="text-white/50 leading-relaxed text-[0.95rem]">
              Más de 5 años creando sitios web, landings y soluciones digitales
              enfocadas en rendimiento, diseño y conversión para emprendedores
              y marcas personales.
            </p>

            <div className="flex gap-3 flex-wrap pt-2">
              <a
                href="https://wa.link/elp2e3"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  'inline-flex items-center gap-2',
                  'bg-lime-400 text-[#0a0a0a]',
                  'px-6 py-3 rounded-[10px]',
                  'text-sm font-semibold',
                  'transition-all duration-200',
                  'hover:bg-lime-300 hover:-translate-y-[2px]',
                  '!no-underline',
                ].join(' ')}
              >
                Trabajemos juntos
              </a>

              <a
                href="#desarrollos"
                className="inline-flex items-center gap-2 border border-white/[0.15] text-white/70 px-6 py-3 rounded-[10px] text-sm font-medium transition-all duration-200 hover:border-lime-400/30 hover:text-white hover:-translate-y-[2px] !no-underline"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-lime-400/10 blur-[60px] rounded-full scale-110" />

            <Image
              src={Agustin}
              alt="Agustín Escudero desarrollador web en Mendoza"
              className="relative z-10 rounded-2xl w-[280px] md:w-[340px] object-cover opacity-90 ring-1 ring-white/[0.08]"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="desarrollos"
        className="py-24 px-6 md:px-16 border-b border-white/[0.06]"
      >
        <div className="max-w-5xl mx-auto">
          <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
            Proyectos
          </span>

          <h2 className="mt-3 text-2xl md:text-[1.8rem] font-bold tracking-tight text-[#f0ede8] mb-12">
            Desarrollos realizados
          </h2>

          <Desarrollos />
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
            GitHub
          </span>

          <h2 className="mt-3 text-2xl md:text-[1.8rem] font-bold tracking-tight text-[#f0ede8] mb-12">
            Actividad reciente
          </h2>

          <Github />
        </div>
      </section>

      <Footer />
    </div>
  )
}