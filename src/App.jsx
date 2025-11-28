import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Prometeo from './components/Prometeo'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Products />
        <Stats />
        <Gallery />
        <Prometeo />
        <Plans />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}