import React from 'react'
import Image from 'next/image'
import whatsaap from '../../../public/icon/whatsaaps.svg'
import instagram from '../../../public/icon/instagrams.svg'
import youtube from '../../../public/icon/youtubes.svg'
import styles from '@/componentes/quiensoy/contactos.module.css'



function contactos() {
  return (
    <div className={styles.contactos}>
    <h1>Enviáme un Mensaje</h1>
    <h2>Seguí mis redes Sociales</h2>
    <div className={styles.icon}>
    <a href='https://wa.link/elp2e3'><Image className={styles.icons} src={whatsaap}  alt="WhatsApp"></Image></a>
    <a href='https://www.instagram.com/agustinescuderoweb/'><Image className={styles.icons} src={instagram} alt="Instagram"></Image></a>
    <a href='https://www.youtube.com/@agustinescuderoweb'><Image className={styles.icons}  src={youtube} alt="Youtube"></Image></a>
    </div>
    </div>
  )
}

export default contactos
