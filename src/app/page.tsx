import React from 'react'
import Head from 'next/head'
import Menu from './componetes/inicio/menu'
import Header from './componetes/inicio/header'
import Footer from './componetes/inicio/footer'
import Chatn8n from './componetes/chat/Chatn8n'
import Testimonios from './componetes/testimonios/Testimonios'


function Page() {
  return (
    <>
      <Head>
        <title>Diseño Web para Emprendedores en Mendoza | Agustín Escudero</title>
        <meta name="description" content="Diseño y desarrollo de páginas web, landing pages y tiendas online para emprendedores en Mendoza. Sitios rápidos, optimizados para Google y pensados para generar clientes." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Agustín Escudero | Desarrollo Web en Mendoza" />
        <meta property="og:description" content="Creamos tu sitio web profesional o tienda online desde Mendoza para todo el país." />
        <meta property="og:image" content="https://www.agustinescuderoweb.com/logoopen.png" />
        <meta property="og:url" content="https://www.agustinescuderoweb.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Menu />
      <Header />
      <Testimonios />
      <Footer />
      <Chatn8n webhookUrl="https://n8n.agustinescuderoweb.com/webhook/c26c3e1a-a8e4-4ea8-87bc-b921e65464c9/chat" /> 
    </>
  )
}

export default Page
