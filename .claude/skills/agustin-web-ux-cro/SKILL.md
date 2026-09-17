---
name: agustin-web-ux-cro
description: Design system, copywriting rules and conversion (CRO) conventions for agustinescuderoweb.com. Use whenever creating or editing pages/components on this site — home, /servicios, /portafolio, /contactos, nuevas secciones, cards, CTAs, formularios — so new work stays consistent with the existing dark/lime SaaS-style design and commercial positioning instead of drifting back into a generic "portfolio de freelancer" look.
---

# Agustín Escudero Web — UX, diseño y CRO

Este sitio se rediseñó para dejar de verse como un portfolio de freelancer y
pasar a venderse como una empresa/producto digital: productos empaquetados
(Web Business, Ecommerce Business), precio visible, proceso claro, señales de
confianza y CTAs consistentes. Todo lo nuevo debe sostener esa dirección.

## Posicionamiento (no romper esto)

- El sitio vende **productos empaquetados**, no "servicios de desarrollo web"
  genéricos. Todo copy nuevo debe hablar en términos de qué recibe el
  cliente (alcance, precio, entrega), no de tecnologías o procesos internos.
- Tono: confianza, claridad, orden, profesionalismo, tecnología. Nunca tono
  de agencia genérica ni exagerado/hypey. Sin emojis como iconos (usar
  `lucide-react`).
- Precio siempre visible cuando exista ("Desde US$X"), nunca "a consultar"
  para los productos empaquetados (Web Business / Ecommerce Business). Los
  planes de mantenimiento (Care) sí van sin precio hasta que se definan
  costos — no inventar un precio para ellos.

## Design tokens (usar siempre, no hardcodear hex)

Definidos en `src/app/globals.css` vía `@theme` (Tailwind v4):

```css
--color-bg: #0a0a0a       /* bg-bg */
--color-surface: #111111  /* bg-surface — cards */
--color-ink: #f0ede8      /* text-ink, text-ink/60, text-ink/40... */
--color-accent: #a3e635   /* bg-accent, text-accent, border-accent */
--color-accent-hover: #bef264
--color-border: rgba(255,255,255,0.08) /* border-border — hairlines */
```

Antes de este rediseño había 3 verdes distintos en el sitio (`#a3e635`,
`#32cd32`, `rgb(50,205,50)`). Si aparece un hex nuevo para "verde/acento" en
código viejo que se toque, migrarlo a `text-accent`/`bg-accent`/`border-accent`.

## Patrón de card (repetir, no reinventar)

```
bg-surface border border-border rounded-2xl p-6..p-10
hover:border-accent/30 hover:-translate-y-1
```

Kicker de sección: `text-xs font-semibold uppercase tracking-[0.18em] text-accent`.

## Componentes reutilizables existentes

Antes de crear un componente nuevo, revisar `src/app/components/`:
`Hero`, `Button` (variants: primary/outline/ghost), `ProductCard`,
`ProcessStep`, `TrustCard`, `PortfolioCard`, `PortfolioGrid`, `CareCard`,
`FAQAccordion`, `CTASection`, `ContactForm`. Todos en Tailwind puro (sin CSS
Modules nuevos), reciben props tipadas y consumen datos de `src/data/`
(`products.ts`, `proceso.ts`, `confianza.ts`, `care.ts`, `faq.ts`,
`proyectos.ts`). Si el contenido es una lista repetible, va en `src/data/`,
no hardcodeado en el JSX de la página.

`Button` centraliza el CTA lima (`variant="primary"`, default) y el outline
(`variant="outline"`). No recrear el botón a mano con clases sueltas.

`src/lib/site.ts` tiene `WHATSAPP_NUMBER` y `waLink(texto)` — todo link de
WhatsApp nuevo debe usar `waLink(...)` con un mensaje prellenado específico
del contexto (no linkear a WhatsApp sin texto, y no hardcodear el número).

## Convenciones de carpeta (histórico, no "arreglar" sin que lo pidan)

El proyecto tiene un typo histórico: la carpeta real es `src/app/componetes/`
(sin la segunda "n"), no `componentes`. Los imports que usan el alias
`@/componentes/...` están rotos (no existen) — si aparece uno, es código
muerto candidato a borrar, no a arreglar la ruta, salvo que el componente
esté realmente en uso en algún lado.

## Reglas de CRO aplicadas (mantenerlas en toda sección nueva)

1. **Precio + qué incluye + tiempo de entrega juntos** en cada producto —
   nunca separar precio de la lista de features.
2. **Aclaración de precios** (hosting/dominio no incluidos, dominio a nombre
   del cliente) siempre visible cerca de los precios, no escondida en el FAQ.
3. **Proceso de 5 pasos** (Contanos tu proyecto → Propuesta → Inicio 50% →
   Desarrollo → Publicación) es el modelo de venta del negocio — no cambiar
   el orden ni la lógica de pago (50% inicio / 50% antes de publicar) sin que
   el usuario lo pida explícitamente.
4. **Garantía**: 30 días, solo errores técnicos del desarrollo original.
   Nunca prometer resultados comerciales ni cantidad de clientes en ningún
   copy nuevo (es una regla explícita del usuario).
5. Cada sección de producto o CTA relevante debe tener un CTA de WhatsApp
   con `waLink(...)` Y un CTA que lleve a `/contactos` (idealmente con
   `?producto=web-business` o `?producto=ecommerce-business` para
   preseleccionar el dropdown del formulario).
6. Un solo H1 por página, jerarquía H2 por sección, `metadata` de App Router
   (nunca `next/head`, es el patrón legacy que se está migrando).

## SEO / metadata

Usar siempre `export const metadata: Metadata` (App Router), nunca el
componente `<Head>` de `next/head`. Si la página es un producto/servicio,
agregar JSON-LD `Service` (ver `src/app/servicios/web-business/page.tsx`
como referencia). Rutas nuevas que reemplacen una vieja necesitan un
redirect 301 en `next.config.ts` (`redirects()`), no borrar y listo.

## Antes de tocar el Hero o el mensaje principal

El H1 del hero usa Kanit Bold en tamaño grande. **Evitar puntos (`.`) al
final de una frase que termina en una palabra con "l" minúscula** (ej.
"profesional.", "real.") — en ese peso/tamaño de fuente el punto queda
pegado a la "l" y se lee como una "L" mayúscula, ilegible. Si una frase corta
necesita puntuación de cierre, preferir separar en líneas con `<br />` sin
punto final, o usar un signo con más separación visual.

## Assets

Las imágenes de proyectos del portfolio están en `public/` (imports
estáticos en `src/data/proyectos.ts`). Si falta un asset para un proyecto
nuevo, buscar primero en las carpetas hermanas del usuario en
`Desktop/AgustinEscuderoW/` (sin "eb") y `Desktop/Ordenar/Datos/` antes de
pedirle que lo suba — históricamente los assets quedaron duplicados entre
esas carpetas.
