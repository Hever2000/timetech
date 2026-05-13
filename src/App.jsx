import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import BeforeAfter from './components/BeforeAfter'
import Services from './components/Services'
import HowIWork from './components/HowIWork'
import AboutMe from './components/AboutMe'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text antialiased">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <BeforeAfter />
        <Services />
        <HowIWork />
        <AboutMe />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
