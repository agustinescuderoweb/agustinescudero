import type { LucideIcon } from "lucide-react"

interface ProcessStepProps {
  number: string
  icon: LucideIcon
  title: string
  description: string
  isLast?: boolean
}

export default function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-1 flex-col items-start gap-4 md:items-center md:text-center">
      {!isLast && (
        <div
          aria-hidden
          className="absolute left-6 top-14 h-[calc(100%-2rem)] w-px bg-border md:left-1/2 md:top-6 md:h-px md:w-full md:translate-x-1/2"
        />
      )}

      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-bg">
        <Icon size={20} className="text-accent" />
      </div>

      <div>
        <span className="text-xs font-semibold tracking-[0.15em] text-accent">
          {number}
        </span>
        <h3 className="mt-1 text-base font-semibold text-ink">{title}</h3>
        <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-ink/50">
          {description}
        </p>
      </div>
    </div>
  )
}
