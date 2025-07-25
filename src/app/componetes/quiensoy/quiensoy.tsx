import React from 'react'
import Image from 'next/image'
import styles from '@/componentes/quiensoy/quiensoy.module.css'
import agustin from '../../../public/agustin.jpg'

function quiensoy() {
  return (
    <div className={styles.quien}>
        <div className={styles.quiensoy}>
        <h3>Sobre mi</h3>
        <h1>Agustín Escudero Web</h1>
        <p>"¡Bienvenido a mi sitio web! Un gusto compartir mis conocimientos. Mi sitio web está dedicado a proporcionar información valiosa, recursos y servicios. Me esfuerzo por hacer que tu experiencia sea lo más agradable e informativa posible. Tomate tu tiempo para explorar mi sitio y obtené información sobre lo que tengo para ofrecer. Si tenes alguna pregunta o comentario, no dudes en comunicarte conmigo. ¡Gracias por tu visita!"</p>
        </div>
        <div className={styles.imagen}>
          <Image src={agustin} className={styles.agustin} alt='agustin' ></Image>
        </div>
    </div>
  )
}

export default quiensoy
