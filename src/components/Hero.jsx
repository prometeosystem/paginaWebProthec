import hero from '../assets/hero.jpg'

export default function Hero(){
  return (
    <section id="top" className="hero animatable" data-animate>
      <div>
        <h1 className="h1">La oportunidad ha llegado</h1>
        <p className="p-lead">
          Potencia tu negocio con herramientas digitales. Con nosotros tendrás la
          oportunidad y nos adaptaremos a tus necesidades.
        </p>
        <div className="hero-cta">
          <a href="#contacto" className="btn btn-primary">Contáctanos</a>
          <a href="#productos" className="btn btn-secondary">Ver productos</a>
        </div>
      </div>
      <div className="hero-media">
        <img src={hero} alt="Laptop y espacio de trabajo" loading="eager"/>
      </div>
    </section>
  )
}