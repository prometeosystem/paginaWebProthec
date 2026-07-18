import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonio = {
  valoracion: 5,
  autor: 'Cliente de desarrollo de software',
  texto:
    'El servicio de Prothec fue excelente durante todo el desarrollo del software. El equipo estuvo siempre al pendiente, resolviendo cada inquietud de manera clara y oportuna. Cada problema o actualización era atendido con rapidez y profesionalismo, lo que nos dio mucha confianza durante todo el proceso. Sin duda, un servicio altamente recomendable por su compromiso, atención y calidad.'
}

export default function Testimonials() {
  return (
    <section id="referencias" className="section container animatable" data-animate>
      <p className="kicker">Referencias</p>
      <h2 className="section-title">Lo que dicen quienes ya trabajaron con nosotros</h2>
      <figure className="testimonial-card">
        <FaQuoteLeft className="testimonial-quote-icon" aria-hidden="true" />
        <div className="testimonial-stars" aria-label={`Valoración: ${testimonio.valoracion} de 5 estrellas`}>
          {Array.from({ length: testimonio.valoracion }, (_, i) => (
            <FaStar key={i} aria-hidden="true" />
          ))}
        </div>
        <blockquote>{testimonio.texto}</blockquote>
        <figcaption>— {testimonio.autor}</figcaption>
      </figure>
    </section>
  )
}
