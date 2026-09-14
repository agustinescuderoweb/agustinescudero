export function getSessionId() {
  if (typeof window === "undefined") return null;

  let sessionId = localStorage.getItem("wi_session_id");

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem("wi_session_id", sessionId);
  }

  return sessionId;
}

export async function trackEvent(
  eventType: string,
  page: string,
  metadata: Record<string, unknown> = {}
) {
  const sessionId = getSessionId();

  if (!sessionId) return;

  try {
    await fetch("http://127.0.0.1:8000/events", {
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
    });
  } catch (error) {
    console.error("Web Intelligence tracking error:", error);
  }
}