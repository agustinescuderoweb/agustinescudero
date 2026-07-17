import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Kanit } from 'next/font/google'
import type { Metadata } from 'next'

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
  title: "Diseño Web para Emprendedores | Agustín Escudero",
  description:
    "Desarrollo de páginas web, landing pages y tiendas online optimizadas para generar clientes.",

  openGraph: {
    title: "Agustín Escudero | Desarrollo Web",
    description:
      "Creamos sitios web rápidos y optimizados para Google.",
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

      <body
        className={`${kanit.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

