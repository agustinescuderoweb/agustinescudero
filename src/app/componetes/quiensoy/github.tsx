import React from 'react'
import desarrollos from '../../../../public/desarrolloweb.jpg'
import git from '../../../../public/gitimage.jpg'
import styles from './github.module.css'
import Image from 'next/image'

function github() {
  return (
    <div className={styles.contenedor}>
        <div className={styles.contenido}><h1>Mis Proyectos Recientes<br></br>...</h1><h2>Estos son algunos proyectos que he creado recientemente..</h2><h3>Si sos desarrollador podes visitar mis códigos..</h3></div>
        <div className={styles.imagenes}><Image className={styles.desarrollos} src={desarrollos} alt="desarrollos"></Image><Image className={styles.git} src={git} alt="git"></Image></div>
        <button className={styles.button}><a href="https://github.com/agustinescuderoweb">Ver más Proyectos</a></button>
    </div>
  )
}

export default github
