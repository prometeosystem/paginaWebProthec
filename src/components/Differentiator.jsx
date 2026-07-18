import { FaChartLine, FaHeadset, FaRocket } from 'react-icons/fa'

const PILLARS = [
  {
    icon: FaChartLine,
    title: 'Enfoque en ventas',
    text: 'No te vendemos "sistemas bonitos": te instalamos herramientas diseñadas para que factures más y operes más rápido.'
  },
  {
    icon: FaHeadset,
    title: 'Soporte real',
    text: 'No te entregamos las llaves y nos vamos. Te capacitamos a ti y a tu equipo hasta que dominen la herramienta.'
  },
  {
    icon: FaRocket,
    title: 'Implementación rápida',
    text: 'Nada de proyectos de 6 meses. En menos de 4 semanas tu negocio ya está operando con su nuevo sistema.'
  }
]

export default function Differentiator() {
  return (
    <section id="diferenciador" className="section section-differentiator animatable" data-animate>
      <div className="container">
        <p className="kicker">Por qué Prothec</p>
        <h2 className="section-title">¿Por qué somos tu mejor aliado tecnológico?</h2>
        <p className="section-intro">
          Sabemos por qué los negocios le temen a la tecnología: las grandes agencias cobran presupuestos
          inalcanzables y los programadores independientes suelen desaparecer cuando necesitas soporte.
          En <strong>Prothec</strong> eliminamos ese riesgo.
        </p>
        <div className="differentiator-grid">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <article className="differentiator-card" key={pillar.title} style={{ '--stagger': i }}>
                <span className="differentiator-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
