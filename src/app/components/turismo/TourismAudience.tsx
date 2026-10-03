import SectionHeading from "./SectionHeading"
import { audience } from "@/data/turismo"

export default function TourismAudience() {
  return (
    <section className="border-t border-border bg-bg px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          kicker="Para quién es"
          title="Para negocios que venden experiencias"
        />
        <ul className="grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {audience.map((item, i) => (
            <li
              key={item}
              className="group flex items-baseline gap-4 border-b border-border py-6 text-xl font-semibold text-ink/80 transition-colors hover:text-accent sm:px-4 md:text-2xl"
            >
              <span className="text-xs font-medium text-ink/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
