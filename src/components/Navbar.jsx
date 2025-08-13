import logo from '../assets/logo.png'

export default function Navbar(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" style={{textDecoration: 'none'}}>
          <img 
            src={logo} 
            alt="Logo Prothec" 
            style={{
              height: 40,       // tamaño del logo
              width: 40,        // mismo que la altura
              borderRadius: '50%', // forma circular
              objectFit: 'cover', // ajusta imagen dentro
              backgroundColor: '#fff' // opcional, para fondo blanco
            }} 
          />
          <span style={{color: '#023E7C', fontWeight: '800'}}>Prothec</span>
        </a>

        <nav className="nav-links">
          <a href="#productos">Productos</a>
          <a href="#prometeo">Nosotros</a>
          <a href="#planes">Planes</a>
          <a href="#contacto" className="btn btn-secondary">Contacto</a>
        </nav>
      </div>
    </header>
  )
}