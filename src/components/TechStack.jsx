import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SOLUTIONS = [
  { name: 'Chatbots', desc: 'Atención al cliente 24/7 vía WhatsApp y web' },
  { name: 'Web', desc: 'Landing pages y sitios corporativos profesionales' },
  { name: 'Automatización', desc: 'Workflows inteligentes que eliminan tareas repetitivas' },
  { name: 'Integraciones', desc: 'CRMs, ERPs y APIs sincronizados sin fricción' },
  { name: 'Sistemas a Medida', desc: 'Software custom diseñado para tu operación' },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium text-text-secondary/50 uppercase tracking-[0.15em] text-center mb-12"
        >
          Soluciones que ofrecemos
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {SOLUTIONS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col items-center text-center"
            >
              <span className="font-display text-lg md:text-xl font-bold text-text/40 group-hover:text-accent transition-colors duration-500">
                {item.name}
              </span>
              <p className="text-[12px] text-text-secondary/30 group-hover:text-text-secondary/60 transition-colors duration-500 mt-2 leading-relaxed max-w-[160px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
