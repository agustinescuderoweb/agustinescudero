import { Check } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { problems } from "@/data/turismo"

export default function TourismProblems() {
  return (
    <section className="border-t border-border bg-bg px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeading
          kicker="El problema"
          title="Instagram atrae personas. Tu web debería convertirlas en clientes"
        />

        <div className="flex flex-col">
          <ul className="flex flex-col">
            {problems.map((problem) => (
              <li
                key={problem}
                className="flex items-start gap-4 border-b border-border py-4 text-base text-ink/70"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {problem}
              </li>
            ))}
          </ul>
          <p className="mt-8 flex items-start gap-3 text-lg font-semibold leading-snug text-ink">
            <Check size={20} className="mt-1 shrink-0 text-accent" />
            Una web bien diseñada organiza el recorrido desde el interés hasta
            la reserva
          </p>
        </div>
      </div>
    </section>
  )
}
