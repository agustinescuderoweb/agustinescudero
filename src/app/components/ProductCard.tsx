"use client"

import { Check } from "lucide-react"
import Button from "./Button"
import { useTrackOnVisible } from "@/lib/useTrackOnVisible"
import { icons } from "@/lib/icons"
import type { Product } from "@/data/products"

export default function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.icon]
  const ref = useTrackOnVisible<HTMLDivElement>("pricing_view", {
    product: product.slug,
  })

  return (
    <div
      ref={ref}
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 md:p-10 ${
        product.featured
          ? "border-accent/30 bg-surface shadow-[0_0_0_1px_rgba(163,230,53,0.1),0_20px_60px_-20px_rgba(163,230,53,0.15)]"
          : "border-border bg-surface hover:border-white/15"
      }`}
    >
      {product.featured && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg">
          Más elegido
        </span>
      )}

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
        <Icon size={22} className="text-accent" />
      </div>

      <h3 className="text-2xl font-bold text-ink">{product.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/55">
        {product.description}
      </p>

      <div className="mt-6 text-3xl font-bold text-ink">{product.price}</div>
      <p className="mt-1 text-xs uppercase tracking-[0.1em] text-accent">
        {product.deliveryText}
      </p>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-ink/70"
          >
            <Check size={16} className="mt-0.5 shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={product.ctaHref}
        external
        showArrow
        className="mt-8 w-full"
        trackEvent="whatsapp_click"
        trackMetadata={{ source: product.slug }}
      >
        {product.ctaLabel}
      </Button>
    </div>
  )
}
