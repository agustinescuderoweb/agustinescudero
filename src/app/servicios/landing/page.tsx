'use client'

import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Menu from '@/app/componetes/inicio/menu'
import Footer from '@/app/componetes/inicio/footer'
import landing from '../../../../public/landing.jpg'
import ariadna from '../../../../public/ariadna.jpg'
import camila from '../../../../public/camilaimg.jpg'
import monica from '../../../../public/Monica.jpg'
import star from '../../../../public/star.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Check } from "lucide-react";
import Head from 'next/head';




const testimoniosData = [
  {
    texto: '"Creo mi landing page de mi tienda de maquillaje, excelente trabajo mejoro mi performance"',
    nombre: 'Ariadna Escudero',
  },
  {
    texto: '"Realmente muy conforme, creo mi tienda de ropa conforme a mis gustos, muy satisfecha"',
    nombre: 'Camila Escudero',
  },
  {
    texto: '"Tengo mi negocio de arte, gracias a mi web puedo mostrar quien soy y a que me dedico"',
    nombre: 'Monica Miralles',
  },
]



function Page() {

  useEffect(() => {
  AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div>
      <Head>
         <title>Landing Pages Profesionales | Agustín Escudero Web</title>
         <meta name="description" content="Diseñamos landing pages efectivas para negocios como maquillaje, ropa, arte y más. Aumentá tus ventas con una web optimizada y personalizada." />
      </Head>
      <Menu />
      <main>
      <div className="flex flex-col md:flex-row w-screen justify-between bg-black bg-opacity-30 text-center pt-16 md:pt-0">
          <div className='flex flex-col flex-[50%] justify-center items-center overflow-hidden gap-10 pb-16 md:pb-2'><h1 className="text-white text-4xl font-bold">Diseño de Landing Page Profesional</h1>
          <p className='text-[#737373] w-[80%]'>Una landing page es una página web optimizada para convertir visitas en acciones concretas como ventas, registros o contactos. Ideal para campañas publicitarias y promociones puntuales, te ayuda a enfocar tu mensaje y mejorar tus resultados.</p>
          <button 
           title="Pedir diseño de landing page por WhatsApp"
           aria-label="Pedir diseño de landing page por WhatsApp"
          className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
          <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
          <Link href='https://wa.link/elp2e3' className="relative z-10">Solicitá tu langing personal</Link>
          </button>

          </div>
          <div className='flex flex-[50%] flex justify-end items-center'><Image src={landing} alt='Ejemplo de landing page creada para negocio de maquillaje' className="flex opacity-50 w-[100%]"/></div>
      </div>
      <div className='flex flex-col h-[600px] text-center justify-center items-center'>

       <section className='flex flex-col mt-12 justify-center text-center'>
  <h2 className='text-4xl font-semibold'>✅ Beneficios</h2>

  <ul className='flex flex-col items-center mt-12 gap-8'>
    <li
      data-aos="fade-up"
      className='w-full md:w-[500px] bg-[#737373] p-4 rounded text-white text-lg flex items-center justify-center'
    >
      Se enfoca en un solo objetivo: vender o captar leads
    </li>
    <li
      data-aos="fade-up"
      data-aos-delay="100"
      className='w-full md:w-[500px] bg-[#737373] p-4 rounded text-white text-lg flex items-center justify-center'
    >
      Es más económica y rápida que un sitio completo
    </li>
    <li
      data-aos="fade-up"
      data-aos-delay="200"
      className='w-full md:w-[500px] bg-[#737373] p-4 rounded text-white text-lg flex items-center justify-center'
    >
      Ideal para campañas publicitarias (Instagram, Google)
    </li>
    <li
      data-aos="fade-up"
      data-aos-delay="300"
      className='w-full md:w-[500px] bg-[#737373] p-4 rounded text-white text-lg flex items-center justify-center'
    >
      Diseño a medida, textos persuasivos y optimización móvil
    </li>
  </ul>
</section>

         </div>
      
        <div className='flex flex-col gap-16 mt-16 h-[800px] bg-black opacity-80'>
        <section className='flex mt-12 justify-center items-center'><h2 className='text-4xl text-white font-semibold'>💼¿Qué incluye?💼</h2> </section>
        <div className='flex flex-row gap-6 items-center justify-center'>
        <div className='w-[400px] h-[700px] flex flex-col gap-6 p-8 text-center'>
  <ul className='flex flex-col gap-6'>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <h2 className='mr-12 text-base font-semibold'>Formulario de Contacto</h2>
    </li>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <h2 className='mr-12 text-base font-semibold'>Responsive Design</h2>
    </li>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <h2 className='mr-12 text-base font-semibold'>Dominio Personalizado</h2>
    </li>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <h2 className='mr-12 text-base font-semibold'>Contacto a Redes Sociales</h2>
    </li>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <h2 className='mr-12 text-base font-semibold'>Apartados y Secciones</h2>
    </li>
  </ul>

  <button
    title="Pedir diseño de landing page por WhatsApp"
    aria-label="Pedir diseño de landing page por WhatsApp"
    className="relative group bg-[rgb(50,205,50)] h-[70px] text-white px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 mt-6"
  >
    <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
    <a href='https://wa.link/elp2e3' className="relative z-10">Solicitá tu landing personal</a>
  </button>
</div>

        </div>
        </div>
        <div className='flex flex-col w-screen h-[1450px] md:h-[700px] bg-white justify-center text-center gap-6 items-center'> 
           <section className='text-4xl font-bold mt-6'><h2>Testimonios</h2>
           <div className='flex mt-20 mb-20 gap-12 justify-center'>
 <div className='flex flex-col md:flex-row gap-12'>
  {/* Testimonio 1 */}
  <div className='w-[250px] h-[300px] bg-black rounded-lg flex flex-col items-center p-4 gap-4' style={{ boxShadow: '0 0px 20px rgba(0, 0, 0, 1)' }}  >
    <div className='flex gap-1'>
      {[...Array(5)].map((_, i) => (
        <Image key={i} src={star} alt='Testimonio de Ariadna Escudero sobre su landing page' width={20} />
      ))}
    </div>
    <Image className='rounded-[100px]' src={ariadna} width={120} alt="Ariadna" style={{ boxShadow: '0 0px 20px rgba(255, 236, 236, 1)' }} />
    <h1 className='text-[#737373] text-sm font-bold text-center'>{testimoniosData[0].texto}</h1>
    <h2 className='text-[#737373] text-sm text-center'>{testimoniosData[0].nombre}</h2>
  </div>

  {/* Testimonio 2 */}
  <div className='w-[250px] h-[300px] bg-black rounded-lg flex flex-col items-center p-4 gap-4' style={{ boxShadow: '0 0px 20px rgba(0, 0, 0, 1)' }}  >
    <div className='flex gap-1'>
      {[...Array(5)].map((_, i) => (
        <Image key={i} src={star} alt='Testimonio de Camila Escudero sobre su landing page' width={20} />
      ))}
    </div>
    <Image className='rounded-[100px]' src={camila} width={120} alt="Camila" style={{ boxShadow: '0 0px 20px rgba(255, 236, 236, 1)' }} />
    <h1 className='text-[#737373] text-sm font-bold text-center'>{testimoniosData[1].texto}</h1>
    <h2 className='text-[#737373] text-sm text-center'>{testimoniosData[1].nombre}</h2>
  </div>

  {/* Testimonio 3 */}
  <div className='w-[250px] h-[300px] bg-black rounded-lg flex flex-col items-center p-4 gap-4' style={{ boxShadow: '0 0px 20px rgba(0, 0, 0, 1)' }}  >
    <div className='flex gap-1'>
      {[...Array(5)].map((_, i) => (
        <Image key={i} src={star} alt='Testimonio de Monica Miralles sobre su landing page' width={20} />
      ))}
    </div>
    <Image className='rounded-[100px]' src={monica} width={120} alt="Monica"   style={{ boxShadow: '0 0px 20px rgba(255, 236, 236, 1)' }}/>
    <h1 className='text-[#737373] text-sm font-bold text-center'>{testimoniosData[2].texto}</h1>
    <h2 className='text-[#737373] text-sm text-center'>{testimoniosData[2].nombre}</h2>
  </div>
        </div>
         </div>
         <button 
          title="Pedir diseño de landing page por WhatsApp"
          aria-label="Pedir diseño de landing page por WhatsApp"
          className="relative group bg-[rgb(50,205,50)] text-white  w-[200px] px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
         <span className="pointer-events-none absolute -left-full top-1/2 w-[100px] h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
         <Link href='https://wa.link/elp2e3' className="relative z-10">Solicitá tu langing personal</Link>
         </button>
         </section>
    </div>
        <section className='bg-[#f9f9f9] px-8 py-16 flex flex-col justify-center text-center items-center gap-6'>
  <h2 className='text-3xl font-bold mb-6'>Preguntas Frecuentes</h2>
  <div className='max-w-3xl mx-auto space-y-6 '>
    <div>
      <h3 className='font-semibold text-lg'>¿Cuánto tarda en hacerse un sitio web?</h3>
      <p className='text-[#555]'>Dependiendo del tipo de sitio, puede tardar entre 1 a 10 días.</p>
    </div>
    <div>
      <h3 className='font-semibold text-lg'>¿Puedo pedir cambios una vez entregado?</h3>
      <p className='text-[#555]'>Sí, ofrezco revisiones según el paquete acordado.</p>
    </div>
    <div>
      <h3 className='font-semibold text-lg'>¿Incluye posicionamiento en Google?</h3>
      <p className='text-[#555]'>Sí, implemento prácticas básicas de SEO para que Google pueda indexarte.</p>
    </div>
      </div>
    </section>
    </main>
      <Footer />
      </div>

  )
}

export default Page
