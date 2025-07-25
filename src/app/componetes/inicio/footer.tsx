import React from 'react'
import Image from "next/image";
import logo from "../../../../public/logo.png"


function footer() {
  return (
    <div className='flex flex-col lg:flex-row lg:h-[150px] bg-black justify-center items-center text-white lg:gap-[500px] m-0 box-border'>
  <div className='flex lg:items-center text-center flex-row justify-center w-[400px] lg:m-0'>
    <div className=''>
      <Image src={logo} alt="logo" className='w-[50px] sm:w-[100px]' />
    </div>
    <div className='flex items-center justify-center text-center m-4'>
      <span>© 2025 Creado por Agustín Escudero Web</span>
    </div>
  </div>

  {/* Este bloque solo se verá en pantallas sm (640px) o mayores */}
  <div className='hidden lg:flex flex-row gap-x-12'>
    <div className='flex flex-col gap-y-3'>
      <a href='/contactos'><span>Contactos</span></a>
    </div>
    <div className='flex flex-col gap-y-3'>
      <a href='https://www.instagram.com/agustinescuderoweb/'><span>INSTAGRAM</span></a>
      <a href='https://www.youtube.com/@agustinescuderoweb'></a><span>YOUTUBE</span>
    </div>
    <div className='flex flex-col gap-y-3'>
      <a href='https://wa.link/elp2e3'><span className='bg-white text-black p-2 hover:bg-green-400'>Hablá conmigo por WhatsApp</span></a>
    </div>
  </div>
</div>

  )
}

export default footer
