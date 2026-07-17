import React from 'react'
import Menu from './componetes/inicio/menu'
import Header from './componetes/inicio/header'
import Footer from './componetes/inicio/footer'
import Chatn8n from './componetes/chat/Chatn8n'
import Testimonios from './componetes/testimonios/Testimonios'


function Page() {
  return (
    <>
      <Menu />
      <Header />
      <Testimonios />
      <Footer />
      <Chatn8n webhookUrl="https://n8n.agustinescuderoweb.com/webhook/c26c3e1a-a8e4-4ea8-87bc-b921e65464c9/chat" /> 
    </>
  )
}

export default Page
