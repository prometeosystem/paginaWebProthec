import avatar1 from '../assets/avatar1.png'

export default function Testimonials(){
  const testimonios = [
    {
      comentario: 'Formalidad en todo el proceso',
      nombre: 'Juan Manuel',
      ocupacion: ''
    },
    {
      comentario: 'Gran compromiso con las personas',
      nombre: 'Carlos Garcia',
      ocupacion: ''
    },
    {
      comentario: 'Conocimiento en el área',
      nombre: 'David Rojas',
      ocupacion: ''
    }
  ];

  return (
    <section className="section animatable" data-animate>
      <h3 className="section-title">Referencias</h3>
      <div className="testi">
        {testimonios.map((item, i) => (
          <figure className="quote" key={i}>
            <blockquote style={{ margin: 0, fontSize: 13 }}>
              “{item.comentario}…”
            </blockquote>
            <figcaption style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
              <img src={avatar1} width="28" height="28" style={{ borderRadius: '50%' }} alt="Avatar" />
              <small>{item.nombre} · {item.ocupacion}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}