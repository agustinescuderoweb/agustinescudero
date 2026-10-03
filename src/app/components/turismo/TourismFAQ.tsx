import FAQAccordion from "../FAQAccordion"
import SectionHeading from "./SectionHeading"
import { tourismFaq } from "@/data/turismo"

export default function TourismFAQ() {
  return (
    <section className="border-t border-border bg-bg px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading kicker="FAQ" title="Preguntas frecuentes" />
        <FAQAccordion items={tourismFaq} />
      </div>
    </section>
  )
}
