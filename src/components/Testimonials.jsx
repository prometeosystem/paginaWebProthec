import avatar1 from '../assets/avatar1.png'

export default function Testimonials(){
  return (
    <section className="section">
      <h3 className="section-title">Referencias</h3>
      <div className="testi">
        {['Un magnífico elogio','Un comentario fantástico','Una reseña entusiasta'].map((t,i)=>(
          <figure className="quote" key={i}>
            <blockquote style={{margin:0, fontSize:13}}>
              “{t}…”
            </blockquote>
            <figcaption style={{display:'flex', alignItems:'center', gap:10, marginTop:10}}>
              <img src={avatar1} width="28" height="28" style={{borderRadius:'50%'}} alt="Avatar" />
              <small>Nombre · Ocupación</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}