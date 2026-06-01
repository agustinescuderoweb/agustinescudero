import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Kanit } from 'next/font/google'

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