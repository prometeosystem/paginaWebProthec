import { FaWhatsapp, FaCheck } from 'react-icons/fa'
import { trackCtaClick } from '../analytics.js'
import { whatsappUrl } from '../config.js'
import prodWeb from '../assets/prod_web.webp'
import prodMobile from '../assets/prod_mobile.webp'
import planFin from '../assets/plan_fin.webp'

const PRICE_SETUP_FROM = '1,500'
const PRICE_MONTHLY_FROM = '599'

const packages = [
  {
    id: 'embudo',
    title: 'Embudo de Ventas',
    tag: 'Landing page de alta conversión',
    forLabel: 'Para negocios que pierden clientes en redes sociales.',
    description:
      'Una página ultrarrápida enfocada en convertir a los curiosos en prospectos reales que llegan directo a tu WhatsApp, listos para comprar.',
    includes: ['Diseño persuasivo', 'Botones de contacto directo', 'Optimización para celulares', 'Hosting y soporte incluidos'],
    cta: 'Ver demostración',
    msg: 'Hola Prothec, me interesa ver una demostración rápida de Embudo de Ventas (Landing) para mi negocio.',
    img: prodWeb,
    imgW: 736,
    imgH: 1308
  },
  {
    id: 'pos',
    title: 'Punto de Venta (POS) y Gestión',
    tag: 'El más solicitado',
    featured: true,
    forLabel: 'Para cafeterías, tiendas y comercio minorista.',
    description:
      'Dile adiós a los cuadernos. Controla tus ventas, visualiza tu inventario en tiempo real, emite tickets y cuadra tu caja en 5 minutos desde cualquier dispositivo.',
    includes: ['Módulo de ventas', 'Control de inventarios', 'Reportes de ganancias', 'Corte de caja en minutos'],
    cta: 'Agendar prueba del sistema',
    msg: 'Hola Prothec, me interesa ver una demostración rápida de Sistema de Punto de Venta para mi negocio.',
    img: planFin,
    imgW: 474,
    imgH: 711
  },
  {
    id: 'reservaciones',
    title: 'Reservaciones Inteligentes',
    tag: 'Agenda que se llena sola',
    forLabel: 'Para clínicas, salones, spas y restaurantes.',
    description:
      'Deja que el sistema llene tu agenda por ti. Tus clientes ven tu disponibilidad y reservan sus citas 24/7 sin que contestes un solo mensaje manualmente.',
    includes: ['Agenda digital interactiva', 'Recordatorios automáticos', 'Control de disponibilidad', 'Reservas 24/7'],
    cta: 'Quiero automatizar mi agenda',
    msg: 'Hola Prothec, me interesa ver una demostración rápida de Sistema de Reservaciones para mi negocio.',
    img: prodMobile,
    imgW: 474,
    imgH: 592
  }
]

export default function Products() {
  return (
    <section id="productos" className="section container animatable" data-animate>
      <p className="kicker">Soluciones</p>
      <h2 className="section-title">Soluciones prácticas para negocios reales</h2>
      <p className="section-intro">
        <strong>Modelo de Inversión Inteligente:</strong> olvídate de pagar grandes sumas de contado.
        Todos nuestros sistemas funcionan con un costo de instalación inicial accesible y una mensualidad
        fija que cubre hospedaje en la nube, mantenimiento y soporte técnico continuo.
      </p>
      <div className="products-grid">
        {packages.map((pkg, i) => (
          <article
            key={pkg.id}
            className={`product-card${pkg.featured ? ' product-card--featured' : ''}`}
            style={{ '--stagger': i }}
          >
            <span className="product-card-tag">{pkg.tag}</span>
            <div className="product-card-image">
              <img src={pkg.img} alt={pkg.title} width={pkg.imgW} height={pkg.imgH} loading="lazy" />
            </div>
            <div className="product-card-body">
              <h3 className="product-card-title">{pkg.title}</h3>
              <p className="product-card-for">{pkg.forLabel}</p>
              <p className="product-card-desc">{pkg.description}</p>
              <ul className="product-card-includes">
                {pkg.includes.map(item => (
                  <li key={item}>
                    <FaCheck aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
              <div className="product-card-price">
                <span className="product-card-price-label">Inversión promocional</span>
                <span className="product-card-price-value">
                  <small className="product-card-price-from">Desde</small> ${PRICE_SETUP_FROM}{' '}
                  <small>MXN instalación</small>
                </span>
                <span className="product-card-price-monthly">+ ${PRICE_MONTHLY_FROM} MXN al mes</span>
              </div>
              <a
                href={whatsappUrl(pkg.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary product-card-cta"
                onClick={() => trackCtaClick(`products_${pkg.id}`)}
              >
                <FaWhatsapp size={18} /> {pkg.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
