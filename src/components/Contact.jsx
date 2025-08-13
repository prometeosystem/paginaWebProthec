export default function Contact(){
  return (
    <section id="contacto" className="section">
      <h3 className="section-title">Contacto</h3>
      <div className="contact">
        <form className="grid" onSubmit={e=>e.preventDefault()}>
          <input className="input" placeholder="Nombre" required />
          <input className="input" placeholder="Email" type="email" required />
          <textarea className="input" placeholder="Mensaje" rows="4" />
          <div style={{display:'flex', gap:10}}>
            <button className="btn btn-primary" type="submit">Enviar</button>
            <a className="btn btn-secondary" href="#top">Botón secundario</a>
          </div>
        </form>
      </div>
    </section>
  )
}