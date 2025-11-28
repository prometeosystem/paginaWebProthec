import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import prodWeb from '../assets/prod_web.jpg'
import prodMobile from '../assets/prod_mobile.jpg'
import prodSaas from '../assets/prod_saas.jpg'

const items = [
  {
    img: prodWeb,
    title: 'Página Web',
    desc: 'Un sitio que informa, inspira confianza y convierte visitantes en contactos.',
    detail:
      'Tu mejor vendedor las 24 horas. No es solo información, es seducción: la cara digital que el mundo ve cuando busca tus servicios.',
    functionText:
      'Función principal: enamorar al cliente nuevo, generar confianza y convencerlos de que te contacten o compren.',
    superpower: 'El alcance. Miles de personas descubren quién eres y qué ofreces sin barreras.',
    idealFor: 'Ideal para atraer clientes nuevos y dar prestigio a la marca.',
    example: 'Ejemplo: el sitio de un restaurante con menú y fotos, o de un abogado explicando sus servicios.',
    features: ['Arquitectura SEO desde el inicio', 'Integración con CMS o e-commerce ligero', 'Optimización para móviles y velocidad']
  },
  {
    img: prodSaas,
    title: 'Plataforma Web',
    desc: 'Una herramienta potente para la operación diaria de tu negocio.',
    detail:
      'Tu centro de servicio potente. Es como una página web con superpoderes: permite resolver problemas, coordinar equipos y entregar servicios sin instalar nada.',
    functionText: 'Función principal: generar valor constante a través de interacciones complejas que el usuario aprovecha desde cualquier computadora.',
    superpower: 'La funcionalidad. Hace tareas pesadas sencillas y accesibles.',
    idealFor: 'Ideal para entregar servicio, gestionar clientes y automatizar procesos internos.',
    example: 'Ejemplo: banca en línea, el panel de Airbnb o Google Drive.',
    features: ['Dashboards con datos en tiempo real', 'Roles y permisos para equipos', 'Automatizaciones y API públicas']
  },
  {
    img: prodMobile,
    title: 'Aplicación Móvil',
    desc: 'Una experiencia premium que vive en el bolsillo del cliente.',
    detail:
      'La experiencia VIP en el bolsillo. La app más íntima con tu cliente: rápida, fluida y siempre presente.',
    functionText: 'Función principal: ofrecer la experiencia más cómoda con avisos, geolocalización y compras en segundos.',
    superpower: 'La fidelización. Crea un hábito de uso diario y posiciona tu marca en la rutina.',
    idealFor: 'Ideal para clientes recurrentes que necesitan inmediatez y una experiencia perfecta.',
    example: 'Ejemplo: Uber, Instagram o la app de un banco con huella digital.',
    features: ['Sincronización en segundo plano', 'Integración con cámaras/sensores', 'Experiencias offline ligeras']
  }
]

export default function Products(){
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const handle = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [selected])

  const modalContent = selected ? (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={() => setSelected(null)}>
      <article className="modal-card" onClick={(event) => event.stopPropagation()}>
        <header>
          <h3 id="modal-title">{selected.title}</h3>
          <p className="modal-detail">{selected.detail}</p>
        </header>
        <div className="modal-grid modal-grid-stack">
          <section className="modal-section">
            <p className="modal-label">Función principal</p>
            <p>{selected.functionText}</p>
          </section>
          <section className="modal-section">
            <p className="modal-label">Superpoder</p>
            <p>{selected.superpower}</p>
          </section>
          <section className="modal-section">
            <p className="modal-label">Ideal para</p>
            <p>{selected.idealFor}</p>
          </section>
        </div>
        <section>
          <p className="modal-label">Ejemplo</p>
          <p>{selected.example}</p>
        </section>
        <section className="modal-difference">
          <p>{selected.keyMessage}</p>
        </section>
        <button className="btn btn-secondary modal-close" onClick={() => setSelected(null)}>
          Cerrar
        </button>
      </article>
    </div>
  ) : null

  const modalNode =
    modalContent && typeof document !== 'undefined'
      ? createPortal(modalContent, document.body)
      : modalContent

  return (
    <section id="productos" className="section animatable" data-animate>
      <h3 className="section-title">Productos</h3>
      <div className="grid grid-3">
        {items.map((p, i)=>(
          <article
            className="card interactive-card"
            key={i}
            role="button"
            tabIndex={0}
            onClick={() => setSelected(p)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') setSelected(p)
            }}
          >
            <img className="img" src={p.img} alt={p.title}/>
            <h4 className="product-title">{p.title}</h4>
            <p className="product-desc">{p.desc}</p>
          </article>
        ))}
      </div>

      {modalNode}
    </section>
  )
}