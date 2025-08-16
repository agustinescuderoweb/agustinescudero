import React from "react";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Agustín Escudero Web",
    "image": "https://agustinescuderoweb.com/logo.png",
    "description": "Desarrollador web profesional en Mendoza, especializado en sitios web, landing pages y ecommerce para emprendedores y negocios.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mendoza",
      "addressRegion": "Mendoza",
      "addressCountry": "AR"
    },
    "telephone": "+54 9 261 12388045",
    "url": "https://agustinescuderoweb.com",
    "sameAs": [
      "https://www.instagram.com/agustinescuderoweb/",
      "https://www.youtube.com/@agustinescuderoweb",
      "https://wa.link/elp2e3"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      key="jsonld-schema"
    />
  );
}
