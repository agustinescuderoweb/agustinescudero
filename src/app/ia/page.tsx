import Head from 'next/head'
import styles from "./page.module.css";
import Menu from '../componetes/inicio/menu'
import Footer from '../componetes/inicio/footer'

export default function Page() {
  return (
    <main className={styles.page}>
      <Head>
        <title>Chatbots con Inteligencia Artificial para negocios | Agustín Escudero</title>
        <meta
          name="description"
          content="Automatizá tu negocio con chatbots de IA que responden 24/7 por WhatsApp y tu web. Ahorrá tiempo, captá más clientes y vendé más sin contratar personal."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Chatbots con IA para tu negocio | Agustín Escudero"
        />
        <meta
          property="og:description"
          content="Chatbots inteligentes integrados a WhatsApp, Google Sheets y tu web. Automatizá consultas y vendé más las 24hs."
        />
        <meta
          property="og:url"
          content="https://agustinescuderoweb.com/ia"
        />
        <meta
          property="og:image"
          content="https://agustinescuderoweb.com/logoopen.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Menu />

      <div className={styles.wrapper}>
        <section className={styles.hero}>
          <div>
            <h1 className={styles.heroTitle}>
              Chatbots con Inteligencia Artificial para negocios en Mendoza
            </h1>

            <p className={styles.heroSubtitle}>
              Chatbots que responden por vos 24/7, ahorran tiempo y te ayudan a
              vender más sin contratar personal.
            </p>

            <ul className={styles.heroList}>
              <li><span>›</span> Automatización de consultas</li>
              <li><span>›</span> Integración a Webs y WhatsApp</li>
              <li><span>›</span> Integraciones a Google Sheets</li>
              <li><span>›</span> Sistemas de Bases de Datos</li>
            </ul>

            <div className={styles.brochure}>
              <a
                href="https://wa.me/5492612388045?text=Hola%20Agust%C3%ADn"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Hablar por WhatsApp
              </a>

              <a
                href="https://drive.google.com/file/d/1BJ6fctz1s7WoeHNAFHzusH1YSBPhIRuI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                Ver brochure PDF
              </a>
            </div>
          </div>

          <div className={styles.heroCard}>
            <h3 className={styles.cardTitle}>Soluciones de IA</h3>

            <p className={styles.cardText}>
              ChatBots Inteligentes que trabajan por vos.
            </p>

            <ul className={styles.cardList}>
              <li>• Respuestas inmediatas</li>
              <li>• Ahorro de tiempo</li>
              <li>• Más ventas</li>
            </ul>

            <p className={styles.cardText}>
              Desde USD 400 + 1 mes gratis de soporte
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Servicios de IA para tu negocio
          </h2>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceTag}>Plan Start</div>

              <div className={styles.serviceTitle}>
                ChatBot + WhatsApp
              </div>

              <ul className={styles.serviceList}>
                <li>Respuestas automáticas</li>
                <li>Deriva a asesor humano</li>
                <li>Funciona 24/7</li>
              </ul>

              <p className={styles.price}>
                USD 400 - (soporte mensual USD 40)
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceTag}>Plan Basic</div>

              <div className={styles.serviceTitle}>
                ChatBot + WhatsApp + Google Sheets
              </div>

              <ul className={styles.serviceList}>
                <li>Respuestas automáticas</li>
                <li>Deriva a asesor humano</li>
                <li>Registra datos en Google Sheets</li>
                <li>Funciona 24/7</li>
              </ul>

              <p className={styles.price}>
                USD 600 - (soporte mensual USD 60)
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceTag}>Plan Pro</div>

              <div className={styles.serviceTitle}>
                ChatBot + Base de Datos
              </div>

              <ul className={styles.serviceList}>
                <li>Integrado en tu web</li>
                <li>Respuestas en tiempo real</li>
                <li>Registra insights de clientes</li>
                <li>Sistema de administración de datos</li>
              </ul>

              <p className={styles.price}>
                USD 1500 - (soporte mensual USD 150)
              </p>
            </div>
          </div>

          <div className={styles.cta}>
            <p>¿Querés ver una demo aplicada a tu negocio?</p>

            <a
              href="https://wa.me/5492612388045"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Quiero una demo gratis
            </a>
          </div>
        </section>

        <section id="brochure" className={styles.brochure}>
          <h2 className={styles.brochureTitle}>Brochure en PDF</h2>

          <p className={styles.brochureText}>
            Descargá el brochure completo con todos los servicios.
          </p>

          <a
            href="https://drive.google.com/file/d/1BJ6fctz1s7WoeHNAFHzusH1YSBPhIRuI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Descargar PDF
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}