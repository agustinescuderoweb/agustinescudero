import React from 'react'
import Image from 'next/image'
import styles from './github.module.css'
import desarrollos from '../../../../public/desarrolloweb.jpg'
import git from '../../../../public/gitimage.jpg'

function Github() {
  return (
    <section className={styles.contenedor}>
      
      <div className={styles.contenido}>
        <h2 className={styles.subtitulo}>Proyectos & Código</h2>

        <h1 className={styles.titulo}>
          Mis Proyectos Recientes
        </h1>

        <p className={styles.descripcion}>
          Estos son algunos de los proyectos que desarrollé recientemente,
          enfocados en diseño web, performance y experiencia de usuario.
        </p>

        <p className={styles.descripcionSec}>
          Si sos desarrollador, podés explorar mis repositorios y ver cómo
          están construidos los proyectos.
        </p>

        <a
          href="https://github.com/agustinescuderoweb"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Ver GitHub
        </a>
      </div>

      <div className={styles.imagenes}>
        <Image
          src={desarrollos}
          alt="Desarrollo de proyectos web modernos"
          className={styles.imagen}
          priority
        />
      </div>

    </section>
  )
}

export default Github
