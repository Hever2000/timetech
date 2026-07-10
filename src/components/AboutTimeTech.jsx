import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const VALUES = [
  {
    title: 'Enfocados en resultados',
    desc: 'Cada línea de código que escribimos tiene un propósito: resolver un problema real de tu negocio.',
  },
  {
    title: 'Sin vueltas ni tecnicismos',
    desc: 'Trabajamos codo a codo con tu equipo en español claro. Nada de jerga técnica innecesaria.',
  },
  {
    title: 'Calidad que perdura',
    desc: 'Construimos software bien diseñado, documentado y con soporte continuo. No entregamos y nos olvidamos.',
  },
]

const STATS = [
  { number: '50+', label: 'Proyectos entregados' },
  { number: '15+', label: 'Empresas que confían' },
  { number: '98%', label: 'Satisfacción' },
  { number: '4', label: 'Profesionales en equipo' },
]

export default function AboutTimeTech() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 md:py-32 border-t border-accent/10 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,152,64,0.05)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-accent uppercase tracking-[0.2em] block mb-6">
              Sobre TimeTech
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight leading-[1.05] mb-6">
              Hacemos software que{' '}
              <span className="text-accent font-medium">realmente funciona</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
              Somos una agencia de desarrollo de software que cree en una cosa por sobre todas:
              la tecnología tiene que resolver problemas, no crearlos.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-10">
              Trabajamos con pymes y empresas argentinas para construir chatbots, páginas web,
              automatizaciones, integraciones y sistemas a medida que transforman su operación
              diaria. Nada de soluciones sobreingenierizadas — solo lo que tu negocio necesita,
              bien hecho y a tiempo.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <div className="font-display text-2xl md:text-3xl font-medium text-accent">
                    {stat.number}
                  </div>
                  <div className="text-[11px] md:text-xs text-text-secondary/70 mt-1 leading-tight uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {VALUES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="border-b border-accent/10 pb-6"
              >
                <h3 className="font-display text-base font-medium text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
