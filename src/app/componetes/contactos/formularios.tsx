'use client'
import React, { useState } from 'react'
import styles from './formulario.module.css'

interface ErrorResponse {
  errors: { message: string }[]
}

const Form = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json'
      }
    })

    const result: ErrorResponse = await response.json()

    if (!response.ok) {
      setMessage(result.errors.map(error => error.message).join(', '))
      setLoading(false)
      return
    }

    setMessage('✅ Mensaje enviado correctamente. Te respondo a la brevedad.')
    setLoading(false)
    form.reset()
  }

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h2>Contactame</h2>
          <p>
            Contame sobre tu proyecto o tu idea y vemos cómo puedo ayudarte a
            llevarla al siguiente nivel 🚀
          </p>
        </header>

        <form
          action="https://formspree.io/f/xanwnwrv"
          method="POST"
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={styles.input}
          />

          <textarea
            name="content"
            placeholder="Contame un poco sobre tu proyecto..."
            required
            className={styles.textarea}
          />

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {message && <p className={styles.alert}>{message}</p>}
        </form>
      </div>
    </section>
  )
}

export default Form

