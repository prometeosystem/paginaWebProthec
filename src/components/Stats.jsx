import nirshop from '../assets/nirshop.png'

const companies = [
  {
    img: 'http://34.68.52.27/assets/logo.jpeg',
    alt: 'Cafetería Zona 2',
    name: 'Cafetería Zona 2',
    url: 'http://34.68.52.27/',
  },
  {
    img: nirshop,
    alt: "Nir's Shops",
    name: "Nir's Shops",
    url: 'http://82.180.161.33/sistema/catalogo',
  },
]

export default function Stats() {
  return (
    <section className="section stats-section animatable" data-animate>
      <h3 className="section-title">Los negocios con los que hemos trabajado</h3>
      <div
        className="stats-grid"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {companies.map((company, index) => (
          <a
            key={index}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <article
              className="stat-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem 2rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                overflow: 'hidden',
                minWidth: '180px',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80px',
                marginBottom: '1rem',
              }}
            >
              <img
                src={company.img}
                alt={company.alt}
                style={{
                  maxWidth: '120px',
                  maxHeight: '80px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
                loading="lazy"
              />
            </div>
            <p
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: '1rem',
                color: 'var(--text)',
              }}
            >
              {company.name}
            </p>
          </article>
          </a>
        ))}
      </div>
    </section>
  )
}

