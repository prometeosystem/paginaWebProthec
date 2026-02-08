import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar(){
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 800) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`nav ${menuOpen ? 'nav-menu-open' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" style={{textDecoration: 'none'}}>
          <img 
            src={logo} 
            alt="Logo Prothec" 
            style={{
              height: 40,
              width: 40,
              borderRadius: '50%',
              objectFit: 'cover',
              backgroundColor: '#fff'
            }} 
          />
          <span style={{color: '#023E7C', fontWeight: '800'}}>Prothec</span>
        </a>

        <div className="nav-right">
          <nav className="nav-links">
            <a href="#productos" onClick={closeMenu}>Productos</a>
            <a href="#prometeo" onClick={closeMenu}>Nosotros</a>
            <a href="#planes" onClick={closeMenu}>Planes</a>
            <a href="#contacto" className="btn btn-secondary" onClick={closeMenu}>Contacto</a>
            <button
              type="button"
              className="theme-toggle theme-toggle-mobile"
              onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
              aria-label="Alternar tema"
            >
              {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />} {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
            </button>
          </nav>
          <button
            type="button"
            className="theme-toggle theme-toggle-desktop"
            onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <FaMoon size={18} aria-label="Modo oscuro" /> : <FaSun size={18} aria-label="Modo claro" />}
          </button>
          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}