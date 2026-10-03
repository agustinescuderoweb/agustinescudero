import Image from "next/image"
import { CalendarDays, MessageCircle } from "lucide-react"
import Button from "../Button"
import { turismoWa } from "@/data/turismo"
import peni from "../../../../public/peni.jpg"

export default function TourismHero() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 pb-20 pt-12 md:pb-28 md:pt-20">
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(47,155,255,0.22)_0%,rgba(0,200,255,0.08)_35%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-ink/70">
            Desarrollo web para turismo
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Tu próxima reserva puede empezar{" "}
            <span className="text-accent">en tu web</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-ink/60 md:text-xl">
            Desarrollo sitios web para empresas de turismo, alojamientos y
            experiencias que quieren transformar visitas en consultas y
            reservas.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button
              href={turismoWa.general}
              external
              showArrow
              className="min-h-12 w-full sm:w-auto"
              trackEvent="whatsapp_click"
              trackMetadata={{ source: "turismo_hero" }}
            >
              Quiero mejorar mi web
            </Button>
            <Button
              href="#soluciones"
              variant="outline"
              className="min-h-12 w-full sm:w-auto"
              trackEvent="cta_click"
              trackMetadata={{ cta: "ver_soluciones", location: "turismo_hero" }}
            >
              Ver soluciones
            </Button>
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
            Agencias • Alojamientos • Excursiones • Experiencias
          </p>
        </div>

        {/* Mockup: una web de turismo funcionando */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-20px_rgba(47,155,255,0.25)]">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 truncate rounded-md bg-white/[0.04] px-3 py-1 text-[11px] text-ink/40">
                tu-negocio.com/excursiones
              </span>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={peni}
                alt="Experiencia de montaña mostrada en una web de turismo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">
                    Excursión de ejemplo
                  </p>
                  <p className="text-lg font-bold text-ink">Día de montaña</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-bg">
                  <MessageCircle size={14} /> Reservar
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-2 hidden items-center gap-3 rounded-xl border border-border bg-bg/90 px-4 py-3 backdrop-blur sm:flex md:-left-6">
            <CalendarDays size={18} className="text-accent" />
            <span className="text-xs text-ink/70">
              Fecha · Personas · Pago online
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
