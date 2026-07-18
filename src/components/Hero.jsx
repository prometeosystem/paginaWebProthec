import hero from '../assets/hero.webp'
import { FaWhatsapp, FaArrowDown, FaBolt, FaShieldAlt, FaClock } from 'react-icons/fa'
import { trackCtaClick } from '../analytics.js'
import { whatsappUrl, WHATSAPP_MSG_DEMO } from '../config.js'

const WHATSAPP_URL = whatsappUrl(WHATSAPP_MSG_DEMO)

const HIGHLIGHTS = [
  { icon: FaClock, text: 'Operando en menos de 4 semanas' },
  { icon: FaBolt, text: 'Sistemas fáciles de usar' },
  { icon: FaShieldAlt, text: 'Soporte y capacitación incluidos' }
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-media" aria-hidden="true">
        <img src={hero} alt="" width="1600" height="902" loading="eager" fetchPriority="high" />
        <div className="hero-media-overlay" />
      </div>
      <div className="container hero-inner">
        <p className="hero-kicker animatable is-visible">Tecnología para negocios reales</p>
        <h1 className="hero-headline">
          Vende más y <span className="hero-highlight">opera mejor.</span>
        </h1>
        <p className="hero-sub">Deja que la tecnología haga el trabajo pesado por ti.</p>
        <p className="hero-lead">
          Digitalizamos cafeterías, consultorios, tiendas y salones para agilizar sus procesos,
          detener las fugas de dinero y captar más clientes. Sin descapitalizarte.
        </p>
        <div className="hero-cta">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            onClick={() => trackCtaClick('hero')}
          >
            <FaWhatsapp size={20} /> Solicitar demo de 10 minutos
          </a>
          <a href="#productos" className="btn btn-ghost btn-lg">
            Ver soluciones <FaArrowDown size={14} />
          </a>
        </div>
        <ul className="hero-highlights">
          {HIGHLIGHTS.map(item => {
            const Icon = item.icon
            return (
              <li key={item.text}>
                <Icon aria-hidden="true" /> {item.text}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
