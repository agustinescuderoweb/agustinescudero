import { ArrowDown, Check } from "lucide-react"
import Button from "../Button"
import SectionHeading from "./SectionHeading"
import { plans, type Plan } from "@/data/turismo"

function Flow({ steps, highlight }: { steps: string[]; highlight: boolean }) {
  return (
    <ol className="flex flex-col items-start" aria-label="Recorrido del cliente">
      {steps.map((step, i) => {
        const last = i === steps.length - 1
        return (
          <li key={step} className="flex flex-col items-start">
            <span
              className={`rounded-lg border px-4 py-2 text-sm font-medium ${
                last
                  ? "border-accent bg-accent text-bg"
                  : highlight && i >= 3
                    ? "border-accent/40 bg-accent/10 text-ink"
                    : "border-border bg-white/[0.03] text-ink/80"
              }`}
            >
              {step}
            </span>
            {!last && (
              <ArrowDown size={16} className="my-1.5 ml-4 text-accent/60" aria-hidden />
            )}
          </li>
        )
      })}
    </ol>
  )
}

function PlanBlock({ plan }: { plan: Plan }) {
  const featured = plan.id === "online"
  return (
    <article
      className={`flex flex-col gap-8 rounded-3xl border p-7 md:p-10 ${
        featured
          ? "border-accent/30 bg-gradient-to-b from-accent/[0.07] to-surface"
          : "border-border bg-surface"
      }`}
    >
      <header className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {plan.kicker}
        </span>
        <h3 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {plan.title}
        </h3>
        <p className="text-sm text-ink/40">Ideal para:</p>
        <p className="-mt-2 text-lg leading-snug text-ink/80">
          “{plan.idealFor}”
        </p>
      </header>

      <Flow steps={plan.flow} highlight={featured} />

      <ul className="flex flex-col gap-3">
        {plan.benefits.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-ink/70">
            <Check size={16} className="mt-0.5 shrink-0 text-accent" />
            {b}
          </li>
        ))}
      </ul>

      {/* TODO: cuando haya precio, completar `price` en src/data/turismo.ts */}
      {plan.price && <p className="text-2xl font-bold text-ink">{plan.price}</p>}
      {plan.note && <p className="text-xs text-ink/40">{plan.note}</p>}

      <div className="mt-auto flex flex-col gap-3">
        <Button
          href={plan.ctaHref}
          external
          showArrow
          variant={featured ? "primary" : "outline"}
          className="min-h-12 w-full"
          trackEvent="whatsapp_click"
          trackMetadata={{ source: `turismo_plan_${plan.id}` }}
        >
          {plan.cta}
        </Button>
        <Button
          href={plan.contactHref}
          variant="ghost"
          className="w-full"
          trackEvent="cta_click"
          trackMetadata={{ cta: `turismo_${plan.id}`, location: "turismo_plans" }}
        >
          Prefiero el formulario
        </Button>
      </div>
    </article>
  )
}

export default function TourismSolutions() {
  return (
    <section
      id="soluciones"
      className="scroll-mt-28 border-t border-border bg-bg px-6 py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:gap-16">
        <SectionHeading
          kicker="Dos formas de vender"
          title="Elegí cómo querés recibir tus reservas"
          subtitle="Podés empezar por una web con WhatsApp y evolucionar a reservas online cuando tu negocio lo necesite."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <PlanBlock key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
