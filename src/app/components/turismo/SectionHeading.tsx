interface SectionHeadingProps {
  kicker: string
  title: React.ReactNode
  subtitle?: string
  align?: "left" | "center"
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {kicker}
      </span>
      <h2 className="max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-ink/60 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
