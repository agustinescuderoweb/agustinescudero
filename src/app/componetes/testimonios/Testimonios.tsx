'use client'

import Image from 'next/image'
import ariadna from '../../../../public/ariadna.jpg'
import camila from '../../../../public/camilaimg.jpg'
import monica from '../../../../public/Monica.jpg'

const testimoniosData = [
  {
    texto: 'Creó la landing page de mi tienda de maquillaje. Excelente trabajo, mejoró notablemente mi performance.',
    nombre: 'Ariadna Escudero',
    rol: 'Tienda de maquillaje',
    imagen: ariadna,
  },
  {
    texto: 'Muy conforme con el resultado. Mi tienda de ropa quedó exactamente como la imaginaba.',
    nombre: 'Camila Escudero',
    rol: 'Tienda de ropa',
    imagen: camila,
  },
  {
    texto: 'Gracias a mi web ecommerce puedo mostrar mis productos online y a qué me dedico de forma profesional.',
    nombre: 'Monica Miralles',
    rol: 'Ecommerce',
    imagen: monica,
  },
]

export default function Testimonios() {
  return (
    <section className="bg-[#0a0a0a] py-28 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl md:text-[2rem] font-bold tracking-tight text-[#f0ede8] leading-tight">
            Emprendedores que ya confían<br className="hidden md:block" /> en mi trabajo
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimoniosData.map((t, i) => (
            <div
              key={i}
              className="
                group
                bg-[#111111]
                border border-white/[0.07]
                rounded-2xl
                p-7
                flex flex-col gap-6
                transition-all duration-300
                hover:border-lime-400/30
                hover:-translate-y-1
              "
            >
              {/* Estrellas */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-lime-400"
                  >
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p className="text-[0.9rem] text-white/55 leading-relaxed flex-1">
                   &ldquo;{t.texto}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <Image
                  src={t.imagen}
                  alt={`Testimonio de ${t.nombre}`}
                  width={40}
                  height={40}
                  className="rounded-full object-cover ring-1 ring-lime-400/40"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#f0ede8] leading-tight">
                    {t.nombre}
                  </span>
                  <span className="text-xs text-white/35 mt-0.5">
                    {t.rol}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
