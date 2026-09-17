"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { trackEvent } from "@/lib/web-intelligence"

export default function WebIntelligenceTracker() {
  const pathname = usePathname()
  const lastTrackedPath = useRef<string | null>(null)

  useEffect(() => {
    if (!pathname) return
    if (lastTrackedPath.current === pathname) return

    lastTrackedPath.current = pathname

    trackEvent("page_view", {
      device: window.innerWidth < 768 ? "mobile" : "desktop",
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      referrer: document.referrer,
    })
  }, [pathname])

  return null
}
