const API_URL =
  process.env.NEXT_PUBLIC_WEB_INTELLIGENCE_API_URL || "http://127.0.0.1:8000"

function getSessionId(): string {
  let sessionId = sessionStorage.getItem("wi_session_id")

  if (!sessionId) {
    sessionId = crypto.randomUUID()
    sessionStorage.setItem("wi_session_id", sessionId)
  }

  return sessionId
}

// Evita re-disparar el mismo evento (mismo tipo + misma página) en el
// mismo tick de render — cubre el doble-render de React StrictMode en
// desarrollo y renders duplicados accidentales.
const recentlySent = new Set<string>()

export async function trackEvent(
  eventType: string,
  metadata: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return

  const page = window.location.pathname
  const dedupeKey = `${eventType}:${page}`

  if (recentlySent.has(dedupeKey)) return
  recentlySent.add(dedupeKey)
  setTimeout(() => recentlySent.delete(dedupeKey), 1000)

  try {
    const sessionId = getSessionId()

    await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: sessionId,
        event_type: eventType,
        page,
        metadata,
      }),
    })
  } catch (error) {
    console.error("Web Intelligence error:", error)
  }
}
