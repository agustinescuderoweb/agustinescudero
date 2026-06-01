import style from "../inicio/header.module.css"
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className={style.espacio}>
        <video autoPlay loop muted playsInline className={style.videoFondo}>
          <source src="/videos/videowebuno.mp4" type="video/mp4" />
        </video>
        <div className={style.overlay}></div>
        <div className={style.contenedor}>
          <div className={style.contenido}>
            <div className={style.text}>
              <h1>Diseño de páginas web que generan clientes</h1>
              <p>Con SEO estratégico para emprendedores y marcas personales</p>
              <button className={style.button}>
                <Link href="/servicios" className="!no-underline">
                  Solicita tu web Profesional
                </Link>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className={style.propuesta}>
        <p className={style.textprop}>
          Ayudo a emprendedores, profesionales independientes y pequeños negocios
          a crear páginas web modernas con SEO incorporado. No solo de diseño
          visual, sino de construir un sitio web que cargue con velocidad, se
          posicione en Google y convierta visitas en clientes.
        </p>
      </section>

      <section className={style.servicios}>
        <h2>Servicios de diseño web pensados para generar clientes</h2>
        <div className={style.serviciosblock}>
          <div className={style.serviciobox}>
            <h3>Landing pages que convierten visitas en clientes</h3>
            <p>
              Creo landing pages rápidas, optimizadas para SEO y adaptadas a
              todos los dispositivos, ideales para emprendedores que quieren
              vender sus servicios de forma profesional.
            </p>
          </div>

          <div className={style.serviciobox}>
            <h3>Diseño de sitios web profesionales para emprendedores</h3>
            <p>
              Desarrollo sitios web modernos, responsive y optimizados para SEO,
              ideales para emprendedores y marcas personales que buscan presencia
              profesional en internet.
            </p>
          </div>

          <div className={style.serviciobox}>
            <h3>Tiendas online con SEO para ecommerce</h3>
            <p>
              Desarrollo tiendas online optimizadas para Google, con estructura
              SEO pensada para atraer tráfico orgánico y mejorar las ventas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}