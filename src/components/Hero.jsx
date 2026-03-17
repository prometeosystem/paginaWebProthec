import hero from '../assets/hero.jpg'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '527772097203'
const WHATSAPP_MSG = 'Hola Prothec, me interesa ver una demostración rápida para mi negocio.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`

export default function Hero() {
  return (
    <section id="top" className="hero animatable" data-animate>
      <div className="hero-media">
        <img src={hero} alt="Laptop y espacio de trabajo" loading="eager" />
        <div className="hero-media-fade" aria-hidden="true" />
      </div>
      <div className="hero-inner" >
        <h1 className="h1 hero-headline" >
          Vende más y opera mejor. 
        </h1>
        <br />
        <h2 className='p-lead hero-headline-sub' style={{fontSize: '24px'}}>Deja que la tecnología haga el trabajo pesado por ti.</h2>
        <p className="p-lead hero-headline-sub">
          Digitalizamos negocios como cafeterías, consultorios, tiendas, etc.
          <br />Para agilizar sus procesos, detener las fugas de dinero y captar más clientes. 
          <br />Todo con sistemas fáciles de usar y sin descapitalizarte.
        </p>
        <div className="hero-cta" style={{marginTop: '40px'}}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaWhatsapp size={20} /> Solicitar una Demostración de 10 minutos
          </a>
        </div>
      </div>
    </section>
  )
}
