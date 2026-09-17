import Button from "./Button"

interface CTAAction {
  label: string
  href: string
  external?: boolean
  trackEvent?: string
  trackMetadata?: Record<string, unknown>
}

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryCta: CTAAction
  secondaryCta?: CTAAction
  note?: string
}

export default function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  note,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-bg px-6 py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(163,230,53,0.1),transparent)]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>

        {subtitle && (
          <p className="max-w-xl text-base leading-relaxed text-ink/55">
            {subtitle}
          </p>
        )}

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={primaryCta.href}
            external={primaryCta.external}
            showArrow
            trackEvent={primaryCta.trackEvent}
            trackMetadata={primaryCta.trackMetadata}
          >
            {primaryCta.label}
          </Button>

          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              external={secondaryCta.external}
              variant="outline"
              trackEvent={secondaryCta.trackEvent}
              trackMetadata={secondaryCta.trackMetadata}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>

        {note && <p className="mt-2 text-xs text-ink/35">{note}</p>}
      </div>
    </section>
  )
}
