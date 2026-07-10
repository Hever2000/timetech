import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
    <section id="metodologia" ref={ref} className="py-24 md:py-32 border-t border-accent/10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs text-accent uppercase tracking-[0.2em] block mb-6"
        >
          Metodología
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-6xl font-light tracking-tight leading-[1.05] mb-16"
        >
          Cómo trabajamos
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-accent/20" />

          <div className="space-y-12 md:space-y-16">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:grid md:grid-cols-12 md:gap-8 items-start"
              >
                <div className="hidden md:flex md:col-span-1 items-start justify-center">
                  <div className="w-[38px] h-[38px] rounded-full border border-accent/30 bg-bg flex items-center justify-center">
                    <span className="font-display text-xs font-bold text-accent">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-4 mb-2 md:mb-0">
                  <span className="md:hidden font-display text-xs text-accent mr-3">
                    {step.number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-text">
                    {step.title}
                  </h3>
                </div>

                <div className="md:col-span-7">
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
