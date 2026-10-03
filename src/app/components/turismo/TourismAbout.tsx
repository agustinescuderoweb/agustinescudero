import Image from "next/image"
import SectionHeading from "./SectionHeading"
import { aboutTech } from "@/data/turismo"
import agustin from "../../../../public/agustin.jpg"

export default function TourismAbout() {
  return (
    <section className="border-t border-border bg-bg px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[280px_1fr] md:gap-16">
        <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-3xl border border-border md:w-full">
          <Image
            src={agustin}
            alt="Agustín Escudero, desarrollador web"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 192px, 280px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <SectionHeading kicker="Sobre mí" title="Soy Agustín Escudero, desarrollador web" />
          <p className="text-base leading-relaxed text-ink/60 md:text-lg">
            Creo soluciones digitales orientadas a ayudar a negocios a
            presentar, organizar y vender mejor sus servicios online.
          </p>
          <p className="text-xs text-ink/35">
            Trabajo con {aboutTech.join(" · ")}.
          </p>
        </div>
      </div>
    </section>
  )
}
