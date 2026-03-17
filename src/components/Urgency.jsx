import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '527772097203'
const WHATSAPP_MSG = 'Hola, vi la página de Prothec y quiero más información.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`

export default function Urgency() {
  return (
    <section id="urgencia" className="section section-urgency animatable" data-animate>
      <p className="urgency-text">¿Listo para impulsar tu negocio?</p>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-urgency">
        <FaWhatsapp size={20} /> Cotización por WhatsApp
      </a>
    </section>
  )
}
