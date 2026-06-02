import React from 'react'
import Image from 'next/image'
import styles from './desarrollos.module.css'
import peni from '../../../../public/peni.jpg'
import huellas from '../../../../public/montaña.jpg'
import mendotour from '../../../../public/mendotour.jpeg'
import caribe from '../../../../public/caribe.jpg'
import turismo from '../../../../public/turismo.jpg'
import abogado from '../../../../public/abogado.jpg'
import dentista from '../../../../public/dentista.jpg'
import magia from '../../../../public/magia.jpg'
import pc from '../../../../public/pc.jpg'
import meraki from '../../../../public/meraki.jpg'
import analisis from '../../../../public/analisis.jpeg'
import ferrari from '../../../../public/ferrari.jpg'
import wine from '../../../../public/wine.jpg'

const proyectos = [
   {
    titulo: 'Limite Vertical',
    categoria: 'Turismo',
    img: peni,
    url: 'https://limiteverticalmza.com/',
  },
  {
    titulo: 'Huellas Andinas',
    categoria: 'Ropa Montaña',
    img: huellas,
    url: 'http://www.huellasandinasmountainshop.com.ar/',
  },
  {
    titulo: 'MendoWine',
    categoria: 'Vinoteca',
    img: wine,
    url: 'https://mendowine.agustinescuderoweb.com/',
  },
  {
    titulo: 'MendoTour',
    categoria: 'Turismo',
    img: mendotour,
    url: 'https://mendotour.agustinescuderoweb.com/',
  },
  {
    titulo: 'Turismo Caribe',
    categoria: 'Turismo',
    img: caribe,
    url: 'https://turismocaribe.agustinescuderoweb.com/',
  },
  {
    titulo: 'Turismo Aventura',
    categoria: 'Turismo',
    img: turismo,
    url: 'https://turismoa.netlify.app/',
  },
  {
    titulo: 'Estudio Serio',
    categoria: 'Abogacía',
    img: abogado,
    url: 'https://estudioserio.com.ar/',
  },
  {
    titulo: 'Dental Studio',
    categoria: 'Salud',
    img: dentista,
    url: 'https://dentista-smoky.vercel.app',
  },
  {
    titulo: 'Agustin Magia',
    categoria: 'Arte',
    img: magia,
    url: 'https://agustinmagia.netlify.app',
  },
  {
    titulo: 'Modo PC',
    categoria: 'Tecnología',
    img: pc,
    url: 'https://modopc.netlify.app',
  },
  {
    titulo: 'Meraki Arte',
    categoria: 'E-commerce',
    img: meraki,
    url: 'https://merakiarteinsumo.com/',
  },
  {
    titulo: 'Análisis de Datos IA',
    categoria: 'Inteligencia Artificial',
    img: analisis,
    url: 'https://zestly-0a3ce8.webflow.io/',
  },
  {
    titulo: 'Ferrari',
    categoria: 'Automovilismo',
    img: ferrari,
    url: 'https://ferrari7.netlify.app/',
  },
]

function Desarrollos() {
  return (
    <section className={styles.desarrollos}>
      <div className={styles.header}>
        <h2 className={styles.titulo}>Proyectos realizados</h2>
        <p className={styles.descripcion}>
          Algunos de los sitios y productos digitales que desarrollé para
          clientes reales en distintos rubros.
        </p>
      </div>

      <div className={styles.grid}>
        {proyectos.map((proyecto, index) => (
          <a
            key={index}
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={proyecto.img}
                alt={proyecto.titulo}
                className={styles.image}
              />
              <div className={styles.overlay}></div>
            </div>

            <div className={styles.cardContent}>
              <span className={styles.categoria}>{proyecto.categoria}</span>
              <h3 className={styles.cardTitle}>{proyecto.titulo}</h3>

              <button className={styles.button}>
                Ver proyecto
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Desarrollos
