import prodWeb from '../assets/prod_web.jpg'
import prodMobile from '../assets/prod_mobile.jpg'
import prom from '../assets/prom_dev.jpg'

const casos = [
  {
    img: prodWeb,
    tag: 'E-commerce',
    title: 'Catálogo inteligente para retail',
    desc: 'Diseñamos una tienda digital con seguimiento de inventarios y consejos automáticos para los asesores.'
  },
  {
    img: prodMobile,
    tag: 'Aplicación móvil',
    title: 'App de atención inmediata',
    desc: 'Integración de chat, agenda y atiende a cliente que redujo tiempos de respuesta en 60%.'
  },
  {
    img: prom,
    tag: 'Transformación',
    title: 'Modernización de procesos',
    desc: 'Te ayudamos a mejorar tus procesos internos y mejorar la eficiencia de tu equipo.'
  }
]

export default function Gallery() {
  return (
    <section id="casos" className="section gallery-section animatable" data-animate>
      <h3 className="section-title">Casos destacados</h3>
      <div className="gallery-grid">
        {casos.map((item, index) => (
          <article className="case-card" key={item.title}>
            <div className="case-media">
              <img src={item.img} alt={item.title} loading="lazy" />
            </div>
            <div className="case-body">
              <span className="case-tag">{item.tag}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

