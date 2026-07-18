import { FaWhatsapp } from 'react-icons/fa'
import { trackCtaClick } from '../analytics.js'
import { whatsappUrl } from '../config.js'

const WHATSAPP_URL = whatsappUrl('Hola Prothec, me interesa agendar una demostración rápida por WhatsApp.')

export default function FinalCTA() {
  return (
    <section id="cierre" className="section section-final-cta animatable" data-animate>
      <div className="container final-cta-inner">
        <h2 className="section-title">Es momento de llevar tu negocio al siguiente nivel</h2>
        <p className="final-cta-text">
          No necesitas saber de programación, de eso nos encargamos nosotros.
        </p>
        <p className="final-cta-emphasis">Tu única tarea será decidir hasta dónde quieres llegar.</p>
        <p className="final-cta-text">
          Da el primer paso hoy. Escríbenos por WhatsApp y agendemos una demostración rápida sin ningún compromiso.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-lg final-cta-btn"
          onClick={() => trackCtaClick('final_cta')}
        >
          <FaWhatsapp size={22} /> Hablemos por WhatsApp
        </a>
      </div>
    </section>
  )
}
