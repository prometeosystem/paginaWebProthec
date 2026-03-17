import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || ''

export default function LeadForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [status, setStatus] = useState(null) // 'success' | 'error'
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    setMessage('')
    if (!nombre.trim() || !email.trim()) {
      setStatus('error')
      setMessage('Nombre y correo son obligatorios.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim(),
          telefono: telefono.trim() || undefined
        })
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('success')
        setMessage(data.message || 'Te contactaremos pronto.')
        setNombre('')
        setEmail('')
        setTelefono('')
      } else {
        setStatus('error')
        setMessage(data.error || 'No se pudo enviar. Intenta de nuevo.')
      }
    } catch {
      setStatus('error')
      setMessage('Error de conexión. Revisa que la API esté en marcha o intenta más tarde.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="section section-leadform animatable" data-animate>
      <h2 className="section-title">Hablar con un asesor</h2>
      <p className="leadform-intro">Deja tus datos y te respondemos a la brevedad.</p>
      <form className="leadform" onSubmit={handleSubmit}>
        <label className="leadform-label">
          <span>Nombre <span className="required">*</span></span>
          <input
            type="text"
            className="leadform-input"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Tu nombre"
            required
            disabled={loading}
          />
        </label>
        <label className="leadform-label">
          <span>Correo <span className="required">*</span></span>
          <input
            type="email"
            className="leadform-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            required
            disabled={loading}
          />
        </label>
        <label className="leadform-label">
          Teléfono (opcional)
          <input
            type="tel"
            className="leadform-input"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            placeholder="55 1234 5678"
            disabled={loading}
          />
        </label>
        {status && (
          <p className={`leadform-message leadform-message--${status}`} role="alert">
            {message}
          </p>
        )}
        <button type="submit" className="btn btn-primary leadform-submit" disabled={loading}>
          {loading ? 'Enviando…' : 'Enviar'}
        </button>
      </form>
    </section>
  )
}
