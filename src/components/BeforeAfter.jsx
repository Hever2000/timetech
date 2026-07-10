import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BEFORE = [
  'Tareas manuales que consumen horas del equipo',
  'Sistemas desconectados que generan caos',
  'Clientes esperando respuestas sin seguimiento',
  'Datos dispersos que nadie logra interpretar',
  'Oportunidades perdidas por falta de herramientas',
]

const AFTER = [
  'Procesos automatizados que trabajan 24/7',
  'Todos tus sistemas integrados y sincronizados',
  'Clientes atendidos al instante con IA',
  'Información clara y centralizada para decidir',
  'Herramientas diseñadas para hacer crecer tu negocio',
]

function List({ items, variant, isInView, delay = 0 }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: variant === 'before' ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + i * 0.1 }}
          className="flex items-start gap-3"
        >
          {variant === 'before' ? (
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-text-secondary/30 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-text-secondary/40">
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </span>
          ) : (
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          )}
          <span className={`text-sm md:text-base leading-relaxed ${
            variant === 'before' ? 'text-text-secondary' : 'text-text'
          }`}>
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  )
}

export default function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 md:py-32 border-t border-accent/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs text-accent uppercase tracking-[0.2em] block mb-6">
            El problema vs. La solución
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight leading-[1.05]">
            Sin TimeTech vs.{' '}
            <span className="text-accent font-medium">Con TimeTech</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-4 max-w-lg">
            De procesos manuales y sistemas desconectados a una operación automatizada y eficiente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/[0.02] border border-accent/5 rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-display text-sm font-medium text-text-secondary/60 uppercase tracking-widest mb-6">
              Sin TimeTech
            </h3>
            <List items={BEFORE} variant="before" isInView={isInView} delay={0.2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-accent/[0.02] border border-accent/15 rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-display text-sm font-medium text-accent uppercase tracking-widest mb-6">
              Con TimeTech
            </h3>
            <List items={AFTER} variant="after" isInView={isInView} delay={0.4} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
