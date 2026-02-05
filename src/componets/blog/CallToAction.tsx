import Link from "next/link"

export default function CallToAction() {
  return (
    <div className="my-16 rounded-2xl border border-gray-200 p-8 text-center">
      <h3 className="text-2xl font-semibold tracking-tight">
        ¿Querés una landing premium para tu negocio fitness?
      </h3>

      <p className="mt-3 text-gray-600 max-w-xl mx-auto">
        Te ayudo a convertir visitas en alumnos con una web rápida, moderna y
        optimizada para vender.
      </p>

      <Link
        href="/servicios/landing"
        className="inline-block mt-6 rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90 transition"
      >
        Pedir mi landing →
      </Link>
    </div>
  )
}
