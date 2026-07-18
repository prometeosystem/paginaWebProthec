import { useState } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import logo from '../assets/logo-sin-fondo.webp'
import { SOCIAL, CONTACT, whatsappUrl, WHATSAPP_MSG_DEMO } from '../config.js'
import PrivacyModal from './PrivacyModal.jsx'

const NAV_LINKS = [
  { href: '#problema', label: 'El problema' },
  { href: '#productos', label: 'Soluciones' },
  { href: '#proceso', label: 'Cómo funciona' },
  { href: '#faq', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' }
]

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand">
          <img src={logo} alt="Logo Prothec" width="120" height="90" loading="lazy" />
          <p className="footer-tagline">Soluciones con propósito para negocios reales.</p>
          <p className="footer-coverage">
            <FaMapMarkerAlt aria-hidden="true" /> {CONTACT.coverage}
          </p>
        </div>

        <div className="footer-col">
          <h3>Menú</h3>
          <ul className="footer-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <ul className="footer-links">
            <li>
              <a href={whatsappUrl(WHATSAPP_MSG_DEMO)} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp aria-hidden="true" /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook aria-hidden="true" /> Facebook
              </a>
            </li>
            <li>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram aria-hidden="true" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>© {new Date().getFullYear()} Prothec · Todos los derechos reservados</small>
        <button type="button" className="link-button" onClick={() => setShowPrivacy(true)}>
          Aviso de privacidad
        </button>
      </div>
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </footer>
  )
}
