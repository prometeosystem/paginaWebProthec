import { useEffect, useState } from 'react'

const metrics = [
  { label: 'Proyectos entregados', value: 48, detail: 'Desde PyMEs hasta startups', suffix: '+' },
  { label: 'Clientes acompañados', value: 32, detail: 'Negocios en Morelos y CDMX', suffix: '' },
  { label: 'Horas de mentoring', value: 960, detail: 'Apoyo en decisiones clave', suffix: '+' },
  { label: 'Equipos capacitados', value: 12, detail: 'Alineados con metodologías ágiles', suffix: '' }
]

export default function Stats() {
  const [counts, setCounts] = useState(metrics.map(() => 0))

  useEffect(() => {
    const duration = 1400
    const startTime = performance.now()
    let frame

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      setCounts(metrics.map(metric => Math.round(metric.value * progress)))
      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="section stats-section animatable" data-animate>
      <h3 className="section-title">Indicadores que hablan por nosotros</h3>
      <div className="stats-grid">
        {metrics.map((metric, index) => (
          <article className="stat-card" key={metric.label}>
            <span className="stat-value">
              {counts[index].toLocaleString('es-MX')}
              {metric.suffix}
            </span>
            <p className="stat-label">{metric.label}</p>
            <small>{metric.detail}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

