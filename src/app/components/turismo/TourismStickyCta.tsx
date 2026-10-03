import Button from "../Button"

/** Barra fija solo en móvil: mantiene "Solicitar propuesta" siempre al alcance del pulgar. */
export default function TourismStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/90 px-4 py-3 backdrop-blur md:hidden">
      <Button
        href="/contactos"
        className="min-h-12 w-full"
        trackEvent="cta_click"
        trackMetadata={{ cta: "solicitar_propuesta", location: "turismo_sticky" }}
      >
        Solicitar propuesta
      </Button>
    </div>
  )
}
