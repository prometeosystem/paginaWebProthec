import { useEffect } from 'react'
import { subscribeScrollDepth50 } from './analytics.js'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Problem from './components/Problem'
import Differentiator from './components/Differentiator'
import Products from './components/Products'
import Automations from './components/Automations'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-wrap">
      <Navbar />
      <Hero />
      <main className="main-content">
        <Problem />
        <Differentiator />
        <Products />
        <Automations />
        <Process />
        <Testimonials />
        <Faq />
        <FinalCTA />
        <LeadForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
