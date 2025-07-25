import React from 'react'
import Menu from '../../app/componetes/inicio/menu'
import Image from 'next/image'
import Agustin from '../../../public/agustin.jpg'
import Desarrollos from '../componetes/quiensoy/desarrollos'
import Github from '../componetes/quiensoy/github'
import Footer from '../componetes/inicio/footer'

function page() {
  return (
    <div>
      < Menu />
      <div className="flex flex-col md:flex-row w-screen justify-center items-center md:justify-between bg-black bg-opacity-30 text-center">
                <div className='flex flex-col flex-[50%] justify-center items-center overflow-hidden gap-10 pt-16 pb-16'><h1 className="text-white text-4xl font-bold">¿Quién Soy?</h1>
                <p className='text-[#737373] w-[80%]'>Mi nombre es Agustin Escudero, soy desarrollador, de Mendoza; Argentina. Llevo 5 años desarrollando sitios web, estudié de forma autodidacta apalancandome de diferentes recursos por medio de internet, manejo diferentes tecnologías de desarrollo, tengo más de 10 proyectos realizados,
                  trabajé en una fintech realizando interfaces de usuarios.. actualmente me encuentro desarrollando mi propio sistema, ofreciendo soluciones digitales. 
                </p>
                <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                <a href='https://wa.link/elp2e3' className="relative z-10">Pedí tu Servicio</a>
                </button>
      
                </div>
                <div className='flex w-full md:flex-[50%] flex justify-center md:justify-end items-center'><Image src={Agustin} alt="Imagen Landing" className="flex opacity-60 w-screen md:w-[70%] md:mr-50" /></div>
            </div>
            < Desarrollos />
            < Github />
            < Footer />
    </div>
  )
}

export default page
