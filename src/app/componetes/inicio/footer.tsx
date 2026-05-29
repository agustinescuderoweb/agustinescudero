import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06] text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Logo + copyright */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          <Image
            src={logo}
            alt="Logo de Agustín Escudero, desarrollador web en Mendoza"
            className="w-[72px] opacity-90"
          />
          <span className="text-xs text-white/35 tracking-wide">
            © 2025 Agustín Escudero Web
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-row gap-12 text-sm">

          <ul className="flex flex-col gap-3">
            <li className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-lime-400 mb-1">
              Contacto
            </li>
            <li>
              <a
                href="/contactos"
                title="Formulario de contacto de Agustín Escudero"
                className="text-white/50 hover:text-white transition-colors duration-200 !no-underline"
              >
                Formulario
              </a>
            </li>
            <li>
              <a
                href="https://wa.link/elp2e3"
                title="Contactar vía WhatsApp con Agustín Escudero"
                className="text-white/50 hover:text-lime-400 transition-colors duration-200 !no-underline"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-lime-400 mb-1">
              Redes
            </li>
            <li>
              <a
                href="https://www.instagram.com/agustinescuderoweb/"
                title="Instagram de Agustín Escudero"
                className="text-white/50 hover:text-white transition-colors duration-200 !no-underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@agustinescuderoweb"
                title="Canal de YouTube de Agustín Escudero"
                className="text-white/50 hover:text-white transition-colors duration-200 !no-underline"
              >
                YouTube
              </a>
            </li>
          </ul>

        </div>

      </div>

      {/* Línea base */}
      <div className="border-t border-white/[0.04] py-4 text-center">
        <span className="text-[0.7rem] text-white/20 tracking-widest uppercase">
          Mendoza, Argentina
        </span>
      </div>
    </footer>
  )
}
