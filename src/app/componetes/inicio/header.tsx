import style from "../inicio/header.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.espacio}>
       <video autoPlay loop muted playsInline className={style.videoFondo}>
        <source src="/videos/videowebuno.mp4" type="video/mp4" />
      </video>
      <div className={style.overlay}></div>
    <div className={style.contenedor}>
      <div className={style.contenido}>
      <div className={style.text}>
      <h1>Diseño Web Profesional para <br></br><u>Vender Más</u> en Internet</h1>
      <h2>Sitios web, landing pages y tiendas online <br></br> para emprendedores, negocios y marcas personales</h2>
      <button className={style.button}><Link href="/servicios" className="!no underline">Ver mis servicios</Link></button>
      </div>
      </div>
    </div>
    </div>

  );
}
