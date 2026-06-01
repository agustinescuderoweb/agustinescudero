import React from 'react'
import Head from 'next/head'
import Menu from '../componetes/inicio/menu'
import Header from './headernew'
import Footer from '../componetes/inicio/footer'

function Page() {
  return (
    <>
      <Head>
        <title>Landing Page Profesional | Agustín Escudero</title>
        <meta name="description" content="Diseño de landing pages profesionales en Mendoza optimizadas para SEO. Páginas rápidas, modernas y pensadas para convertir visitas en clientes reales." />
        <meta name="robots" content="index, follow" />
      </Head>
      <Menu />
      <Header />
      <Footer />
    </>
  )
}

export default Page