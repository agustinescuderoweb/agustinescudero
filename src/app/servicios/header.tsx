import React from 'react'
import Image from 'next/image'
import landing from '../../../public/landing.jpg'
import sitio from '../../../public/sitio.jpg'
import ecommers from '../../../public/ecommer.jpg'

function header() {
  return (
 <div className="flex flex-col md:flex-row w-full h-screen">
  {/* Primer bloque */}
  <a
    href="servicios/landing"
    className="relative flex-1 shadow-lg cursor-pointer group overflow-hidden"
  >
    <Image
      src={landing}
      alt="Fondo 1"
      fill
      className="object-cover transition-transform duration-1000 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover:bg-black/75"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold mb-2">Landing Page</h2>
    </div>
  </a>

  {/* Segundo bloque */}
  <a
    href="servicios/sitios"
    className="relative flex-1 shadow-lg cursor-pointer group overflow-hidden"
  >
    <Image
      src={sitio}
      alt="Fondo 2"
      fill
      className="object-cover transition-transform duration-1000 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover:bg-black/75"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold mb-2">Sitio Web</h2>
    </div>
  </a>

  {/* Tercer bloque */}
  <a
    href="servicios/ecommerce"
    className="relative flex-1 shadow-lg cursor-pointer group overflow-hidden"
  >
    <Image
      src={ecommers}
      alt="Fondo 3"
      fill
      className="object-cover transition-transform duration-1000 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover:bg-black/75"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold mb-2">E-commerce</h2>
    </div>
  </a>
</div>


  )
}

export default header
