import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const FAQS = [
  {
    q: '¿Necesito saber de tecnología para usar los sistemas?',
    a: 'No. Diseñamos todo para que sea tan fácil como usar WhatsApp. Además te capacitamos a ti y a tu equipo hasta que dominen la herramienta, sin costo extra.'
  },
  {
    q: '¿Qué cubre la mensualidad?',
    a: 'El hospedaje en la nube, el mantenimiento, las actualizaciones y el soporte técnico continuo. No hay cobros sorpresa.'
  },
  {
    q: '¿Qué pasa si algún día decido cancelar?',
    a: 'No hay plazos forzosos. Tus datos son tuyos: si decides cancelar, te ayudamos a exportar tu información.'
  },
  {
    q: '¿Cuánto tarda la implementación?',
    a: 'En menos de 4 semanas tu negocio ya está operando con su nuevo sistema. Las landing pages suelen estar listas en cuestión de días.'
  },
  {
    q: '¿Pueden automatizar procesos que ya hago con otras herramientas?',
    a: 'Sí. Con plataformas como Make conectamos las herramientas que ya usas (WhatsApp, hojas de cálculo, correo, agenda) para que trabajen solas. Cuéntanos tu proceso y te decimos si se puede automatizar, sin compromiso.'
  },
  {
    q: '¿Atienden en mi ciudad?',
    a: 'Sí. Trabajamos de forma remota con negocios de todo México: la demo, la instalación y la capacitación pueden hacerse 100% en línea.'
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section section-faq animatable" data-animate>
      <div className="container">
        <p className="kicker">Preguntas frecuentes</p>
        <h2 className="section-title">Resolvemos tus dudas antes de empezar</h2>
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const open = openIndex === i
            return (
              <div className={`faq-item${open ? ' faq-item--open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  {item.q}
                  <FaChevronDown className="faq-chevron" aria-hidden="true" />
                </button>
                <div className="faq-answer" hidden={!open}>
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
