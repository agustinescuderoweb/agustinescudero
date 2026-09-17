"use client";

import { useEffect, useMemo, useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_WEB_INTELLIGENCE_API_URL || "http://127.0.0.1:8000";

type Session = {
  session_id: string;
  total_score: number;
  status: "cold" | "warm" | "hot" | string;
  intent: "low_intent" | "medium_intent" | "high_intent" | string;
  primary_interest?: string | null;
  conversion: boolean;
  conversion_type?: string | null;
  last_event?: string | null;
  last_page?: string | null;
  last_activity?: string | null;
};

type SessionsResponse = {
  total: number;
  sessions: Session[];
};

function getStatusLabel(status: string) {
  if (status === "hot") return "🔥 Hot";
  if (status === "warm") return "🟡 Warm";
  return "⚪ Cold";
}

function timeAgo(iso?: string | null) {
  if (!iso) return "-";
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return "hace instantes";
  if (minutes < 60) return `hace ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `hace ${hours} h`;
  return `hace ${Math.floor(hours / 24)} d`;
}

export default function IntelligencePage() {
  const [apiKey, setApiKey] = useState("");
  const [submittedKey, setSubmittedKey] = useState<string | null>(null);
  const [data, setData] = useState<SessionsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (submittedKey === null) return;

    async function loadSessions() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/sessions?limit=100`, {
          cache: "no-store",
          headers: submittedKey ? { "X-Admin-Key": submittedKey } : {},
        });

        if (response.status === 401) {
          throw new Error("Clave incorrecta");
        }

        if (!response.ok) {
          throw new Error("No se pudieron cargar las sesiones");
        }

        const result: SessionsResponse = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError(
          err instanceof Error ? err.message : "Error al conectar con la API"
        );
      } finally {
        setLoading(false);
      }
    }

    loadSessions();
  }, [submittedKey]);

  const stats = useMemo(() => {
    const sessions = data?.sessions ?? [];

    return {
      visitors: sessions.length,
      warm: sessions.filter((s) => s.status === "warm").length,
      hot: sessions.filter((s) => s.status === "hot").length,
    };
  }, [data]);

  if (submittedKey === null) {
    return (
      <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-8 text-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmittedKey(apiKey);
          }}
          className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Web Intelligence
          </p>
          <h1 className="mb-6 text-2xl font-bold">Acceso administrador</h1>

          <label className="mb-2 block text-sm text-zinc-400">
            Clave de administrador
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white outline-none focus:border-lime-400"
            autoFocus
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-lime-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-lime-300"
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 p-8 text-white">
        <p>Cargando Web Intelligence...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-950 p-8 text-white">
        <p className="text-red-400">{error}</p>
        <button
          onClick={() => setSubmittedKey(null)}
          className="mt-4 text-sm text-zinc-400 underline"
        >
          Volver a intentar
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Web Intelligence
          </p>

          <h1 className="text-4xl font-bold">Clientes potenciales</h1>

          <p className="mt-3 text-zinc-400">
            Visitantes ordenados según su intención comercial.
          </p>
        </div>

        <section className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Visitantes</p>
            <p className="mt-3 text-4xl font-bold">{stats.visitors}</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Warm</p>
            <p className="mt-3 text-4xl font-bold">{stats.warm}</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Hot Leads</p>
            <p className="mt-3 text-4xl font-bold">{stats.hot}</p>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <div className="border-b border-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Actividad de visitantes</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-zinc-950/60 text-sm text-zinc-400">
                <tr>
                  <th className="px-6 py-4">Sesión</th>
                  <th className="px-6 py-4">Score</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4">Intención</th>
                  <th className="px-6 py-4">Interés</th>
                  <th className="px-6 py-4">Conversión</th>
                  <th className="px-6 py-4">Última actividad</th>
                </tr>
              </thead>

              <tbody>
                {data?.sessions.map((session) => (
                  <tr
                    key={session.session_id}
                    className="border-t border-zinc-800"
                  >
                    <td className="max-w-[180px] truncate px-6 py-5 font-mono text-sm">
                      {session.session_id}
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-lg font-bold">
                        {session.total_score}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      {getStatusLabel(session.status)}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {session.intent}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {session.primary_interest || "-"}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {session.conversion
                        ? `✅ ${session.conversion_type}`
                        : "-"}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {timeAgo(session.last_activity)}
                    </td>
                  </tr>
                ))}

                {data?.sessions.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-zinc-500"
                    >
                      Todavía no hay sesiones registradas.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
