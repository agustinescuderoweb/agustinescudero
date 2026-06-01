import { Geist, Geist_Mono } from "next/font/google";
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
  icons: {
    icon: '/logo.ico',        // favicon clásico
    shortcut: '/logo.ico',    // acceso directo
    apple: '/logo.png',       // icono para iPhone al guardar en pantalla inicio
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${kanit.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}