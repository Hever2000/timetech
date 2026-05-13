import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const BEFORE = [
  'Tareas manuales que consumen horas',
  'Leads perdidos sin seguimiento',
  'Facturas cargadas una por una',
  'Sistemas que no se hablan entre sí',
  'Seguimientos que se olvidan',
]

const AFTER = [
  'Automatización 24/7 sin intervención',
  'Leads calificados automáticamente',
  'Facturas procesadas al instante',
  'Integraciones que fluyen solas',
  'Seguimientos automáticos multicanal',
]

function List({ items, accent, icon, isInView, delay = 0 }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: accent === 'text-red-400' ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + i * 0.1 }}
          className="flex items-start gap-3"
        >
          <span className={`mt-0.5 flex-shrink-0 ${accent}`}>{icon}</span>
          <span className="text-sm md:text-base text-text-secondary">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}

export default function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-5xl font-bold tracking-tight mb-6">
            Antes vs. Después
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-md mx-auto">
            De procesos manuales a operaciones automatizadas. El cambio es radical.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-red-950/10 border border-red-900/20 rounded-2xl p-8"
          >
            <h3 className="font-display text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-xs text-red-400">✕</span>
              Antes
            </h3>
            <List
              items={BEFORE}
              accent="text-red-400"
              icon="✕"
              isInView={isInView}
              delay={0.2}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-emerald-950/10 border border-emerald-900/20 rounded-2xl p-8"
          >
            <h3 className="font-display text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs text-emerald-400">✓</span>
              Después
            </h3>
            <List
              items={AFTER}
              accent="text-emerald-400"
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
              isInView={isInView}
              delay={0.4}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
