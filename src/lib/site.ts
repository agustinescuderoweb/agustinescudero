export const WHATSAPP_NUMBER = "5492612388045"
export const SITE_URL = "https://www.agustinescuderoweb.com"

export function waLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
