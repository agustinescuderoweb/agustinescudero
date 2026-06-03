import Link from 'next/link'

export default function BlogCTA() {
  return (
    <div className="
      mt-16
      rounded-2xl
      bg-[#111111]
      border border-white/[0.07]
      p-8 md:p-10
      relative overflow-hidden
    ">

      {/* Acento decorativo */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-lime-400 rounded-t-2xl" />

      <div className="max-w-xl">

        <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
          Potenciá tu negocio
        </span>

        <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-[#f0ede8] leading-tight">
          ¿Querés conseguir más clientes desde internet?
        </h3>

        <p className="mt-4 text-white/45 leading-relaxed text-[0.95rem]">
          Puedo ayudarte a crear una presencia online moderna,
          optimizada para Google y enfocada en generar resultados
          reales para tu negocio.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          <a
              href="https://wa.me/+5492612388045"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                bg-lime-400 text-black
                 px-6 py-3 rounded-[10px]
                text-sm font-semibold
                transition-all duration-200
                hover:bg-lime-300 hover:text-black
                hover:-translate-y-[2px]
                no-underline
               "
            >
               WhatsApp
            </a>      
          <Link
            href="/contacto"
            className="
              inline-flex items-center gap-2
              border border-white/[0.15] text-white/70
              px-6 py-3 rounded-[10px]
              text-sm font-medium
              transition-all duration-200
              hover:border-lime-400/30 hover:text-white hover:-translate-y-[2px]
              !no-underline
            "
          >
            Solicitar información
          </Link>

        </div>
      </div>
    </div>
  )
}
