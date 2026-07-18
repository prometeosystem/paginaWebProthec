import { useState } from 'react'
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa'
import { trackLeadGenerated } from '../analytics.js'
import PrivacyModal from './PrivacyModal.jsx'

const API_URL = import.meta.env.VITE_API_URL || ''

export default function LeadForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [website, setWebsite] = useState('') // honeypot antispam: los humanos no lo ven
  const [status, setStatus] = useState(null) // 'success' | 'error'
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

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
          telefono: telefono.trim() || undefined,
          website: website || undefined
        })
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        trackLeadGenerated()
        setNombre('')
        setEmail('')
        setTelefono('')
        setStatus('success')
        setMessage('¡Registro exitoso! Pronto alguien se pondrá en contacto contigo.')
      } else {
        setStatus('error')
        setMessage(data.error || 'No se pudo enviar. Intenta de nuevo.')
      }
    } catch {
      setStatus('error')
      setMessage('Error de conexión. Intenta más tarde o escríbenos por WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="section section-leadform animatable" data-animate>
      <div className="leadform-wrap">
        <p className="kicker">Contacto</p>
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
              autoComplete="name"
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
              autoComplete="email"
              required
              disabled={loading}
            />
          </label>
          <label className="leadform-label">
            <span>Teléfono (opcional)</span>
            <input
              type="tel"
              className="leadform-input"
              value={telefono}
              onChange={e => setTelefono(e.target.value)}
              placeholder="55 1234 5678"
              autoComplete="tel"
              disabled={loading}
            />
          </label>
          {/* Campo trampa para bots: oculto para personas y lectores de pantalla */}
          <div className="leadform-honeypot" aria-hidden="true">
            <label>
              No llenes este campo
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={e => setWebsite(e.target.value)}
              />
            </label>
          </div>
          {status && (
            <p className={`leadform-message leadform-message--${status}`} role="alert">
              {status === 'success' && <FaCheckCircle aria-hidden="true" />} {message}
            </p>
          )}
          <button type="submit" className="btn btn-primary leadform-submit" disabled={loading}>
            {loading ? 'Enviando…' : <><FaPaperPlane aria-hidden="true" /> Enviar</>}
          </button>
          <p className="leadform-privacy">
            Al enviar aceptas nuestro{' '}
            <button type="button" className="link-button" onClick={() => setShowPrivacy(true)}>
              aviso de privacidad
            </button>.
          </p>
        </form>
      </div>
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </section>
  )
}
