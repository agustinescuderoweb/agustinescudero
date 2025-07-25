import React from 'react'
import Image from 'next/image'
import styles from './desarrollos.module.css'
import pintura from '../../../../public/pintura.jpg'
import maquillaje from '../../../../public/maquillaje.webp'
import pc from '../../../../public/pc.jpg'
import magia from '../../../../public/magia.jpg'
import turismo from '../../../../public/turismo.jpg'
import ferrari from '../../../../public/ferrari.jpg'
import meraki from '../../../../public/meraki.jpg'
import huellas from '../../../../public/montaña.jpg'


function desarrollos() {
  return (
    <div className={styles.desarrollos}>
        <h1 className={styles.misdesarrollos}>Mis Desarrollos</h1>
          <div className={styles.contenedor}>
            <a href="https://merakiart.netlify.app"><div className={styles.card}><Image className={styles.imag} src={pintura} alt="pintura"></Image><h1>Meraky Art</h1></div></a>
            <a href='https://ariadnaeventmakeupp.netlify.app'><div className={styles.card}><Image className={styles.imag} src={maquillaje} alt="maquillaje"></Image><h1>AriadnaEventMakeupp</h1></div></a>   
        </div>
        <div className={styles.contenedor}>
            <a href='https://modopc.netlify.app'><div className={styles.card}><Image className={styles.imag} src={pc} alt="pc"></Image><h1>Modo Pc</h1></div></a>
            <a href='https://agustinmagia.netlify.app'><div className={styles.card}><Image className={styles.imag} src={magia} alt="magia"></Image><h1>Agustin Magia</h1></div></a>
        </div>
        <div className={styles.contenedor}>
           <a href='https://turismoa.netlify.app/'><div className={styles.card}><Image className={styles.imag} src={turismo} alt="turismo"></Image><h1>Turismo Aventura</h1></div></a>
           <a href='https://ferrari7.netlify.app/'><div className={styles.card}><Image className={styles.imag} src={ferrari} alt="ferrari"></Image><h1>Ferrari</h1></div></a>
        </div>
        <div className={styles.contenedor}>
           <a href='https://merakiarteinsumo.com/'><div className={styles.card}><Image className={styles.imag} src={meraki} alt="meraki"></Image><h1>Ecommerce - Arte</h1></div></a>
           <a href='http://www.huellasandinasmountainshop.com.ar/'><div className={styles.card}><Image className={styles.imag} src={huellas} alt="meraki"></Image><h1>Tienda de Ropa de Montaña</h1></div></a>

        </div>
    </div>
  )
}

export default desarrollos
