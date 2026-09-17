import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Kanit } from 'next/font/google'
import type { Metadata } from 'next'
import WebIntelligenceTracker from "./components/WebIntelligenceTracker";

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agustinescuderoweb.com"),
  title: "Sitios Web y Tiendas Online Profesionales | Agustín Escudero",
  description:
    "Creamos sitios web y tiendas online profesionales para negocios que quieren generar clientes y vender por internet. Proceso claro, precio transparente.",

  openGraph: {
    title: "Sitios Web y Tiendas Online Profesionales | Agustín Escudero",
    description:
      "Creamos sitios web y tiendas online profesionales para negocios que quieren generar clientes y vender por internet.",
    url: "https://www.agustinescuderoweb.com",
    siteName: "Agustín Escudero",
    images: [
      {
        url: "/logoopen.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-81Q9W2LL4J"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-81Q9W2LL4J', {
          page_path: window.location.pathname,
         });
        `}
      </Script>

      <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Agustín Escudero Web",
          url: "https://www.agustinescuderoweb.com",
          logo: "https://www.agustinescuderoweb.com/logo.png",
          description:
            "Desarrollo de sitios web y tiendas online profesionales para negocios que quieren generar clientes y vender por internet.",
          areaServed: "AR",
        })}
      </Script>

      <body
        className={`${kanit.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WebIntelligenceTracker />
        {children}
      </body>
    </html>
  );
}

