import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Products from './sections/Products'
import WhyChooseUs from './sections/WhyChooseUs'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="app" style={{ minHeight: '100vh', background: '#050507' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  )
}

export default App
