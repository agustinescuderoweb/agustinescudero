"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/web-intelligence"

/** Dispara un evento una vez al montar — para usar dentro de Server
 * Components (páginas) que necesitan trackear algo puntual (ej.
 * product_view) sin convertirse enteras en Client Component. */
export default function TrackPageView({
  event,
  metadata,
}: {
  event: string
  metadata?: Record<string, unknown>
}) {
  useEffect(() => {
    trackEvent(event, metadata)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
