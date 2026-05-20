import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import landing from '../../../public/landing.jpg'
import sitio from '../../../public/sitio.jpg'
import ecommerce from '../../../public/ecommer.jpg'

const servicios = [
  {
    href: '/servicios/landing',
    image: landing,
    title: 'Landing Page',
    description: 'Optimiza tus conversiones con una landing enfocada en resultados.',
    alt: 'Diseño de landing page profesional'
  },
  {
    href: '/servicios/sitios',
    image: sitio,
    title: 'Sitio Web',
    description: 'Transmití profesionalismo con un sitio web moderno, rápido y adaptable.',
    alt: 'Desarrollo de sitios web modernos'
  },
  {
    href: '/servicios/ecommerce',
    image: ecommerce,
    title: 'E-commerce',
    description: 'Convertí visitantes en clientes con una tienda online rápida y segura.',
    alt: 'Tienda online y ecommerce personalizada'
  }
]

export default function HeaderServicios() {
  return (
    <header className="w-full h-screen grid grid-cols-1 md:grid-cols-3">
      {servicios.map((servicio, index) => (
        <Link
          key={index}
          href={servicio.href}
          aria-label={`Ver servicio de ${servicio.title}`}
          className="relative group overflow-hidden"
        >
          {/* Imagen */}
          <Image
            src={servicio.image}
            alt={servicio.alt}
            fill
            priority={index === 0}
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-all duration-300 group-hover:from-black/90" />

          {/* Contenido */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              {servicio.title}
            </h2>

            <p className="text-sm md:text-base text-gray-200 max-w-sm">
              {servicio.description}
            </p>

            {/* CTA */}
            <span className="mt-6 inline-block border border-white/70 px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 group-hover:bg-white group-hover:text-black">
              Ver más
            </span>
          </div>
        </Link>
      ))}
    </header>
  )
}
