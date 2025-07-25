import React from 'react'
import styles from '@/componentes/quiensoy/blog.module.css'

function blog() {
  return (
    <div className={styles.contenedor}>
        <h1 className={styles.titulo}>Blog</h1>
        <div className={styles.blog}>
        <a href='../../blog/ventajas'><h1>Ventajas de tener un Sitio Web</h1></a>
        <a href='../../blog/desarrollo'><h1>Desarrollo Web con Código vs Wordpress</h1></a>
        <a href='../../blog/dominio'><h1>¿Qué es un Dominio y un Hosting?</h1></a>
        </div>
        <button className={styles.button}><a href='../../blog'>Ver Más Articulos</a></button>     
    </div>
  )
}

export default blog
