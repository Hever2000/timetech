import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import HowIWork from './components/HowIWork'
import AboutTimeTech from './components/AboutTimeTech'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <BeforeAfter />
        <HowIWork />
        <AboutTimeTech />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
