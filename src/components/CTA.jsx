import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contacto" ref={ref} className="py-32 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Tu empresa no necesita más{' '}
            <span className="text-accent">tareas manuales.</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto mb-10">
            Hablemos de lo que necesitás automatizar. Sin vueltas, sin
            compromiso, solo soluciones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:santi@ejemplo.com"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_32px_-8px_rgba(245,158,11,0.5)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
            Hablemos por email
          </a>
          <a
            href="https://instagram.com/santicoronelai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border hover:border-text/20 text-text-secondary hover:text-text font-medium px-8 py-3.5 rounded-xl transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
