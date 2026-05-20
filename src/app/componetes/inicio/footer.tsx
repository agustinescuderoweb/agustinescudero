import React from 'react'
import Image from "next/image";
import logo from "../../../../public/logo.png"


function footer() {
  return (
    <footer className='flex flex-col lg:flex-row lg:h-[150px] bg-black justify-center items-center text-white lg:gap-[500px] m-0 box-border'>
  <div className='flex lg:items-center text-center flex-row justify-center w-[400px] lg:m-0'>
    <div className=''>
      <Image src={logo} alt="Logo de Agustín Escudero, desarrollador web en Mendoza" className='w-[50px] sm:w-[100px]' />
    </div>
    <div className='flex items-center justify-center text-center m-4'>
      <span>© 2025 Creado por Agustín Escudero Web</span>
    </div>
  </div>

  {/* Este bloque solo se verá en pantallas sm (640px) o mayores */}
  <div className='hidden lg:flex flex-row gap-x-12'>
    <ul className='flex flex-col gap-y-3'>
      <li><a href='/contactos'  title='Formulario de contacto de Agustín Escudero'><span>Contactos</span></a></li>
    </ul>
    <ul className='flex flex-col gap-y-3'>
     <li><a href='https://www.instagram.com/agustinescuderoweb/' title='Instagram de Agustín Escudero'><span>INSTAGRAM</span></a></li>
      <li><a href='https://www.youtube.com/@agustinescuderoweb' title='Canal de YouTube de Agustín Escudero'>YOUTUBE</a></li> 
    </ul>
    <ul className='flex flex-col gap-y-3'>
      <li><a href='https://wa.link/elp2e3'  title='Contactar vía WhatsApp con Agustín Escudero'><span className='bg-white text-black p-2 hover:bg-green-400'>Hablá conmigo por WhatsApp</span></a></li>
    </ul>
  </div>
</footer>

  )
}

export default footer
