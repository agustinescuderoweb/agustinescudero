import React from 'react'
import Menu from '../componetes/inicio/menu'
import Header from './headernew'
import Footer from '../componetes/inicio/footer'


export const metadata = {
  title: 'Landing Page Profesional | Agustín Escudero',
  description:
    'Webs que generan clientes + SEO para emprendedores y marcas personales',
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
