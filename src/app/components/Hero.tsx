import Button from "./Button"
import { waLink } from "@/lib/site"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-40 pb-28 px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(163,230,53,0.14),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-ink/70 backdrop-blur-sm">
          Desarrollo web profesional en Mendoza
        </span>

        <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-ink md:text-6xl">
          Diseño profesional
          <br />
          Tecnología real
          <br />
          Resultados medibles
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-ink/60 md:text-xl">
          Creamos sitios web y tiendas online profesionales pensadas para
          generar confianza, conseguir clientes y vender.
        </p>

        <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
          Proceso claro, precio transparente y acompañamiento real.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href="#productos" showArrow>
            Ver soluciones
          </Button>
          <Button
            href={waLink("Hola Agustín, quiero información sobre mi web")}
            external
            variant="outline"
          >
            Hablar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
