import { Check } from "lucide-react"
import Button from "./Button"
import type { CarePlan } from "@/data/care"

export default function CareCard({ plan }: { plan: CarePlan }) {
  const Icon = plan.icon

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/30">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
        <Icon size={20} className="text-accent" />
      </div>

      <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
      <p className="mt-2 text-sm text-ink/50">{plan.description}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm text-ink/65"
          >
            <Check size={14} className="shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <Button href={plan.ctaHref} external variant="outline" className="mt-6">
        {plan.ctaLabel}
      </Button>
    </div>
  )
}
