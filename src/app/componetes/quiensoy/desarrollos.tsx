import React from 'react'
import Image from 'next/image'
import styles from './desarrollos.module.css'
import pc from '../../../../public/pc.jpg'
import magia from '../../../../public/magia.jpg'
import turismo from '../../../../public/turismo.jpg'
import ferrari from '../../../../public/ferrari.jpg'
import meraki from '../../../../public/meraki.jpg'
import huellas from '../../../../public/montaña.jpg'
import analisis from '../../../../public/analisis.jpeg'


function desarrollos() {
  return (
    <div className={styles.desarrollos}>
        <h1 className={styles.misdesarrollos}>Mis Desarrollos</h1>
        <div className={styles.contenedor}>
             <a href='http://www.huellasandinasmountainshop.com.ar/'><div className={styles.card}><Image className={styles.imag} src={huellas} alt="meraki"></Image><h1>Tienda de Ropa de Montaña</h1><h3>Categoría: Turismo</h3>  <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                <a href='http://www.huellasandinasmountainshop.com.ar/' className="relative z-10">Ver Web</a>
                </button></div></a>
              <a href='https://turismoa.netlify.app/'><div className={styles.card}><Image className={styles.imag} src={turismo} alt="turismo"></Image><h1>Turismo Aventura</h1><h3>Categoría: Turismo</h3>  <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                <a href='https://turismoa.netlify.app/' className="relative z-10">Ver Web</a>
                </button></div></a>
        </div>
        <div className={styles.contenedor}>
           <a href='https://ferrari7.netlify.app/'><div className={styles.card}><Image className={styles.imag} src={ferrari} alt="ferrari"></Image><h1>Ferrari</h1><h3>Categoría: Automovilismo</h3>  <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                <a href='https://ferrari7.netlify.app/' className="relative z-10">Ver Web</a>
                </button></div></a>
          <a href='https://agustinmagia.netlify.app'><div className={styles.card}><Image className={styles.imag} src={magia} alt="magia"></Image><h1>Agustin Magia</h1><h3>Categoría: Arte</h3>  <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                <a href='https://agustinmagia.netlify.app' className="relative z-10">Ver Web</a>
                </button></div></a>
        </div>
        <div className={styles.contenedor}>
            <a href='https://modopc.netlify.app'><div className={styles.card}><Image className={styles.imag} src={pc} alt="pc"></Image><h1>Modo Pc</h1><h3>Categoría: Tecnología</h3>  <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                <a href='https://modopc.netlify.app' className="relative z-10">Ver Web</a>
                </button></div></a>
           <a href='https://merakiarteinsumo.com/'><div className={styles.card}><Image className={styles.imag} src={meraki} alt="meraki"></Image><h1>Ecommerce - Arte</h1><h3>Categoría: Arte</h3>  <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                <a href='https://merakiarteinsumo.com/' className="relative z-10">Ver Web</a>
                </button></div></a>
          
        </div>
        <div className={styles.contenedor}>
           <a href='https://zestly-0a3ce8.webflow.io/'><div className={styles.card}><Image className={styles.imag} src={analisis} alt="analisis"></Image><h1>Analisis de Datos con IA</h1><h3>Categoría: Inteligencia Artificial</h3>  <button className="relative group bg-[rgb(50,205,50)] text-white px-6 py-3 text-base font-bold rounded-md shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <span className="pointer-events-none absolute -left-full top-1/2 w-full h-full -translate-y-1/2 rotate-[-45deg] bg-white opacity-0 transition-all duration-500 ease-in-out group-hover:left-full group-hover:opacity-100"></span>
                <a href='https://zestly-0a3ce8.webflow.io/' className="relative z-10">Ver web</a>
                </button></div></a>
        </div>
    </div>
  )
}

export default desarrollos
