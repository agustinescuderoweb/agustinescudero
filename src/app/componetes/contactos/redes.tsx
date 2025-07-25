import React from 'react'
import Image from 'next/image';
import styles from '@/componentes/contactos/redes.module.css'
import whatsaap from '../../../public/icon/whatsaap.svg';
import instagram from '../../../public/icon/instagram.svg';
import youtube from '../../../public/icon/youtube.svg'

function redes() {
  return (
    <div><div className={styles.icon}>
    <a href='https://wa.link/elp2e3'><Image className={styles.icons} src={whatsaap} alt="WhatsApp"></Image></a>
    <a href='https://www.instagram.com/agustinescuderoweb/'><Image className={styles.icons} src={instagram} alt="Instagram"></Image></a>
    <a href='https://www.youtube.com/@agustinescuderoweb'><Image className={styles.icons} src={youtube} alt="Youtube"></Image></a>
</div></div>
  )
}

export default redes
