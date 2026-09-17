"use client"

import { useState } from "react"
import PortfolioCard from "./PortfolioCard"
import { useTrackOnVisible } from "@/lib/useTrackOnVisible"
import { proyectos, type ProyectoTipo } from "@/data/proyectos"

const filters: { label: string; value: ProyectoTipo | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Web", value: "web" },
  { label: "Ecommerce", value: "ecommerce" },
  { label: "Desarrollo personalizado", value: "personalizado" },
]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<ProyectoTipo | "todos">("todos")
  const ref = useTrackOnVisible<HTMLDivElement>("portfolio_view", {})

  const filtered =
    filter === "todos"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.tipo === filter)

  return (
    <div ref={ref}>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
              filter === item.value
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-white/10 text-ink/50 hover:border-white/20 hover:text-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((proyecto) => (
          <PortfolioCard key={proyecto.titulo} proyecto={proyecto} />
        ))}
      </div>
    </div>
  )
}
