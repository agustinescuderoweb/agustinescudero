import Button from "../Button"
import { turismoWa } from "@/data/turismo"

export default function TourismCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-bg px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(47,155,255,0.12),transparent)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-5xl">
          Tu negocio ya genera experiencias.
          <br />
          Hagamos que tu web también genere reservas
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Button
            href="/contactos"
            showArrow
            className="min-h-12 w-full sm:w-auto"
            trackEvent="cta_click"
            trackMetadata={{ cta: "solicitar_propuesta", location: "turismo_final_cta" }}
          >
            Solicitar propuesta
          </Button>
          <Button
            href={turismoWa.general}
            external
            variant="outline"
            className="min-h-12 w-full sm:w-auto"
            trackEvent="whatsapp_click"
            trackMetadata={{ source: "turismo_final_cta" }}
          >
            Hablar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
