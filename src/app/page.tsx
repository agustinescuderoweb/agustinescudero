import { Code2, ShieldCheck } from "lucide-react"
import Menu from "./componetes/inicio/menu"
import Hero from "./components/Hero"
import ProductCard from "./components/ProductCard"
import ProcessStep from "./components/ProcessStep"
import TrustCard from "./components/TrustCard"
import PortfolioCard from "./components/PortfolioCard"
import CareCard from "./components/CareCard"
import FAQAccordion from "./components/FAQAccordion"
import CTASection from "./components/CTASection"
import Button from "./components/Button"
import Footer from "./componetes/inicio/footer"
import Testimonios from "./componetes/testimonios/Testimonios"
import { products } from "@/data/products"
import { proceso } from "@/data/proceso"
import { confianza } from "@/data/confianza"
import { carePlans } from "@/data/care"
import { faq } from "@/data/faq"
import { proyectos } from "@/data/proyectos"
import { waLink } from "@/lib/site"

export default function Page() {
  const proyectosDestacados = proyectos.slice(0, 4)

  return (
    <>
      <Menu />
      <Hero />

      <section id="productos" className="border-t border-border bg-bg px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Productos
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Elegí la solución que tu negocio necesita
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ink/35">
            Los precios indicados corresponden al desarrollo del proyecto. Hosting,
            dominio, licencias premium o servicios externos no están incluidos
            salvo que se indique expresamente. El dominio queda registrado a
            nombre del cliente. Podemos asesorar y configurar dominio y hosting.
          </p>
        </div>
      </section>

      <section id="desarrollo-a-medida" className="border-t border-border bg-bg px-6 py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
            <Code2 size={22} className="text-accent" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            ¿Necesitás algo más específico?
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-ink/55">
            También desarrollamos soluciones personalizadas: sistemas web,
            automatizaciones, APIs, Firebase, Next.js, integraciones,
            inteligencia artificial y sistemas internos.
          </p>

          <Button
            href={waLink("Hola Agustín, quiero contarte sobre mi proyecto")}
            external
            variant="outline"
            showArrow
          >
            Contame tu proyecto
          </Button>
        </div>
      </section>

      <section id="proceso" className="border-t border-border bg-bg px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Proceso
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Un proceso claro desde el primer día
            </h2>
          </div>

          <div className="mt-16 flex flex-col gap-10 md:flex-row md:gap-4">
            {proceso.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === proceso.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="confianza" className="border-t border-border bg-bg px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Sabés desde el principio qué estás contratando.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {confianza.map((item) => (
              <TrustCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="border-t border-border bg-bg px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Portfolio
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Proyectos reales. Resultados reales.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proyectosDestacados.map((proyecto) => (
              <PortfolioCard key={proyecto.titulo} proyecto={proyecto} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="/portafolio" variant="outline" showArrow>
              Ver todo el portfolio
            </Button>
          </div>
        </div>
      </section>

      <Testimonios />

      <section id="mantenimiento" className="border-t border-border bg-bg px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Mantenimiento
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Tu web no termina cuando la publicamos.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {carePlans.map((plan) => (
              <CareCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bg px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
            <ShieldCheck size={20} className="text-accent" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
            30 días de garantía técnica
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-ink/50">
            Durante los 30 días posteriores a la publicación corregimos sin
            costo cualquier error técnico relacionado con el desarrollo
            original del sitio.
          </p>
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-bg px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="mt-12">
            <FAQAccordion items={faq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Tu próxima web puede empezar hoy."
        subtitle="Contanos sobre tu negocio y te ayudamos a elegir la solución adecuada."
        primaryCta={{ href: "/contactos", label: "Quiero mi sitio web" }}
        secondaryCta={{
          href: waLink("Hola Agustín, quiero info sobre mi web"),
          label: "Hablar por WhatsApp",
          external: true,
        }}
        note="Web Business · Ecommerce Business · Desarrollo a medida"
      />

      <Footer />
    </>
  )
}
