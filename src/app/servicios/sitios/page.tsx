'use client'

import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Menu from '@/app/componetes/inicio/menu'
import Footer from '@/app/componetes/inicio/footer'
import sitio from '../../../../public/sitio.jpg'
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
        <title>Diseño de Sitios Web Profesionales | Agustín Escudero</title>
        <meta
          name="description"
          content="Diseño y desarrollo de sitios web personalizados para negocios. Aumentá tu presencia online, generá confianza y captá más clientes con un sitio web a medida."
        />
        <meta
          name="keywords"
          content="sitio web, diseño web, desarrollo web, páginas web profesionales, landing page, Agustín Escudero"
        />
        <meta property="og:title" content="Diseño de Sitios Web Profesionales | Agustín Escudero" />
        <meta
          property="og:description"
          content="Diseño de sitios web que impulsan tu negocio. Transformá tu presencia online con un sitio a medida."
        />
        <meta property="og:image" content="https://agustinescuderoweb.com/logo.png" />
        <meta property="og:url" content="https://agustinescuderoweb.com/servicios/sitios" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Menu />
      <main>
      <section className="flex flex-col md:flex-row w-screen justify-between bg-black bg-opacity-30 text-center">
          <div className='flex flex-col flex-[50%] justify-center items-center overflow-hidden gap-10 pt-16 pb-16'><h1 className="text-white text-4xl font-bold">Diseño de Sitio Web Profesional</h1>
          <p className='text-[#737373] w-[80%]'>Un sitio web profesional es tu espacio digital propio, diseñado para representar tu marca, atraer clientes potenciales y generar confianza. Ya sea que vendas productos, ofrezcas servicios o construyas tu portafolio, tu sitio web trabaja 24/7 para lograr tus objetivos comerciales.</p>
          <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
          <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
          <Link href='https://wa.link/elp2e3' className="relative z-10">Solicitá tu sitio web personal</Link>
          </button>

          </div>
          <div className='flex flex-[50%] flex justify-end items-center'><Image src={sitio} alt="Imagen Landing" className="flex opacity-50 w-[100%]"/></div>
      </section>
      <div className='flex flex-col h-[600px] text-center justify-center items-center'>

        <section className='flex flex-col mt-12 justify-center text-center'>
  <h2 className='text-4xl font-semibold'>✅ Beneficios</h2>

  <ul className='flex flex-col items-center mt-12 gap-8'>
    <li
      data-aos="fade-up"
      className='w-full md:w-[500px] bg-[#737373] p-4 rounded text-white text-lg flex items-center justify-center'
    >
      Presencia online 24/7
    </li>
    <li
      data-aos="fade-up"
      data-aos-delay="100"
      className='w-full md:w-[500px] bg-[#737373] p-4 rounded text-white text-lg flex items-center justify-center'
    >
      Credibilidad y confianza
    </li>
    <li
      data-aos="fade-up"
      data-aos-delay="200"
      className='w-full md:w-[500px] bg-[#737373] p-4 rounded text-white text-lg flex items-center justify-center'
    >
      Captación de clientes
    </li>
    <li
      data-aos="fade-up"
      data-aos-delay="300"
      className='w-full md:w-[500px] bg-[#737373] p-4 rounded text-white text-lg flex items-center justify-center'
    >
      Control total de tu marca
    </li>
  </ul>
</section>

         </div>
      
        <section className='flex flex-col gap-16 mt-16 h-[1000px] md:h-[700px] bg-black opacity-80'>
        <div className='flex mt-22 justify-center items-center'><h2 className='text-4xl text-white font-semibold'>💼¿Qué incluye?💼</h2></div>
        <div className='flex flex-col gap-6 items-center justify-center'>
      <div className='w-screen h-[500px] md:h-[350px] flex flex-col md:flex-row justify-center items-center gap-6 p-8 text-center mt-8 md:mt-0'>
  <ul className='flex flex-col gap-6 md:w-[500px] w-full list-none'>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <span className='mr-12 text-left font-medium'>Formulario de Contacto</span>
    </li>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <span className='mr-12 text-left font-medium'>Responsive Design</span>
    </li>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <span className='mr-12 text-left font-medium'>Dominio Personalizado</span>
    </li>
  </ul>

  <ul className='flex flex-col gap-6 md:w-[500px] w-full list-none'>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <span className='mr-12 text-left font-medium'>Contacto a Redes Sociales</span>
    </li>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <span className='mr-12 text-left font-medium'>Apartados y Secciones</span>
    </li>
    <li className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>
      <Check size={30} color='green' />
      <span className='mr-12 text-left font-medium'>Múltiples Páginas</span>
    </li>
  </ul>
</div>

           <button className="relative group bg-[rgb(50,205,50)] h-[70px] text-white px-6 py-3 mt-12 md:mt-0 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
             <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
             <a href='https://wa.link/elp2e3' className="relative z-10">Solicitá tu sitio web personal</a>
             </button>
        </div>
        </section>
        <section className='flex flex-col w-screen h-[1450px] md:h-[700px] bg-white justify-center text-center gap-6 items-center'> 
           <div className='text-4xl font-bold mt-6'><h2>Testimonios</h2></div>
           <div className='flex flex-row m-12 gap-12 justify-center'>
 <div className='flex flex-col md:flex-row gap-26'>
  {/* Testimonio 1 */}
  <div className='w-[250px] h-[300px] bg-black rounded-lg flex flex-col items-center p-4 gap-4' style={{ boxShadow: '0 0px 20px rgba(0, 0, 0, 1)' }}  >
    <div className='flex gap-1'>
      {[...Array(5)].map((_, i) => (
        <Image key={i} src={star} alt="estrella" width={20} />
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
        <Image key={i} src={star} alt="estrella" width={20} />
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
        <Image key={i} src={star} alt="estrella" width={20} />
      ))}
    </div>
    <Image className='rounded-[100px]' src={monica} width={120} alt="Monica"   style={{ boxShadow: '0 0px 20px rgba(255, 236, 236, 1)' }}/>
    <h1 className='text-[#737373] text-sm font-bold text-center'>{testimoniosData[2].texto}</h1>
    <h2 className='text-[#737373] text-sm text-center'>{testimoniosData[2].nombre}</h2>
  </div>
        </div>
         </div>
         <button className="relative group bg-[rgb(50,205,50)] text-white  w-[200px] px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
         <span className="pointer-events-none absolute -left-full top-1/2 w-[100px] h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
         <Link href='https://wa.link/elp2e3' className="relative z-10">Solicitá tu sitio web personal</Link>
         </button>
    </section>
      <section className='bg-[#f9f9f9] px-8 py-16 flex flex-col justify-center text-center items-center gap-6'>
  <h2 className='text-3xl font-bold mb-6'>Preguntas Frecuentes</h2>
  <div className='max-w-3xl mx-auto space-y-6 '>
    <div>
      <h3 className='font-semibold text-lg'>¿Cuánto tarda en hacerse un sitio web?</h3>
      <p className='text-[#555]'>Dependiendo del tipo de sitio, puede tardar entre 1 a 3 semanas.</p>
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
