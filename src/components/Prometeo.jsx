import prom from '../assets/prom_dev.jpg'

export default function Prometeo() {
  return (
    <section id="prometeo" className="section animatable" data-animate>
      {/* Título más grande y con nuevo nombre */}
      <h3 className="section-title" style={{ fontSize: 42, letterSpacing: '-0.02em' }}>
        Prothec
      </h3>

      <div className="grid grid-2 grid-stretch">
        <article className="panel">
          <div className="kicker">Misión</div>
          <p className="panel-text justify">
            Nuestra misión es crear soluciones tecnológicas innovadoras y accesibles
            que impulsen el crecimiento y profesionalización de negocios emergentes.
            Queremos unir el diseño elegante con la funcionalidad moderna para generar
            confianza y eficiencia en nuestros clientes.
          </p>

          <div className="kicker" style={{ marginTop: 16 }}>Visión</div>
          <p className="panel-text justify">
            Ser una empresa reconocida en el estado de Morelos por nuestra excelencia
            en el desarrollo de software, destacando por nuestra capacidad de innovación,
            compromiso con el cliente y contribución al fortalecimiento tecnológico
            de los negocios emergentes y consolidados.
          </p>

          <div className="kicker" style={{ marginTop: 16 }}>Valores</div>
          {/* Lista alineada al mismo inicio que los párrafos */}
          <ul className="values values-tight values-flush">
            <li>Responsabilidad</li>
            <li>Compromiso</li>
            <li>Integridad</li>
            <li>Lealtad</li>
            <li>Empatía</li>
          </ul>
        </article>

        <article className="panel panel-media">
          <div className="media-frame">
            <img src={prom} alt="Equipo desarrollando" className="media-img" loading="lazy" />
          </div>
        </article>
      </div>
    </section>
  )
}