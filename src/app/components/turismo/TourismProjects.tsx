import Image from "next/image"
import Button from "../Button"
import SectionHeading from "./SectionHeading"
import {
  isPending,
  tourismProjects,
  type TourismProject,
} from "@/data/tourismProjects"

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
        {label}
      </p>
      <p
        className={`text-sm leading-relaxed ${
          isPending(value)
            ? "rounded-md border border-dashed border-amber-400/40 px-2 py-1 text-amber-300/80"
            : "text-ink/60"
        }`}
      >
        {value}
      </p>
    </div>
  )
}

/**
 * Mockup de navegador. La captura nunca se recorta de costado:
 * - apaisada: se muestra completa con su proporción original.
 * - vertical/larga: viewport fijo con la captura a todo el ancho; al hacer
 *   hover se desplaza suavemente hacia abajo para ver más de la página.
 */
function BrowserMockup({ project }: { project: TourismProject }) {
  const { image, imageAlt, url } = project
  const tall = image.height / image.width > 1.1
  const host = url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : ""

  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] md:rounded-2xl">
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-surface px-3 py-2.5 md:px-4">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        {host && (
          <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 text-[11px] text-ink/40">
            {host}
          </span>
        )}
      </div>

      {tall ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 60vw, 840px"
            className="object-cover [object-position:top] transition-[object-position] duration-[4000ms] ease-in-out group-hover:[object-position:bottom]"
          />
        </div>
      ) : (
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 60vw, 840px"
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </div>
      )}
    </div>
  )
}

function ProjectRow({ project, index }: { project: TourismProject; index: number }) {
  const reversed = index % 2 === 1
  const showClient = project.client !== project.title

  return (
    <article
      className={`grid items-center gap-8 md:gap-8 lg:min-h-[60vh] lg:gap-10 ${
        reversed
          ? "md:grid-cols-[40%_1fr] lg:grid-cols-[40%_1fr]"
          : "md:grid-cols-[1fr_40%] lg:grid-cols-[1fr_40%]"
      }`}
    >
      <div className={`w-full min-w-0 ${reversed ? "md:order-2" : ""}`}>
        <BrowserMockup project={project} />
      </div>

      <div className={`flex min-w-0 flex-col gap-5 ${reversed ? "md:order-1" : ""}`}>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
            Proyecto {String(index + 1).padStart(2, "0")}
            <span className="mx-2 text-ink/20">·</span>
            <span className="text-accent">{project.category}</span>
          </span>
          <h3 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {project.title}
          </h3>
        </div>

        {showClient && <Field label="Cliente" value={project.client} />}
        <Field label="Descripción" value={project.description} />
        <Field label="Qué necesitaba resolver" value={project.problem} />
        <Field label="Solución desarrollada" value={project.solution} />

        {project.technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
            {project.technologies.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border px-3 py-1 text-xs text-ink/60"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="pt-1">
          {project.url ? (
            <Button
              href={project.url}
              external
              showArrow
              variant="outline"
              className="min-h-12 w-full sm:w-auto"
              trackEvent="cta_click"
              trackMetadata={{ cta: "ver_proyecto", project: project.title, location: "turismo_projects" }}
            >
              Ver proyecto
            </Button>
          ) : (
            <Button href="/portafolio" showArrow variant="outline" className="min-h-12 w-full sm:w-auto">
              Ver proyecto
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

export default function TourismProjects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-28 border-t border-border bg-bg px-6 py-20 md:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-20 md:gap-28">
        <SectionHeading
          kicker="Portafolio"
          title="Proyectos que ya están funcionando"
          subtitle="Algunos de los proyectos que desarrollé para empresas y emprendimientos."
        />
        {tourismProjects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
