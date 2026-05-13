import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    desc: 'Analizo tus procesos actuales, identifico cuellos de botella y defino qué automatizar para maximizar impacto.',
  },
  {
    number: '02',
    title: 'Desarrollo',
    desc: 'Construyo la solución con n8n, APIs e IA. Integro tus herramientas y diseño workflows robustos y escalables.',
  },
  {
    number: '03',
    title: 'Despliegue',
    desc: 'Pongo en producción, monitoreo resultados y ajusto fino. Te quedás con una solución que funciona sin mantenimiento constante.',
  },
]

export default function HowIWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="como-trabajo" ref={ref} className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-s font-bold text-accent uppercase tracking-[0.15em] mb-4 block ">
            Metodología
          </span>
          <h2 className="font-display text-5xl md:text-5xl font-bold tracking-tight mb-6">
            Cómo trabajo
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-md mx-auto">
            De principio a fin, sin vueltas. Procesos claros, resultados concretos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="relative bg-surface/20 border border-border rounded-2xl p-8 h-full transition-all duration-500 hover:bg-surface/40 hover:border-accent/50 ">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-3xl font-black text-accent/80 leading-none">
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-accent to-transparent" />
                </div>
                <h3 className="font-display text-lg font-bold text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
