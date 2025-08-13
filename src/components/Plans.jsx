import planFin from '../assets/plan_fin.jpg'
import planDev from '../assets/plan_dev.jpg'

export default function Plans(){
  return (
    <section id="planes" className="section">
      <h3 className="section-title">Planes</h3>
      <div className="grid grid-2">
        <article className="card">
          <img className="img" src={planFin} alt="Financiamiento" />
          <h4 className="product-title">Financiamiento</h4>
          <p className="product-desc">Pago inicial + mensualidades accesibles para PyMES.</p>
        </article>
        <article className="card">
          <img className="img" src={planDev} alt="Desarrollo" />
          <h4 className="product-title">Desarrollo</h4>
          <p className="product-desc">Equipo a medida, entregas iterativas y soporte continuo.</p>
        </article>
      </div>
    </section>
  )
}