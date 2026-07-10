import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mobileOpen
          ? 'bg-bg'
          : scrolled
            ? 'bg-bg/70 backdrop-blur-xl border-b border-accent/10'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-medium tracking-tight flex items-center gap-2">
          <img src="/logo-timetech.PNG" alt="" className="h-6 w-auto" />
          <span className="text-text">TIMETECH</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-medium text-accent border border-accent/40 hover:bg-accent hover:text-bg px-5 py-2 rounded-full transition-all duration-300"
          >
            Hablemos
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[3px]"
          aria-label="Menú"
        >
          <span
            className={`w-[18px] h-[2px] bg-text rounded transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`w-[18px] h-[2px] bg-text rounded transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-[18px] h-[2px] bg-text rounded transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-16 bg-bg z-40"
          >
            <div className="px-6 py-12 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-light text-text hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-accent/20">
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block text-sm font-medium bg-accent text-bg px-6 py-3 rounded-full transition-all"
                >
                  Hablemos
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
