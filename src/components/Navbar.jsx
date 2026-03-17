import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { FaSun, FaMoon, FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '527772097203'
const WHATSAPP_MSG = 'Hola Prothec, me interesa ver una demostración rápida para mi negocio.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`

export default function Navbar() {
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
    <header className="nav nav-minimal">
      <div className="container nav-inner">
        <a href="#top" className="brand" style={{ textDecoration: 'none' }}>
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
          <span className="brand-text">Prothec</span>
        </a>

        <div className="nav-right">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-whatsapp-nav"
          >
            <FaWhatsapp size={18} /> <span className="btn-whatsapp-nav-text">Solicitar demostración</span>
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <FaMoon size={18} aria-label="Modo oscuro" /> : <FaSun size={18} aria-label="Modo claro" />}
          </button>
        </div>
      </div>
    </header>
  )
}
