import { Check, Minus } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { comparison } from "@/data/turismo"

function Mark({ on, label }: { on: boolean; label: string }) {
  return on ? (
    <Check size={18} className="mx-auto text-accent" aria-label={`${label}: incluido`} />
  ) : (
    <Minus size={18} className="mx-auto text-ink/20" aria-label={`${label}: no incluido`} />
  )
}

const cols = "grid-cols-[1fr_76px_76px] sm:grid-cols-[1fr_160px_160px]"

export default function ReservationComparison() {
  return (
    <section className="border-t border-border bg-bg px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <SectionHeading kicker="Comparación" title="Qué incluye cada opción" />

        <div
          role="table"
          aria-label="Comparación entre Web + WhatsApp y Reservas online"
          className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div
            role="row"
            className={`grid ${cols} items-end gap-2 border-b border-border bg-white/[0.02] px-4 py-4 text-[11px] font-semibold uppercase tracking-wider text-ink/60 sm:px-6 sm:text-xs`}
          >
            <span role="columnheader" className="sr-only sm:not-sr-only">
              Característica
            </span>
            <span role="columnheader" className="text-center leading-tight">
              Web + WhatsApp
            </span>
            <span role="columnheader" className="text-center leading-tight text-accent">
              Reservas online
            </span>
          </div>
          {comparison.map((row) => (
            <div
              key={row.feature}
              role="row"
              className={`grid ${cols} items-center gap-2 border-b border-border px-4 py-3.5 last:border-b-0 sm:px-6`}
            >
              <span role="cell" className="text-sm text-ink/80">
                {row.feature}
              </span>
              <span role="cell">
                <Mark on={row.whatsapp} label={row.feature} />
              </span>
              <span role="cell" className="rounded-md bg-accent/[0.04] py-1">
                <Mark on={row.online} label={row.feature} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
