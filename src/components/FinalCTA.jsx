import { FaWhatsapp } from 'react-icons/fa'
import { trackCtaClick } from '../analytics.js'

const WHATSAPP_NUMBER = '527772097203'
const WHATSAPP_MSG = 'Hola Prothec, me interesa agendar una demostración rápida por WhatsApp.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`

export default function FinalCTA() {
  return (
    <section id="cierre" className="section section-final-cta animatable" data-animate>
      <h2 className="section-title">Es momento de llevar tu negocio al siguiente nivel.</h2>
      <p className="final-cta-text">
        No necesitas saber de programación, de eso nos encargamos nosotros.</p>
        <p style={{marginTop: '-10px', fontWeight: 'bold'}}> Tú única tarea será decidir hasta dónde quieres llegar..</p>

       <p> Da el primer paso hoy. Escríbenos por WhatsApp y agendemos una demostración rápida sin ningún compromiso.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary final-cta-btn"
        onClick={() => trackCtaClick('final_cta')}
      >
        <FaWhatsapp size={22} /> Hablemos por WhatsApp
      </a>
    </section>
  )
}
