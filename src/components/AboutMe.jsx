import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const HIGHLIGHTS = [
  'AI Automation Developer',
  'Background Full-Stack',
  'Automatización con IA aplicada',
  'Ingeniería moderna',
  'Soluciones personalizadas',
]

export default function AboutMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl" />
              <div className="relative w-full h-full rounded-2xl bg-surface border border-border overflow-hidden flex items-center justify-center">
                <span className="font-display text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-[0.15em] mb-4 block">
              Sobre mí
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ingeniería moderna para{' '}
              <span className="text-accent">problemas reales</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
              Soy Santi, AI Automation Developer. Combino mi background Full-Stack
              con inteligencia artificial para diseñar soluciones de automatización
              que resuelven problemas operativos concretos. No vendo tecnología por
              venderla — cada automatización está pensada para el contexto exacto de
              tu negocio.
            </p>
            <div className="flex flex-wrap gap-3">
              {HIGHLIGHTS.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  className="text-xs font-medium bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 rounded-full"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
