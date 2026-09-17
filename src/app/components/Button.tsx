"use client"

import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { trackEvent as trackWebIntelligenceEvent } from "@/lib/web-intelligence"

type Variant = "primary" | "outline" | "ghost"

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  icon?: LucideIcon
  showArrow?: boolean
  external?: boolean
  className?: string
  /** Nombre del evento a trackear al hacer click (ej. "cta_click"). */
  trackEvent?: string
  /** Metadata del evento de tracking (ej. {cta: "web_business", location: "hero"}). */
  trackMetadata?: Record<string, unknown>
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-hover hover:-translate-y-0.5",
  outline:
    "border border-white/15 text-ink hover:border-accent/50 hover:bg-accent/5",
  ghost: "text-ink/70 hover:text-ink",
}

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  showArrow = false,
  external = false,
  className = "",
  trackEvent,
  trackMetadata,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold transition-all duration-200 !no-underline"

  const handleClick = trackEvent
    ? () => trackWebIntelligenceEvent(trackEvent, trackMetadata)
    : undefined

  const content = (
    <>
      {Icon && <Icon size={16} />}
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  )

  const classes = `${base} ${variantClasses[variant]} group ${className}`

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} onClick={handleClick} className={classes}>
      {content}
    </Link>
  )
}
