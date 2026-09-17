import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Proyecto } from "@/data/proyectos"

const tipoLabel: Record<Proyecto["tipo"], string> = {
  web: "Web",
  ecommerce: "Ecommerce",
  personalizado: "Desarrollo personalizado",
}

export default function PortfolioCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <a
      href={proyecto.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 !no-underline"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={proyecto.img}
          alt={proyecto.titulo}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover brightness-[0.75] transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-accent/30 bg-bg/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-accent backdrop-blur-sm">
          {tipoLabel[proyecto.tipo]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-6">
        <span className="text-xs font-medium uppercase tracking-[0.1em] text-ink/40">
          {proyecto.categoria}
        </span>
        <h3 className="text-lg font-semibold text-ink">{proyecto.titulo}</h3>

        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          Ver proyecto
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </a>
  )
}
