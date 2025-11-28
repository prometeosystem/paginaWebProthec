import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Navbar(){
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

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
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
          aria-label="Alternar tema"
        >
          {theme === 'light' ? <FaMoon size={18} aria-label="Modo oscuro" /> : <FaSun size={18} aria-label="Modo claro" />}
        </button>
      </div>
    </header>
  )
}