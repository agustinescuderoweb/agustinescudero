import type { Metadata } from "next"
import Menu from "../componetes/inicio/menu"
import ContactForm from "../components/ContactForm"
import Footer from "../componetes/inicio/footer"

export const metadata: Metadata = {
  title: "Contacto | Agustín Escudero Web",
  description:
    "Contanos sobre tu negocio y te ayudamos a elegir la solución adecuada: Web Business, Ecommerce Business o desarrollo a medida.",
  openGraph: {
    title: "Contacto | Agustín Escudero Web",
    description:
      "Contanos sobre tu negocio y te ayudamos a elegir la solución adecuada.",
    url: "https://www.agustinescuderoweb.com/contactos",
  },
}

export default function Page() {
  return (
    <div className="bg-bg">
      <Menu />

      <main className="mx-auto max-w-2xl px-6 pb-28 pt-40">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Contacto
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Contanos sobre tu proyecto
          </h1>
          <p className="mt-3 text-sm text-ink/50">
            Respondemos en menos de 24 horas hábiles con los próximos pasos.
          </p>
        </div>

        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
