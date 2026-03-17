import { useState } from 'react'
import { createPortal } from 'react-dom'
import { FaWhatsapp } from 'react-icons/fa'
import prodWeb from '../assets/prod_web.jpg'
import prodMobile from '../assets/prod_mobile.jpg'
import planFin from '../assets/plan_fin.jpg'

const WHATSAPP_NUMBER = '527772097203'

const packages = [
  {
    id: 'embudo',
    title: 'Embudo de Ventas (Landing Page de Alta Conversión)',
    forLabel: 'Para negocios que necesitan dejar de perder clientes en redes sociales.',
    description: 'Diseñamos una página ultrarrápida enfocada en convertir a los curiosos en prospectos reales que llegan directamente a tu WhatsApp, listos para comprar.',
    includes: ['Diseño persuasivo', 'Botones de contacto directo', 'Optimización para celulares y conexión rápida'],
    setup: '2,900',
    monthly: '400',
    cta: 'Ver demostración',
    msg: 'Hola Prothec, me interesa ver una demostración rápida de Embudo de Ventas (Landing) para mi negocio.',
    img: prodWeb
  },
  {
    id: 'pos',
    title: 'Sistema de Punto de Venta (POS) y Gestión',
    forLabel: 'Para cafeterías, tiendas y comercio minorista.',
    description: 'Dile adiós a los cuadernos. Controla tus ventas, visualiza tu inventario en tiempo real, emite tickets y cuadra tu caja en 5 minutos desde cualquier dispositivo.',
    includes: ['Módulo de ventas', 'Inventarios', 'Reportes de ganancias y control de caja'],
    setup: '4,900',
    monthly: '500',
    cta: 'Agendar prueba de sistema',
    msg: 'Hola Prothec, me interesa ver una demostración rápida de Sistema de Punto de Venta para mi negocio.',
    img: planFin
  },
  {
    id: 'reservaciones',
    title: 'Sistema de Reservaciones Inteligente',
    forLabel: 'Para clínicas, salones, spas y restaurantes.',
    description: 'Deja que el sistema llene tu agenda por ti. Tus clientes podrán ver tu disponibilidad y reservar sus citas 24/7 sin que tengas que contestar un solo mensaje manualmente.',
    includes: ['Agenda digital interactiva', 'Recordatorios automáticos', 'Control de disponibilidad'],
    setup: '2,500',
    monthly: '300',
    cta: 'Quiero automatizar mi agenda',
    msg: 'Hola Prothec, me interesa ver una demostración rápida de Sistema de Reservaciones para mi negocio.',
    img: prodMobile
  }
]

const TOOLTIP_OFFSET = 0

export default function Products() {
  const [hoveredId, setHoveredId] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const handleCardMouseEnter = (pkgId, e) => {
    setHoveredId(pkgId)
    setTooltipPos({ x: e.clientX + TOOLTIP_OFFSET, y: e.clientY + TOOLTIP_OFFSET })
  }

  const handleCardMouseMove = (e) => {
    const x = e.clientX + TOOLTIP_OFFSET
    const y = e.clientY + TOOLTIP_OFFSET
    setTooltipPos({ x, y })
  }

  const hoveredPkg = packages.find((p) => p.id === hoveredId)

  return (
    <section id="productos" className="section section-products animatable" data-animate>
      <h2 className="section-title">Soluciones prácticas para negocios reales.</h2>
      <p className="products-subtitle">
        <strong>Conoce nuestro Modelo de Inversión Inteligente:</strong> Olvídate de pagar grandes sumas de contado. Todos nuestros sistemas funcionan con un <strong>Costo de Instalación (Setup)</strong> inicial muy accesible y una <strong>Mensualidad Fija</strong> que cubre tu hospedaje en la nube, mantenimiento y soporte técnico continuo.
      </p>
      <div className="products-grid">
        {packages.map((pkg) => {
          const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.msg)}`
          return (
            <article
              key={pkg.id}
              className="product-card"
              onMouseEnter={(e) => handleCardMouseEnter(pkg.id, e)}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="product-card-image">
                <img src={pkg.img} alt={pkg.title} loading="lazy" />
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">{pkg.title}</h3>
                <p className="product-card-for">{pkg.forLabel}</p>
                <p className="product-card-desc">{pkg.description}</p>
                <p className="product-card-price">
                  <strong>Inversión Promocional:</strong> Instalación desde <strong>${pkg.setup} MXN</strong> + Mensualidad de <strong>${pkg.monthly} MXN</strong>
                  {pkg.id === 'pos' && ' (Tu negocio seguro y respaldado).'}
                  {pkg.id === 'embudo' && ' (Incluye hosting y soporte).'}
                  {pkg.id === 'reservaciones' && '.'}
                </p>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary product-card-cta">
                  <FaWhatsapp size={18} /> {pkg.cta}
                </a>
              </div>
            </article>
          )
        })}
      </div>
      {hoveredPkg?.includes?.length > 0 &&
        createPortal(
          <div
            className="product-card-tooltip product-card-tooltip--follow"
            style={{ left: tooltipPos.x, top: tooltipPos.y }}
          >
            <strong>Incluye:</strong> {hoveredPkg.includes.join(', ')}.
          </div>,
          document.body
        )}
    </section>
  )
}
