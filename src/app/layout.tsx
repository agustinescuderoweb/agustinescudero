import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Kanit } from 'next/font/google'


const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'], // puedes agregar otros pesos si quieres
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
  title: "Desarrollador Web en Mendoza | Agustín Escudero",
  description: "Sitios web, landing pages y tiendas online profesionales en Mendoza. Ayudo a emprendedores y marcas personales a crear su presencia digital.",
  keywords: [
    "desarrollador web Mendoza",
    "diseño web Mendoza",
    "páginas web Mendoza",
    "freelance web Argentina",
    "tienda online para emprendedores",
    "sitios web marcas personales",
  ],
  openGraph: {
    title: "Agustín Escudero | Desarrollador Web en Mendoza",
    description: "Landing pages, ecommerce y sitios web profesionales en Mendoza.",
    url: "https://www.agustinescuderoweb.com",
    siteName: "Agustín Escudero Web",
    images: [
      {
        url: "https://www.agustinescuderoweb.com/logoopen.png", // reemplazá con una imagen real
        width: 1200,
        height: 630,
        alt: "Agustín Escudero desarrollador web en Mendoza"
      }
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Escudero Web",
    description: "Sitios web y tiendas online para emprendedores de Mendoza.",
    creator: "@tuusuario", // opcional
    images: ["https://www.agustinescuderoweb.com/logoopen.png"],
  },
  icons: {
    icon: '/logo.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={kanit.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
