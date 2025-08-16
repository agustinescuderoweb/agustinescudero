import React from 'react'
import Head from 'next/head'
import Menu from './componetes/inicio/menu'
import Header from './componetes/inicio/header'
import Footer from './componetes/inicio/footer'
import JsonLd from './componetes/seo/JsonLd'
import ChatWidget from './componetes/chat/ChatWidget'
import Chatn8n from '../app/componetes/chat/Chatn8n'


function Page() {
  return (
    <>
      <Head>
        <title>Agustín Escudero | Desarrollo Web en Mendoza</title>
        <meta name="description" content="Páginas web, tiendas online y landing pages para emprendedores en Mendoza. Soluciones digitales a medida." />
        <meta name="keywords" content="desarrollador web, Mendoza, páginas web, ecommerce, diseño web, landing page" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Agustín Escudero | Desarrollo Web en Mendoza" />
        <meta property="og:description" content="Creamos tu sitio web profesional o tienda online desde Mendoza para todo el país." />
        <meta property="og:image" content="https://www.agustinescuderoweb.com/logoopen.png" />
        <meta property="og:url" content="https://www.agustinescuderoweb.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <JsonLd />
      <Menu />
      <Header />
      <Chatn8n webhookUrl="https://n8n-oz3s.onrender.com/chat/MgQWhqPySE5bfqwb" />
      <Footer />
    </>
  )
}

export default Page
