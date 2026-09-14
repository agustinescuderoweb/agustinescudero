import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

type Variant = "primary" | "outline" | "ghost"

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  icon?: LucideIcon
  showArrow?: boolean
  external?: boolean
  className?: string
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
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold transition-all duration-200 !no-underline"

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
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
