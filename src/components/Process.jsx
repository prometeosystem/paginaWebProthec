const STEPS = [
  {
    title: 'Demo de 10 minutos',
    text: 'Nos conectamos (o te visitamos) para mostrarte el sistema funcionando en tiempo real. Cero tecnicismos, pura operación.'
  },
  {
    title: 'Instalación y configuración',
    text: 'Pagas tu costo de instalación y en cuestión de días adaptamos el sistema a los colores, logos y necesidades exactas de tu negocio.'
  },
  {
    title: 'Arranque y soporte',
    text: 'Te capacitamos, damos de alta tus primeros productos o servicios y comenzamos a trabajar. A partir del segundo mes solo cubres tu mensualidad.'
  }
]

export default function Process() {
  return (
    <section id="proceso" className="section section-process animatable" data-animate>
      <div className="container">
        <p className="kicker">Cómo funciona</p>
        <h2 className="section-title">Tu negocio digitalizado en 3 simples pasos</h2>
        <ol className="process-steps">
          {STEPS.map((step, i) => (
            <li className="process-step" key={step.title} style={{ '--stagger': i }}>
              <span className="process-step-num" aria-hidden="true">{i + 1}</span>
              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
