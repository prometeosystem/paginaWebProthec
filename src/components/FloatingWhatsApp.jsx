import { FaWhatsapp } from 'react-icons/fa'
import { trackCtaClick } from '../analytics.js'

const WHATSAPP_NUMBER = '527772097203'
const WHATSAPP_MSG = 'Hola Prothec, me interesa ver una demostración rápida para mi negocio.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Solicitar demostración por WhatsApp"
      onClick={() => trackCtaClick('floating_whatsapp')}
    >
      <FaWhatsapp size={28} />
      <span className="floating-whatsapp-label">Solicitar demostración</span>
    </a>
  )
}
