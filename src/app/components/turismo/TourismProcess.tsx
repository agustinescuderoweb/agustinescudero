import SectionHeading from "./SectionHeading"
import { tourismProcess } from "@/data/turismo"

export default function TourismProcess() {
  return (
    <section className="border-t border-border bg-bg px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading kicker="Proceso" title="Cómo trabajamos" />
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {tourismProcess.map((step) => (
            <li key={step.number} className="flex flex-col gap-4 bg-bg p-7">
              <span className="text-4xl font-bold text-accent/80">
                {step.number}
              </span>
              <span className="text-lg font-semibold leading-snug text-ink">
                {step.title}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
