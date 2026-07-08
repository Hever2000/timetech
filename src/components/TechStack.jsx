import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TECH = [
  { name: 'React', desc: 'Frontend moderno' },
  { name: 'Node.js', desc: 'Backend escalable' },
  { name: 'Python', desc: 'IA & Automatización' },
  { name: 'TypeScript', desc: 'Código robusto' },
  { name: 'TailwindCSS', desc: 'Diseño eficiente' },
  { name: 'PostgreSQL', desc: 'Datos confiables' },
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
          className="text-xs font-medium text-text-secondary/50 uppercase tracking-[0.15em] text-center mb-10"
        >
          Tecnologías con las que trabajamos
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {TECH.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group text-center"
            >
              <span className="font-display text-xl md:text-2xl font-bold text-text/30 group-hover:text-text/60 transition-colors duration-500">
                {item.name}
              </span>
              <p className="text-[11px] text-text-secondary/20 group-hover:text-text-secondary/40 transition-colors duration-500 mt-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
