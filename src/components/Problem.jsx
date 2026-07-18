import escritorio from '../assets/escritorio-azul.webp'
import { FaCommentSlash, FaBoxOpen, FaHourglassHalf } from 'react-icons/fa'

const PAINS = [
  {
    icon: FaCommentSlash,
    title: 'Clientes que se van',
    text: 'Pierdes ventas porque nadie responde rápido en redes sociales.'
  },
  {
    icon: FaBoxOpen,
    title: 'Inventario a ciegas',
    text: 'Sigues llevando el control en una libreta o en un Excel confuso.'
  },
  {
    icon: FaHourglassHalf,
    title: 'Horas perdidas',
    text: 'Cada cierre de día se convierte en una batalla para cuadrar la caja.'
  }
]

export default function Problem() {
  return (
    <section id="problema" className="section container animatable" data-animate>
      <div className="problem-layout">
        <div className="problem-copy">
          <p className="kicker">El problema</p>
          <h2 className="section-title">
            ¿Tu negocio te controla a ti, o tú controlas a tu negocio?
          </h2>
          <p className="problem-text">
            Muchos dueños de negocios tradicionales están perdiendo dinero todos los días sin darse cuenta.
          </p>
          <div className="problem-cards">
            {PAINS.map(pain => {
              const Icon = pain.icon
              return (
                <div className="problem-card" key={pain.title}>
                  <span className="problem-card-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <h3>{pain.title}</h3>
                    <p>{pain.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="problem-close">
            La operación manual tiene un límite. Si quieres que tu negocio crezca, necesitas automatizar.
          </p>
        </div>
        <div className="problem-media">
          <img
            src={escritorio}
            alt="Escritorio de trabajo con computadora mostrando un sistema de gestión"
            width="736"
            height="1103"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
