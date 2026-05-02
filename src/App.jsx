import { useEffect } from 'react'
import logo from './assets/logo-sin-fondo.png'
import { subscribeScrollDepth50 } from './analytics.js'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Problem from './components/Problem'
import Differentiator from './components/Differentiator'
import Products from './components/Products'
import Process from './components/Process'
import FinalCTA from './components/FinalCTA'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => subscribeScrollDepth50(), [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-wrap">
      <div className="page-logo-deco-wrap" aria-hidden="true">
        <div className="page-logo-deco">
          <img src={logo} alt="" />
        </div>
      </div>
      <Navbar />
      <Hero />
      <main className="container main-content">
        <Problem />
        <Differentiator />
        <Products />
        <Process />
        <FinalCTA />
        <LeadForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
