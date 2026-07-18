import { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import { FaSun, FaMoon, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { trackCtaClick } from '../analytics.js'
import { whatsappUrl, WHATSAPP_MSG_DEMO } from '../config.js'

const WHATSAPP_URL = whatsappUrl(WHATSAPP_MSG_DEMO)

const NAV_LINKS = [
  { href: '#problema', label: 'El problema' },
  { href: '#productos', label: 'Soluciones' },
  { href: '#proceso', label: 'Cómo funciona' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' }
]

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme) return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav-scrolled' : ''}${menuOpen ? ' nav-menu-open' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo Prothec" width="40" height="40" />
          <span className="brand-text">Prothec</span>
        </a>

        <nav className="nav-links" aria-label="Secciones de la página">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-whatsapp-nav"
            onClick={() => trackCtaClick('navbar')}
          >
            <FaWhatsapp size={18} /> <span className="btn-whatsapp-nav-text">Solicitar demostración</span>
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
            aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
          >
            {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
          </button>
          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}
