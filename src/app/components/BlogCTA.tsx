import Link from "next/link";

export default function BlogCTA() {
  return (
    <div
      className="
        mt-20
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-10
      "
    >
      <div className="max-w-2xl">

        <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Potenciá tu negocio
        </span>

        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
          ¿Querés conseguir más clientes desde internet?
        </h3>

        <p className="mt-6 text-zinc-300 leading-8 text-lg">
          Puedo ayudarte a crear una presencia online moderna,
          optimizada para Google y enfocada en generar resultados
          reales para tu negocio.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">


          <Link
              href="/contacto"
              className="
                inline-flex
                items-center
                justify-center
                rounded-2xl
                px-6
                py-3
                font-medium
                text-black-200
                transition-all
                duration-300

                hover:bg-gray-200

                active:scale-[0.98]
              "
            >
              Solicitar información
            </Link>

          <a
            href="https://wa.me/TUNUMERO"
            target="_blank"
             className="
                 rounded-2xl
                 border
                 border-green-500/30
                 bg-green-500
                 px-6
                 py-3
                 font-medium
                 text-white
                 transition
                 hover:bg-green-400
                 hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]
               "
              >
            WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
}