import React from 'react'
import Menu from '../componetes/inicio/menu'
import Header from './header'
import Footer from '../componetes/inicio/footer'


export const metadata = {
  title: 'Landing Page Profesional | Agustín Escudero',
  description:
    'Diseño de landing pages efectivas para vender, captar leads y aumentar conversiones. Servicio rápido, personalizado y optimizado para campañas publicitarias.',
};


function Page() {
  return (
    <div>
      <Menu />
      <Header />
      <Footer />
    </div>
  )
}

export default Page
