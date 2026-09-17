'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import sitio from '../../../public/sitio.jpg'
import ecommerce from '../../../public/ecommer.jpg'
import code from '../../../public/desarrollo-web.jpg'

const servicios = [
  {
    href: '/servicios/web-business',
    image: sitio,
    title: 'Web Business',
    tag: '01',
    description: 'Presencia digital profesional pensada para generar consultas y clientes.',
    alt: 'Sitio web profesional Web Business'
  },
  {
    href: '/servicios/ecommerce-business',
    image: ecommerce,
    title: 'Ecommerce Business',
    tag: '02',
    description: 'Tienda online lista para mostrar productos, cobrar y gestionar pedidos.',
    alt: 'Tienda online Ecommerce Business'
  },
  {
    href: '/#desarrollo-a-medida',
    image: code,
    title: 'Desarrollo a Medida',
    tag: '03',
    description: 'Sistemas, automatizaciones, APIs e integraciones a medida de tu negocio.',
    alt: 'Desarrollo de software a medida'
  }
]

export default function HeaderServicios() {
  return (
    <header className="w-full h-screen grid grid-cols-1 md:grid-cols-3">
      {servicios.map((servicio, index) => (
        <Link
          key={index}
          href={servicio.href}
          aria-label={`Ver ${servicio.title}`}
          className="relative group overflow-hidden"
        >
          {/* Imagen con zoom suave */}
          <Image
            src={servicio.image}
            alt={servicio.alt}
            fill
            priority={index === 0}
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105 brightness-[0.35]"
          />

          {/* Overlay degradado oscuro — más profundo al hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 transition-all duration-500 group-hover:from-black/98 group-hover:via-black/70" />

          {/* Línea de acento superior — se expande al hover */}
          <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full z-20" />

          {/* Contenido */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end px-8 pb-12 text-white">

            {/* Número de índice */}
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 opacity-70">
              {servicio.tag}
            </span>

            {/* Título */}
            <h2 className="text-3xl md:text-[2.1rem] font-bold tracking-tight leading-none mb-3 transition-transform duration-500 group-hover:-translate-y-1">
              {servicio.title}
            </h2>

            {/* Descripción — aparece al hover con fade */}
            <p className="text-sm text-white/55 leading-relaxed max-w-[240px] mb-6 transition-all duration-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
              {servicio.description}
            </p>

            {/* CTA minimalista */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent transition-all duration-300 opacity-0 group-hover:opacity-100">
              Ver más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>

          </div>

          {/* Borde derecho separador (solo en desktop, excepto el último) */}
          {index < servicios.length - 1 && (
            <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-white/[0.06] z-20" />
          )}

        </Link>
      ))}
    </header>
  )
}
