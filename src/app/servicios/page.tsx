import type { Metadata } from 'next'
import Menu from '../componetes/inicio/menu'
import Header from './headernew'
import Footer from '../componetes/inicio/footer'

export const metadata: Metadata = {
  title: 'Servicios: Web Business, Ecommerce Business y Desarrollo a Medida | Agustín Escudero',
  description:
    'Sitios web y tiendas online profesionales para negocios que quieren generar clientes y vender por internet. Conocé Web Business, Ecommerce Business y desarrollo a medida.',
  openGraph: {
    title: 'Servicios de Desarrollo Web | Agustín Escudero',
    description:
      'Sitios web y tiendas online profesionales para negocios que quieren generar clientes y vender por internet.',
    url: 'https://www.agustinescuderoweb.com/servicios',
  },
}

function Page() {
  return (
    <>
      <Menu />
      <Header />
      <Footer />
    </>
  )
}

export default Page
