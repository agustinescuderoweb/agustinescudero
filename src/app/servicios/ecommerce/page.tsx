'use client'

import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Menu from '@/app/componetes/inicio/menu'
import Footer from '@/app/componetes/inicio/footer'
import ecommerce from '../../../../public/ecommer.jpg'
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
        <title>E-Commerce Profesional | Agustín Escudero</title>
        <meta
          name="description"
          content="Crea tu tienda online profesional para vender productos, automatizar ventas y expandir tu negocio sin límites. Diseño personalizado, pago seguro y atención 24/7."
        />
        <meta
          name="keywords"
          content="ecommerce, tienda online, ventas online, carrito de compra, pagos seguros, Agustín Escudero"
        />
        <meta property="og:title" content="E-Commerce Profesional | Agustín Escudero" />
        <meta
          property="og:description"
          content="Diseño y desarrollo de tiendas online que potencian tus ventas y automatizan tu negocio con seguridad y estilo profesional."
        />
        <meta property="og:image" content="https://agustinescuderoweb.com/logo.png" />
        <meta property="og:url" content="https://agustinescuderoweb.com/servicios/ecommerce" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Menu />
      <main>
      <section aria-label="Introducción al servicio de Ecommerce" className="flex flex-col md:flex-row w-screen justify-between bg-black bg-opacity-30 text-center">
          <div className='flex flex-col flex-[50%] justify-center items-center overflow-hidden gap-10 pt-12 pb-12'><h1 className="text-white text-4xl font-bold">Desarrollo E-COMMERCE profesional</h1>
          <p className='text-[#737373] w-[80%]'>Un ecommerce es mucho más que una tienda online: es una herramienta poderosa para vender tus productos, automatizar tus ventas y hacer crecer tu negocio sin límites geográficos. Con una tienda virtual, podés mostrar tu catálogo, aceptar pagos de forma segura, recibir pedidos las 24 horas y brindar una experiencia profesional a tus clientes, desde cualquier lugar del mundo.</p>
          <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
          <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
          <Link href='https://wa.link/elp2e3'  aria-label="Solicitar sitio web personalizado vía WhatsApp" className="relative z-10">Solicitá tu E-commerce personal</Link>
          </button>

          </div>
          <div className='flex flex-[50%] flex justify-end items-center'><Image src={ecommerce} alt="Ejemplo de diseño para ecommerce profesional"className="flex opacity-50 w-[100%]"/></div>
      </section>
      <section aria-label="Beneficios del ecommerce" className='flex flex-col h-[600px] text-center justify-center items-center'>

        <div className='flex flex-col mt-12 justify-center'><h2 className='text-4xl font-semibold'>✅Beneficios</h2>
         <ul className="mt-10 space-y-6 max-w-xl">
            {[
              'Ventas 24/7',
              'Alcance ilimitado',
              'Menores costos que un local físico',
              'Integración con redes sociales',
            ].map((beneficio, idx) => (
              <li
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-[#737373] rounded p-4 text-white text-lg"
              >
                {beneficio}
              </li>
            ))}
          </ul>
          </div>
         </section>
      
        <section aria-label="Características incluidas en el ecommerce" className='flex flex-col gap-16 mt-16 h-[1100px] md:h-[700px] bg-black justify-center items-center opacity-80'>
                <div className='flex justify-center items-center'><h2 className='text-4xl text-white font-semibold'>💼¿Qué incluye?💼</h2></div>
                <div className='flex flex-col gap-16 items-center justify-center'>
                 <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">
            <ul className="flex-1 space-y-6">
              {[
                'Formulario de Contacto',
                'Responsive Design',
                'Dominio Personalizado',
                'Carrito de Compra',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 bg-white text-black rounded-lg p-5 shadow-[0_5px_20px_rgba(255,255,255,0.5)]"
                >
                  <Check size={30} color="green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="flex-1 space-y-6">
              {[
                'Contacto a Redes Sociales',
                'Apartados y Secciones',
                'Múltiples Páginas',
                'Medio de Pago',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 bg-white text-black rounded-lg p-5 shadow-[0_5px_20px_rgba(255,255,255,0.5)]"
                >
                  <Check size={30} color="green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
                   <button className="relative group bg-[rgb(50,205,50)] h-[70px] text-white px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                     <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                     <Link aria-label="Solicitar sitio web personalizado vía WhatsApp" href='https://wa.link/elp2e3' className="relative z-10">Solicitá tu E-commerce personal</Link>
                     </button>
                </div>
                </section>
        <section  aria-label="Testimonios de clientes satisfechos" className='flex flex-col w-screen h-[1450px] md:h-[700px] bg-white justify-center text-center gap-6 items-center'> 
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
    <Image className='rounded-[100px]' src={monica} width={120} alt="Monica"  style={{ boxShadow: '0 0px 20px rgba(255, 236, 236, 1)' }}/>
    <h1 className='text-[#737373] text-sm font-bold text-center'>{testimoniosData[2].texto}</h1>
    <h2 className='text-[#737373] text-sm text-center'>{testimoniosData[2].nombre}</h2>
  </div>
        </div>
         </div>
         <button className="relative group bg-[rgb(50,205,50)] text-white  w-[300px] px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
         <span className="pointer-events-none absolute -left-full top-1/2 w-[100px] h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
         <Link href='https://wa.link/elp2e3' className="relative z-10">Solicitá tu E-commerce personal</Link>
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
