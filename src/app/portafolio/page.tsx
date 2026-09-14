import type { Metadata } from 'next'
import Menu from '../componetes/inicio/menu'
import Image from 'next/image'
import Agustin from '../../../public/agustin.jpg'
import PortfolioGrid from '../components/PortfolioGrid'
import Github from '../componetes/quiensoy/github'
import Footer from '../componetes/inicio/footer'

export const metadata: Metadata = {
  title: 'Portafolio de Agustín Escudero | Desarrollador Web en Mendoza',
  description:
    'Conocé los proyectos web de Agustín Escudero: sitios, tiendas online y desarrollos a medida para negocios y marcas en Mendoza y todo el país.',
  openGraph: {
    title: 'Portafolio | Agustín Escudero — Desarrollador Web Mendoza',
    description:
      'Proyectos web, tiendas online y desarrollos a medida realizados para negocios reales.',
    url: 'https://www.agustinescuderoweb.com/portafolio',
    images: [{ url: '/logoopen.png' }],
  },
}

export default function Page() {
  return (
    <div className="bg-bg text-ink">
      <Menu />

      <section className="min-h-screen flex items-center px-6 md:px-16 border-b border-border">
        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16 py-24">
          <div className="flex flex-col gap-6 max-w-lg">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Desarrollador Web · Mendoza
            </span>

            <h1 className="text-4xl md:text-[2.8rem] font-bold leading-[1.1] tracking-tight text-ink">
              Desarrollador web freelance en Mendoza —{' '}
              <span className="text-accent">Agustín Escudero</span>
            </h1>

            <p className="text-ink/50 leading-relaxed text-[0.95rem]">
              Más de 5 años creando sitios web, tiendas online y soluciones
              digitales enfocadas en rendimiento, diseño y conversión para
              negocios y marcas.
            </p>

            <div className="flex gap-3 flex-wrap pt-2">
              <a
                href="https://wa.link/elp2e3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-bg px-6 py-3 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:bg-accent-hover hover:-translate-y-[2px] !no-underline"
              >
                Trabajemos juntos
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 border border-white/[0.15] text-ink/70 px-6 py-3 rounded-[10px] text-sm font-medium transition-all duration-200 hover:border-accent/30 hover:text-ink hover:-translate-y-[2px] !no-underline"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-accent/10 blur-[60px] rounded-full scale-110" />

            <Image
              src={Agustin}
              alt="Agustín Escudero desarrollador web en Mendoza"
              className="relative z-10 rounded-2xl w-[280px] md:w-[340px] object-cover opacity-90 ring-1 ring-white/[0.08]"
              priority
            />
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-24 px-6 md:px-16 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Proyectos
          </span>

          <h2 className="mt-3 text-2xl md:text-[1.8rem] font-bold tracking-tight text-ink mb-10">
            Proyectos reales. Resultados reales.
          </h2>

          <PortfolioGrid />
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            GitHub
          </span>

          <h2 className="mt-3 text-2xl md:text-[1.8rem] font-bold tracking-tight text-ink mb-12">
            Actividad reciente
          </h2>

          <Github />
        </div>
      </section>

      <Footer />
    </div>
  )
}
