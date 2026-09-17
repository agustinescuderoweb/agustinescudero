"use client"

import { useEffect, useRef } from "react"
import { trackEvent } from "@/lib/web-intelligence"

/** Dispara un evento una sola vez cuando el elemento referenciado entra
 * en pantalla (ej. pricing_view al ver una card de producto, care_plan_view
 * al ver un plan de mantenimiento). */
export function useTrackOnVisible<T extends HTMLElement>(
  eventType: string,
  metadata: Record<string, unknown>
) {
  const ref = useRef<T | null>(null)
  const tracked = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || tracked.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true
          trackEvent(eventType, metadata)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
