import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    desc: 'Analizamos tus procesos actuales, identificamos los puntos de dolor y definimos juntos qué solución se adapta mejor a tu operación.',
  },
  {
    number: '02',
    title: 'Propuesta',
    desc: 'Diseñamos la solución a medida y te presentamos una propuesta clara con alcance, tiempos y presupuesto. Sin letra chica.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    desc: 'Construimos el software con metodologías ágiles. Integramos tus herramientas y diseñamos sistemas robustos y escalables.',
  },
  {
    number: '04',
    title: 'Entrega y Soporte',
    desc: 'Entregamos la solución funcionando en tu entorno, capacitamos a tu equipo y te acompañamos con soporte continuo para garantizar resultados.',
  },
]

export default function HowIWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="metodologia" ref={ref} className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4 block">
            Metodología
          </span>
          <h2 className="font-display text-5xl md:text-5xl font-bold tracking-tight mb-6">
            Cómo trabajamos
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-md mx-auto">
            De principio a fin, sin vueltas. Procesos claros, resultados concretos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="relative bg-surface/20 border border-border rounded-2xl p-8 h-full transition-all duration-500 hover:bg-surface/40 hover:border-accent/50">
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
