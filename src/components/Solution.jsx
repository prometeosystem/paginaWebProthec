import prodWeb from '../assets/prod_web.jpg'
import prom from '../assets/prom_dev.jpg'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '527772097203'
const WHATSAPP_MSG = 'Hola, vi la página de Prothec y quiero más información.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`

const points = [
  'Entregas en plazos claros.',
  'Conexión con WhatsApp y canales que uses.',
  'Soporte y seguimiento en el proceso.'
]

export default function Solution() {
  return (
    <section id="solucion" className="section section-solution animatable" data-animate>
      <h2 className="section-title">Qué ofrecemos</h2>
      <p className="solution-intro">
        Páginas web, plataformas y apps a la medida. Conexión con tu WhatsApp y entrega en plazos que se adaptan a ti.
      </p>
      <div className="solution-grid">
        <article className="solution-card">
          <div className="solution-card-media">
            <img src={prodWeb} alt="Páginas web" loading="lazy" />
          </div>
          <div className="solution-card-body">
            <h3>Páginas web</h3>
            <p>Sitios que informan, inspiran confianza y acercan a tus clientes. Rápidos y adaptados a móvil.</p>
          </div>
        </article>
        <article className="solution-card">
          <div className="solution-card-media">
            <img src={prom} alt="Desarrollo a la medida" loading="lazy" />
          </div>
          <div className="solution-card-body">
            <h3>Desarrollo a la medida</h3>
            <p>Plataformas y herramientas que se integran con tu negocio y con canales como WhatsApp.</p>
          </div>
        </article>
      </div>
      <ul className="solution-list">
        {points.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-solution-cta">
        <FaWhatsapp size={18} /> Cotización por WhatsApp
      </a>
    </section>
  )
}
