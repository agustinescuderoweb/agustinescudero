import styles from "./page.module.css";
import Menu from '../componetes/inicio/menu'
import Footer from '../componetes/inicio/footer'

export default function Page() {
  return (
    <main className={styles.page}>
       <Menu />
      <div className={styles.wrapper}>

        {/* HERO */}
        <section className={styles.hero}>
          <div>
         <h1 className={styles.heroTitle}>
            Chatbots con Inteligencia Artificial para negocios en Mendoza
          </h1>
            <p className={styles.heroSubtitle}>
              Chatbots que responden por vos 24/7, ahorran tiempo y te ayudan a vender más sin contratar personal.
            </p>

            <ul className={styles.heroList}>
              <li><span>›</span> Automatización de consultas</li>
              <li><span>›</span> Integración a Webs y Whatsaap</li>
              <li><span>›</span> Integraciones a Google Sheets</li>
              <li><span>›</span> Sistemas de Bases de datos</li>
            </ul>
            <div className={styles.brochure}>
            <a
              href="https://wa.me/5492612388045?text=Hola%20Agust%C3%ADn"
              className={styles.btnPrimary}
            >
              Hablar por WhatsApp
            </a>

            <a href="https://drive.google.com/file/d/1BJ6fctz1s7WoeHNAFHzusH1YSBPhIRuI/view?usp=sharing" className={styles.btnSecondary}>
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
              Desde USD 400 + 1 meses gratis de soporte
            </p>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Servicios de IA para tu negocio</h2>

          <div className={styles.servicesGrid}>

            {/* Servicio 1 */}
             <div className={styles.serviceCard}>
              <div className={styles.serviceTag}>Plan Start</div>
              <div className={styles.serviceTitle}>ChatBot + Whatsaap</div>
              <ul className={styles.serviceList}>
                <li>Respuestas automáticas</li>
                <li>Deriva a asesor humano</li>
                <li>Funciona 24/7</li>
              </ul>
              <p className={styles.price}>USD 400 - (soporte mensual USD 40)</p>
            </div>

            

            {/* Servicio 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceTag}>Plan Basic</div>
              <div className={styles.serviceTitle}>ChatBot + Whatsaap + Google Sheet</div>
              <ul className={styles.serviceList}>
                <li>Respuestas automáticas</li>
                <li>Deriva a asesor humano</li>
                <li>Registra datos a Google Sheet</li>
                <li>Funciona 24/7</li>
              </ul>
              <p className={styles.price}>USD 600 - (soporte mensual USD 60)</p>
            </div>

            {/* Servicio 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceTag}>Plan Pro</div>
              <div className={styles.serviceTitle}>ChatBot + Base de datos</div>
              <ul className={styles.serviceList}>
                <li>Integrado en tu web</li>
                <li>Respuestas en tiempo real</li>
                <li>Registra Insight de Clientes</li>
                <li>Sistema de Administración de datos</li>
              </ul>
              <p className={styles.price}>USD 1500 - (soporte mensual USD 150)</p>
            </div>

          </div>

          {/* CTA Final */}
          <div className={styles.cta}>
            <p>¿Querés ver una demo aplicada a tu negocio?</p>
            <a
              href="https://wa.me/5492612388045"
              className={styles.btnPrimary}
            >
              Quiero una demo gratis
            </a>
          </div>
        </section>

        {/* BROCHURE */}
        <section id="brochure" className={styles.brochure}>
          <h2 className={styles.brochureTitle}>Brochure en PDF</h2>
          <p className={styles.brochureText}>
            Descargá el brochure completo con todos los servicios.
          </p>
          <a
            href="https://drive.google.com/file/d/1BJ6fctz1s7WoeHNAFHzusH1YSBPhIRuI/view?usp=sharing"
            className={styles.btnPrimary}
            download
          >
            Descargar PDF
          </a>
        </section>

      </div>
      <Footer />
    </main>
  );
}