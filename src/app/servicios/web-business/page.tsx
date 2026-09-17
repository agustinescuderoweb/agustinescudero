import type { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import Menu from '@/app/componetes/inicio/menu'
import Footer from '@/app/componetes/inicio/footer'
import Button from '@/app/components/Button'
import ProductCard from '@/app/components/ProductCard'
import FAQAccordion from '@/app/components/FAQAccordion'
import CTASection from '@/app/components/CTASection'
import TrackPageView from '@/app/components/TrackPageView'
import { products } from '@/data/products'
import { faq } from '@/data/faq'
import { waLink } from '@/lib/site'
import sitio from '../../../../public/sitio.jpg'

const webBusiness = products.find((p) => p.slug === 'web-business')!

export const metadata: Metadata = {
  title: 'Web Business — Sitio Web Profesional | Agustín Escudero',
  description:
    'Web Business: sitio web profesional para negocios que necesitan generar consultas y clientes. Diseño a medida, SEO inicial, formularios y 30 días de soporte. Desde US$450.',
  openGraph: {
    title: 'Web Business — Sitio Web Profesional',
    description:
      'Presencia digital profesional pensada para generar confianza y captar clientes.',
    url: 'https://www.agustinescuderoweb.com/servicios/web-business',
  },
}

export default function Page() {
  return (
    <>
      <Script id="web-business-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Web Business',
          description: webBusiness.description,
          provider: { '@type': 'Organization', name: 'Agustín Escudero Web' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '450',
          },
        })}
      </Script>

      <TrackPageView event="product_view" metadata={{ product: 'web_business' }} />

      <Menu />

      <main className="bg-bg text-ink">
        <section className="flex flex-col md:flex-row min-h-screen border-b border-border">
          <div className="flex flex-col justify-end flex-1 px-8 md:px-16 pb-16 pt-32 gap-6">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Producto
            </span>

            <h1 className="text-4xl md:text-[2.8rem] font-bold leading-[1.1] tracking-tight text-ink max-w-lg">
              Tu negocio necesita una web que genere clientes.
            </h1>

            <p className="text-ink/50 max-w-md text-[0.95rem] leading-relaxed">
              Web Business es una presencia digital profesional, diseñada para
              transmitir confianza y convertir visitas en consultas reales.
            </p>

            <div className="flex gap-3 flex-wrap pt-2">
              <Button
                href={waLink('Hola Agustín, quiero mi Web Business')}
                external
                trackEvent="whatsapp_click"
                trackMetadata={{ source: 'web_business' }}
              >
                Quiero mi Web Business
              </Button>
            </div>
          </div>

          <div className="relative flex-1 min-h-[340px] md:min-h-screen">
            <Image
              src={sitio}
              alt="Ejemplo de sitio web Web Business"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-transparent" />
          </div>
        </section>

        <section className="py-24 px-6 border-b border-border">
          <div className="mx-auto max-w-lg">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              El paquete
            </span>
            <h2 className="mt-3 mb-10 text-2xl md:text-[1.8rem] font-bold tracking-tight text-ink">
              Qué incluye Web Business
            </h2>

            <ProductCard product={webBusiness} />
          </div>
        </section>

        <section className="py-24 px-6 border-b border-border">
          <div className="mx-auto max-w-3xl">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              FAQ
            </span>
            <h2 className="mt-3 mb-8 text-2xl md:text-[1.8rem] font-bold tracking-tight text-ink">
              Preguntas frecuentes
            </h2>
            <FAQAccordion items={faq} />
          </div>
        </section>

        <CTASection
          title="¿Listo para tener tu Web Business?"
          subtitle="Contanos sobre tu negocio y te enviamos una propuesta con alcance y tiempos definidos."
          primaryCta={{
            href: '/contactos?producto=web-business',
            label: 'Quiero mi Web Business',
            trackEvent: 'cta_click',
            trackMetadata: { cta: 'web_business', location: 'product_page_cta' },
          }}
          secondaryCta={{
            href: waLink('Hola Agustín, quiero mi Web Business'),
            label: 'Hablar por WhatsApp',
            external: true,
            trackEvent: 'whatsapp_click',
            trackMetadata: { source: 'web_business' },
          }}
        />
      </main>

      <Footer />
    </>
  )
}
