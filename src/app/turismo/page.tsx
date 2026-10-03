import type { Metadata } from "next"
import Script from "next/script"
import Menu from "@/app/componetes/inicio/menu"
import Footer from "@/app/componetes/inicio/footer"
import TrackPageView from "@/app/components/TrackPageView"
import TourismHero from "@/app/components/turismo/TourismHero"
import TourismProblems from "@/app/components/turismo/TourismProblems"
import TourismSolutions from "@/app/components/turismo/TourismSolutions"
import ReservationComparison from "@/app/components/turismo/ReservationComparison"
import TourismProjects from "@/app/components/turismo/TourismProjects"
import TourismAudience from "@/app/components/turismo/TourismAudience"
import TourismAbout from "@/app/components/turismo/TourismAbout"
import TourismProcess from "@/app/components/turismo/TourismProcess"
import TourismFAQ from "@/app/components/turismo/TourismFAQ"
import TourismCTA from "@/app/components/turismo/TourismCTA"
import TourismStickyCta from "@/app/components/turismo/TourismStickyCta"
import { tourismFaq } from "@/data/turismo"
import { SITE_URL } from "@/lib/site"

const title = "Desarrollo Web para Turismo | Agustín Escudero"
const description =
  "Desarrollo sitios web para agencias, alojamientos, excursiones y empresas de turismo. Reservas por WhatsApp o sistemas completos de reservas online."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/turismo` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/turismo`,
    siteName: "Agustín Escudero",
    locale: "es_AR",
    type: "website",
  },
}

export default function TurismoPage() {
  return (
    <>
      <Script id="turismo-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Desarrollo web para turismo",
            description,
            provider: { "@type": "Organization", name: "Agustín Escudero Web", url: SITE_URL },
            areaServed: "AR",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tourismFaq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          },
        ])}
      </Script>

      <TrackPageView event="product_view" metadata={{ product: "turismo" }} />

      <Menu />

      <main className="bg-bg pb-20 text-ink md:pb-0">
        <TourismHero />
        <TourismProblems />
        <TourismSolutions />
        <ReservationComparison />
        <TourismProjects />
        <TourismAudience />
        <TourismAbout />
        <TourismProcess />
        <TourismFAQ />
        <TourismCTA />
      </main>

      <TourismStickyCta />
      <Footer />
    </>
  )
}
