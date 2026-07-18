import { FaWhatsapp } from 'react-icons/fa'
import { trackCtaClick } from '../analytics.js'
import { whatsappUrl, WHATSAPP_MSG_DEMO } from '../config.js'

const WHATSAPP_URL = whatsappUrl(WHATSAPP_MSG_DEMO)

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
      <FaWhatsapp size={26} aria-hidden="true" />
      <span className="floating-whatsapp-label">Solicitar demostración</span>
    </a>
  )
}
