"use client"

import { Suspense, useRef, useState, type FormEvent } from "react"
import { useSearchParams } from "next/navigation"
import { trackEvent } from "@/lib/web-intelligence"

const PRODUCT_OPTIONS = [
  { value: "web-business", label: "Web Business" },
  { value: "ecommerce-business", label: "Ecommerce Business" },
  { value: "personalizado", label: "Desarrollo personalizado" },
  { value: "no-seguro", label: "Todavía no estoy seguro" },
]

interface ErrorResponse {
  errors?: { message: string }[]
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string
  name: string
  type: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-white/10 bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/50"
      />
    </div>
  )
}

function ContactFormInner() {
  const searchParams = useSearchParams()
  const preset = searchParams.get("producto") ?? ""
  const [producto, setProducto] = useState(
    PRODUCT_OPTIONS.some((option) => option.value === preset) ? preset : ""
  )
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const formStarted = useRef(false)

  const handleFormStart = () => {
    if (formStarted.current) return
    formStarted.current = true
    trackEvent("form_start", {})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    const form = e.currentTarget
    const data = new FormData(form)

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })

    if (!response.ok) {
      const result: ErrorResponse = await response.json()
      setMessage(
        result.errors?.map((error) => error.message).join(", ") ||
          "Ocurrió un error, intentá de nuevo."
      )
      setStatus("error")
      return
    }

    await trackEvent("form_submit", {
      source: "contact_form",
      name: data.get("name"),
      email: data.get("email"),
      whatsapp: data.get("whatsapp"),
      empresa: data.get("empresa"),
      producto: data.get("producto"),
      objetivo: data.get("objetivo"),
      tiene_web: data.get("tiene_web"),
    })

    setStatus("success")
    form.reset()
    setProducto("")
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-surface p-10 text-center">
        <p className="text-lg font-semibold text-ink">
          Recibimos tu mensaje
        </p>
        <p className="mt-2 text-sm text-ink/55">
          Te vamos a responder a la brevedad con una propuesta.
        </p>
      </div>
    )
  }

  return (
    <form
      action="https://formspree.io/f/xanwnwrv"
      method="POST"
      onSubmit={handleSubmit}
      onFocusCapture={handleFormStart}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-8 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="WhatsApp" name="whatsapp" type="tel" required />
        <Field label="Empresa" name="empresa" type="text" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="producto" className="text-sm font-medium text-ink/70">
          ¿Qué necesitás?
        </label>
        <select
          id="producto"
          name="producto"
          required
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          className="rounded-xl border border-white/10 bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/50"
        >
          <option value="" disabled>
            Seleccioná una opción
          </option>
          {PRODUCT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="objetivo" className="text-sm font-medium text-ink/70">
          ¿Cuál es el principal objetivo del proyecto?
        </label>
        <textarea
          id="objetivo"
          name="objetivo"
          required
          rows={4}
          placeholder="Contame sobre tu negocio y qué querés lograr..."
          className="resize-none rounded-xl border border-white/10 bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/50"
        />
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm font-medium text-ink/70">
          ¿Tenés actualmente una página web?
        </legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-ink/60">
            <input type="radio" name="tiene_web" value="si" className="accent-accent" />
            Sí
          </label>
          <label className="flex items-center gap-2 text-sm text-ink/60">
            <input type="radio" name="tiene_web" value="no" className="accent-accent" />
            No
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-[10px] bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? "Enviando..." : "Quiero recibir una propuesta"}
      </button>

      {status === "error" && message && (
        <p className="text-sm text-red-400">{message}</p>
      )}
    </form>
  )
}

export default function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormInner />
    </Suspense>
  )
}
