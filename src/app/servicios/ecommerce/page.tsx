'use client'

import React, { useEffect } from 'react';
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

const testimoniosData = [
  {
    texto: '"Realmente muy conforme, creo mi tienda de ropa conforme a mis gustos, muy satisfecha"',
    nombre: 'Ariadna Escudero',
  },
  {
    texto: '"Creo mi landing page de mi tienda de maquillaje, excelente trabajo mejoro mi performance"',
    nombre: 'Camila Escudero',
  },
  {
    texto: '"Tengo mi negocio de arte, gracias a mi web puedo mostrar quien soy y a que me dedico"',
    nombre: 'Monica Miralles',
  },
]



function page() {

  useEffect(() => {
  AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div>
      <Menu />
      <div className="flex flex-col md:flex-row w-screen justify-between bg-black bg-opacity-30 text-center">
          <div className='flex flex-col flex-[50%] justify-center items-center overflow-hidden gap-10 pt-12 pb-12'><h1 className="text-white text-4xl font-bold">E-COMMERCE</h1>
          <p className='text-[#737373] w-[80%]'>Un ecommerce es mucho más que una tienda online: es una herramienta poderosa para vender tus productos, automatizar tus ventas y hacer crecer tu negocio sin límites geográficos. Con una tienda virtual, podés mostrar tu catálogo, aceptar pagos de forma segura, recibir pedidos las 24 horas y brindar una experiencia profesional a tus clientes, desde cualquier lugar del mundo.</p>
          <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
          <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
          <Link href='https://wa.link/elp2e3' className="relative z-10">Pedí tu Servicio</Link>
          </button>

          </div>
          <div className='flex flex-[50%] flex justify-end items-center'><Image src={ecommerce} alt="Imagen Landing" className="flex opacity-50 w-[100%]"/></div>
      </div>
      <div className='flex flex-col h-[600px] text-center justify-center items-center'>

        <div className='flex flex-col mt-12 justify-center'><h1 className='text-4xl font-semibold'>✅Beneficios</h1>
        <div data-aos="fade-up" className='w-[500px]  h-[50px] bg-[#737373] p-4 rounded flex items-center justify-center mt-16'><h2 className='text-lg text-white'>Ventas 24/7</h2></div>
        <div data-aos="fade-up" data-aos-delay="100" className='w-[500px] h-[50px] bg-[#737373] p-4 rounded flex items-center justify-center mt-16'><h2 className='text-lg text-white'>Alcance ilimitado</h2></div>
        <div  data-aos="fade-up" data-aos-delay="200" className='w-[500px]  h-[50px] bg-[#737373] p-4 rounded flex items-center justify-center mt-16'><h2 className='text-lg text-white'>Menores costos que un local físico</h2></div>
        <div   data-aos="fade-up" data-aos-delay="300" className='w-[500px]  h-[50px] bg-[#737373] p-4 rounded flex items-center justify-center mt-16'><h2 className='text-lg text-white'>Integración con redes sociales</h2></div> 
        </div>
         </div>
      
        <div className='flex flex-col gap-16 mt-16 h-[1100px] md:h-[700px] bg-black justify-center items-center opacity-80'>
                <div className='flex justify-center items-center'><h1 className='text-4xl text-white font-semibold'>💼¿Qué incluye?💼</h1></div>
                <div className='flex flex-col gap-16 items-center justify-center'>
                <div className='w-screen h-[700px] md:h-[350px] flex flex-col md:flex-row justify-center items-center gap-6 p-8 text-center'>
                     <div className='flex flex-col gap-6  md:w-[500px] w-full'>
                     <div className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>< Check size={30} color='green'/><h1 className='mr-12'>Formulario de Contacto</h1></div> 
                     <div className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>< Check size={30} color='green'/><h1 className='mr-12'>Responsive Desingn</h1></div>
                     <div className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>< Check size={30} color='green'/><h1 className='mr-12'>Dominio Personalizado</h1></div> 
                     <div className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>< Check size={30} color='green'/><h1 className='mr-12'>Carrito de Compra</h1></div> 
                     </div>
                     <div className='flex flex-col gap-6  md:w-[500px] w-full'>
                     <div className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>< Check size={30} color='green'/><h1 className='mr-12'>Contacto a Redes Sociales</h1></div> 
                     <div className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>< Check size={30} color='green'/><h1 className='mr-12'>Apartados y Secciones</h1></div>
                     <div className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>< Check size={30} color='green'/><h1 className='mr-12'>Múltiples Páginas</h1></div>
                     <div className='flex flex-row justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-[0_5px_20px_rgba(255,255,255,0.5)]'>< Check size={30} color='green'/><h1 className='mr-12'>Medio de Pago</h1></div> 
                     </div>
                  </div>
                   <button className="relative group bg-[rgb(50,205,50)] h-[70px] text-white px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                     <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                     <a href='https://wa.link/elp2e3' className="relative z-10">Pedí tu Servicio</a>
                     </button>
                </div>
                </div>
        <div className='flex flex-col w-screen h-[1450px] md:h-[700px] bg-white justify-center text-center gap-6 items-center'> 
           <div className='text-4xl font-bold mt-6'><h1>Testimonios</h1></div>
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
         <button className="relative group bg-[rgb(50,205,50)] text-white  w-[200px] px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
         <span className="pointer-events-none absolute -left-full top-1/2 w-[100px] h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
         <Link href='https://wa.link/elp2e3' className="relative z-10">Pedí tu Servicio</Link>
         </button>
    </div>
      <Footer />
      </div>

  )
}

export default page
