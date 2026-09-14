"use client";

import { useEffect, useMemo, useState } from "react";

type Lead = {
  session_id: string;
  score: number;
  status: "cold" | "warm" | "hot" | string;
  last_event?: string | null;
  last_page?: string | null;
  updated_at?: string | null;
};

type LeadsResponse = {
  total: number;
  leads: Lead[];
};

export default function IntelligencePage() {
  const [data, setData] = useState<LeadsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadLeads() {
      try {
        setLoading(true);

        const response = await fetch("http://127.0.0.1:8000/leads", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("No se pudieron cargar los leads");
        }

        const result: LeadsResponse = await response.json();

        setData(result);
      } catch (err) {
        console.error(err);
        setError("Error al conectar con Web Intelligence API");
      } finally {
        setLoading(false);
      }
    }

    loadLeads();
  }, []);

  const stats = useMemo(() => {
    const leads = data?.leads ?? [];

    return {
      visitors: leads.length,
      warm: leads.filter((lead) => lead.status === "warm").length,
      hot: leads.filter((lead) => lead.status === "hot").length,
    };
  }, [data]);

  function getStatusLabel(status: string) {
    if (status === "hot") return "🔥 Hot";
    if (status === "warm") return "🟡 Warm";
    return "⚪ Cold";
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

          <h1 className="text-4xl font-bold">
            Clientes potenciales
          </h1>

          <p className="mt-3 text-zinc-400">
            Visitantes ordenados según su intención comercial.
          </p>
        </div>

        <section className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Visitantes</p>

            <p className="mt-3 text-4xl font-bold">
              {stats.visitors}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Interesados</p>

            <p className="mt-3 text-4xl font-bold">
              {stats.warm}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Hot Leads</p>

            <p className="mt-3 text-4xl font-bold">
              {stats.hot}
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <div className="border-b border-zinc-800 p-6">
            <h2 className="text-xl font-semibold">
              Actividad de visitantes
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-zinc-950/60 text-sm text-zinc-400">
                <tr>
                  <th className="px-6 py-4">Sesión</th>
                  <th className="px-6 py-4">Score</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4">Último evento</th>
                  <th className="px-6 py-4">Última página</th>
                </tr>
              </thead>

              <tbody>
                {data?.leads.map((lead) => (
                  <tr
                    key={lead.session_id}
                    className="border-t border-zinc-800"
                  >
                    <td className="max-w-[220px] truncate px-6 py-5 font-mono text-sm">
                      {lead.session_id}
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-lg font-bold">
                        {lead.score}
                      </span>
                      <span className="text-zinc-500"> / 100</span>
                    </td>

                    <td className="px-6 py-5">
                      {getStatusLabel(lead.status)}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {lead.last_event || "-"}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {lead.last_page || "-"}
                    </td>
                  </tr>
                ))}

                {data?.leads.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
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