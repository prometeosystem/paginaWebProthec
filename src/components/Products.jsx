import prodWeb from '../assets/prod_web.jpg'
import prodMobile from '../assets/prod_mobile.jpg'
import prodSaas from '../assets/prod_saas.jpg'

const items = [
  {
    img: prodWeb,
    title: 'Página Web',
    desc: 'Sitios con enfoque informativo, servicios o conversión; accesibles desde cualquier dispositivo.'
  },
  {
    img: prodMobile,
    title: 'Aplicaciones Móviles',
    desc: 'Apps para iOS/Android que agilizan ventas, servicios o entretenimiento.'
  },
  {
    img: prodSaas,
    title: 'Sistemas de gestión',
    desc: 'Plataformas para automatizar procesos y optimizar operaciones.'
  },
]

export default function Products(){
  return (
    <section id="productos" className="section">
      <h3 className="section-title">Productos</h3>
      <div className="grid grid-3">
        {items.map((p, i)=>(
          <article className="card" key={i}>
            <img className="img" src={p.img} alt={p.title}/>
            <h4 className="product-title">{p.title}</h4>
            <p className="product-desc">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}