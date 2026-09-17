import {
  Monitor,
  ShoppingCart,
  ShieldCheck,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react"

/** Registro de iconos por nombre. Los datos (products.ts, care.ts, etc.)
 * guardan el nombre como string en vez de la referencia al componente,
 * para que sigan siendo serializables al pasar de Server a Client
 * Components. Agregar acá cualquier icono nuevo que se use en data/. */
export const icons = {
  Monitor,
  ShoppingCart,
  ShieldCheck,
  ShoppingBag,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof icons
