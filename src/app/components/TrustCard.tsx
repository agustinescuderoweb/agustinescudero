import type { LucideIcon } from "lucide-react"

interface TrustCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function TrustCard({ icon: Icon, title, description }: TrustCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
        <Icon size={18} className="text-accent" />
      </div>
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink/50">{description}</p>
    </div>
  )
}
