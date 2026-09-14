const API_URL = "http://127.0.0.1:8000";

function getSessionId(): string {
  let sessionId = sessionStorage.getItem("wi_session_id");

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem("wi_session_id", sessionId);
  }

  return sessionId;
}

export async function trackEvent(
  eventType: string,
  metadata: Record<string, unknown> = {}
) {
  try {
    const sessionId = getSessionId();

    await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: sessionId,
        event_type: eventType,
        page: window.location.pathname,
        metadata,
      }),
    });
  } catch (error) {
    console.error("Web Intelligence error:", error);
  }
}