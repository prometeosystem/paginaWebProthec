import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Prometeo from './components/Prometeo'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Products />
        <Prometeo />
        <Plans />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}