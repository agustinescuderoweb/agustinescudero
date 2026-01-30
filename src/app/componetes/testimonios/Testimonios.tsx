'use client'

import Image from 'next/image'
import star from '@/assets/star.svg'
import ariadna from '../../../../public/ariadna.jpg'
import camila from '../../../../public/camilaimg.jpg'
import monica from '../../../../public/Monica.jpg'

const testimoniosData = [
  {
    texto:
      'Creó la landing page de mi tienda de maquillaje. Excelente trabajo, mejoró notablemente mi performance.',
    nombre: 'Ariadna Escudero',
    imagen: ariadna,
  },
  {
    texto:
      'Muy conforme con el resultado. Mi tienda de ropa quedó exactamente como la imaginaba.',
    nombre: 'Camila Escudero',
    imagen: camila,
  },
  {
    texto:
      'Gracias a mi web ecommerse puedo mostrar mis productos online y a qué me dedico de forma profesional.',
    nombre: 'Monica Miralles',
    imagen: monica,
  },
]

export default function Testimonios() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Emprendedores que ya confían en mi trabajo
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {testimoniosData.map((t, i) => (
            <div
              key={i}
              className="
                w-[280px]
                bg-[#f9f9f9]
                rounded-2xl
                p-8
                flex
                flex-col
                items-center
                gap-6
                transition
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* estrellas */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src={star}
                    alt="estrella de valoración"
                    width={18}
                    height={18}
                    className="opacity-90"
                  />
                ))}
              </div>

              {/* avatar */}
              <Image
                src={t.imagen}
                alt={`Testimonio de ${t.nombre}`}
                width={110}
                height={110}
                className="
                  rounded-full
                  border-4
                  border-[#00ff87]
                "
              />

              {/* texto */}
              <p className="text-[#333] text-sm text-center leading-relaxed">
                “{t.texto}”
              </p>

              {/* nombre */}
              <span className="text-sm font-semibold text-[#111]">
                {t.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
