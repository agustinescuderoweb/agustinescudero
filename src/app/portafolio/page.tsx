import React from 'react'
import Menu from '../componetes/inicio/menu'
import Image from 'next/image'
import Agustin from '../../../public/agustin.jpg'
import Desarrollos from '../componetes/quiensoy/desarrollos'
import Github from '../componetes/quiensoy/github'
import Footer from '../componetes/inicio/footer'

function Page() {
  return (
    <div>
        <Menu />
    <div className="bg-[#0b0b0b] text-white">

      {/* HERO */}
      <section className="flex flex-col md:flex-row w-full min-h-[90vh] items-center justify-between bg-gradient-to-b from-black/80 to-black/40 px-6 md:px-16">
        
        {/* TEXTO */}
        <div className="flex flex-col flex-1 justify-center gap-8 max-w-xl">
          <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">
            Desarrollador Web
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hola, soy <span className="text-green-400">Agustín Escudero</span>
          </h1>

          <p className="text-[#b3b3b3] leading-relaxed">
            Soy desarrollador web de Mendoza, Argentina. Trabajo hace más de 5 años
            creando sitios web, landings y soluciones digitales enfocadas en
            rendimiento, diseño y conversión. He participado en proyectos para
            emprendedores, negocios y una fintech, y actualmente desarrollo
            mis propios sistemas y productos digitales.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://wa.link/elp2e3"
              className="relative group bg-[rgb(50,205,50)] text-black px-6 py-3 font-bold rounded-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 group-hover:left-full group-hover:opacity-100"></span>
              <span className="relative z-10">Trabajemos juntos</span>
            </a>

            <a
              href="#desarrollos"
              className="border border-white/20 px-6 py-3 rounded-md text-white hover:bg-white/10 transition"
            >
              Ver proyectos
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="flex flex-1 justify-center md:justify-end mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full"></div>
            <Image
              src={Agustin}
              alt="Agustín Escudero desarrollador web"
              className="relative z-10 rounded-2xl max-w-[320px] md:max-w-[380px] opacity-90"
            />
          </div>
        </div>
      </section>

      {/* DESARROLLOS */}
      <section id="desarrollos" className="py-24 px-6 md:px-16">
        <Desarrollos />
      </section>

      {/* GITHUB */}
      <section className="py-24 px-6 md:px-16 bg-black/40">
        <Github />
      </section>

      <Footer />
    </div>
      </div>
    
  )
}

export default Page
