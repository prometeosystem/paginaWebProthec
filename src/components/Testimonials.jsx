import { FaStar } from 'react-icons/fa'

const testimonio = {
  valoracion: 5,
  titulo: 'Prothec',
  texto: 'El servicio de Prothec fue excelente durante todo el desarrollo del software. El equipo estuvo siempre al pendiente, resolviendo cada inquietud de manera clara y oportuna. Cada problema o actualización que surgía era atendido con rapidez y profesionalismo, lo que nos dio mucha confianza durante todo el proceso. Sin duda, un servicio altamente recomendable por su compromiso, atención y calidad.'
}

export default function Testimonials() {
  return (
    <section className="section animatable" data-animate>
      <h3 className="section-title">Referencias</h3>
      <div className="testi testi-single">
        <figure className="quote">
          <p className="quote-title">
            <span className="quote-stars" aria-hidden="true">
              {Array.from({ length: testimonio.valoracion }, (_, i) => (
                <FaStar key={i} className="quote-star" />
              ))}
            </span>
            {' | '}{testimonio.titulo}
          </p>
          <blockquote>{testimonio.texto}</blockquote>
        </figure>
      </div>
    </section>
  )
}
