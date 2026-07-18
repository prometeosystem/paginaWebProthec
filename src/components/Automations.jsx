import { FaWhatsapp, FaRobot, FaFileInvoiceDollar, FaBell, FaSyncAlt } from 'react-icons/fa'
import { trackCtaClick } from '../analytics.js'
import { whatsappUrl } from '../config.js'

const WHATSAPP_URL = whatsappUrl(
  'Hola Prothec, me interesa automatizar procesos de mi negocio. ¿Me pueden contar más?'
)

const EXAMPLES = [
  {
    icon: FaBell,
    text: 'Responder y dar seguimiento automático a clientes de WhatsApp y redes sociales'
  },
  {
    icon: FaFileInvoiceDollar,
    text: 'Registrar ventas y gastos en tus hojas de cálculo sin capturar nada a mano'
  },
  {
    icon: FaSyncAlt,
    text: 'Conectar tus herramientas entre sí: correo, agenda, inventario, facturación'
  }
]

export default function Automations() {
  return (
    <section id="automatizaciones" className="section container animatable" data-animate>
      <div className="automations-banner">
        <div className="automations-copy">
          <span className="automations-icon" aria-hidden="true">
            <FaRobot />
          </span>
          <p className="kicker">Automatizaciones</p>
          <h2 className="section-title">¿Tareas repetitivas? También las automatizamos</h2>
          <p className="automations-text">
            Con plataformas como <strong>Make</strong> conectamos las herramientas que ya usas para que
            trabajen solas, sin necesidad de un sistema nuevo. Tú nos cuentas el proceso que te quita
            tiempo y nosotros lo dejamos funcionando en automático.
          </p>
          <ul className="automations-list">
            {EXAMPLES.map(item => {
              const Icon = item.icon
              return (
                <li key={item.text}>
                  <span className="automations-list-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  {item.text}
                </li>
              )
            })}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            onClick={() => trackCtaClick('automations')}
          >
            <FaWhatsapp size={20} /> Cuéntanos qué quieres automatizar
          </a>
          <p className="automations-note">
            Cada automatización se cotiza según tu proceso: la plática inicial no cuesta nada.
          </p>
        </div>
      </div>
    </section>
  )
}
