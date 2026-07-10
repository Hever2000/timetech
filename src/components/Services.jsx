import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SERVICES = [
  {
    title: 'Chatbots con IA',
    desc: 'Atención al cliente 24/7, generación de leads y agendamiento automatizado vía WhatsApp y web. Tus clientes siempre atendidos al instante.',
    benefit: 'Clientes atendidos al instante, sin demoras',
  },
  {
    title: 'Páginas Web Profesionales',
    desc: 'Landing pages, sitios corporativos y dashboards con diseño moderno y optimización para conversión. Tu negocio online con presencia profesional.',
    benefit: 'Presencia online que convierte visitas en clientes',
  },
  {
    title: 'Automatización de Procesos',
    desc: 'Workflows inteligentes que eliminan tareas repetitivas: facturación automática, reportes, conciliaciones y más. Tu equipo enfocado en lo estratégico.',
    benefit: 'Tu equipo dedicado a lo que realmente importa',
  },
  {
    title: 'Integración de Sistemas',
    desc: 'Conectamos CRMs, ERPs, APIs y las herramientas que ya usás. Todos tus sistemas trabajando juntos sin fricción ni datos duplicados.',
    benefit: 'Todos tus sistemas sincronizados y fluyendo',
  },
  {
    title: 'Sistemas a Medida',
    desc: 'Software custom diseñado desde cero para resolver los problemas específicos de tu operación. Ni más ni menos de lo que necesitás.',
    benefit: 'La solución exacta para tu operación',
  },
  {
    title: 'Dashboards y Reportes',
    desc: 'Visualización de datos en tiempo real para tomar decisiones informadas al instante. Tu negocio medido y controlado desde un solo lugar.',
    benefit: 'Decisiones basadas en datos, siempre',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" ref={ref} className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs text-accent uppercase tracking-[0.2em] block mb-6"
        >
          Servicios
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-6xl font-light tracking-tight leading-[1.05] mb-6"
        >
          Soluciones de software
          <br />
          para problemas reales.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary text-sm md:text-base max-w-lg mb-16"
        >
          Cada servicio está pensado para resolver un problema concreto de tu operación.
          Esto es lo que hacemos, y lo hacemos bien.
        </motion.p>

        <div className="space-y-0">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group border-t border-accent/10 last:border-b last:border-accent/10"
            >
              <div className="py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <span className="font-display text-4xl md:text-5xl font-bold text-accent/[0.12] leading-none md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-xl md:text-2xl font-medium text-text group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs text-accent/70">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {service.benefit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
