import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SERVICES = [
  {
    title: 'Agentes IA para WhatsApp',
    desc: 'ChatBots inteligentes para atención al cliente 24/7 y sistemas de agendamiento.',
    benefit: 'Atención 24/7 sin perder calidad',
    icon: '💬',
  },
  {
    title: 'Procesamiento de Facturas',
    desc: 'Extracción, validación, organización y registro automático de facturas con IA.',
    benefit: '0 carga manual de datos',
    icon: '📄',
  },
  {
    title: 'Integración de Sistemas',
    desc: 'Conexión entre CRMs, ERPs, APIs y herramientas que usás diariamente.',
    benefit: 'Todos tus sistemas realmente conectados',
    icon: '🔗',
  },
  {
    title: 'Generación/Calificación de Leads',
    desc: ' Búsqueda, calificación automática y scoring de leads con IA.',
    benefit: 'Leads calificados sin fricción',
    icon: '🎯',
  },
  {
    title: 'Automatización Administrativa',
    desc: 'Reportes de todo tipo y tareas repetitivas sin intervención manual. ( Ej: reportes de lo hablado en reuniones )',
    benefit: 'Tu equipo enfocado en lo importante',
    icon: '⚙️',
  },
  {
    title: 'Sistemas RAG',
    desc: 'Sistemas con acceso instantáneo a datos clave de tu empresa sin búsquedas manuales. Integrado en chatbots con IA.',
    benefit: 'Conocimiento de tu empresa al alcance de la mano',
    icon: '📊',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" ref={ref} className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-s font-bold text-accent uppercase tracking-[0.15em] mb-4 block">
            Servicios
          </span>
          <h2 className="font-display text-5xl md:text-5xl font-bold tracking-tight mb-6">
            Automatización aplicada a{' '}
            <span className="text-accent">negocios reales</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto">
            Estos son algunos ejemplos o tipos de soluciones que diseño para mis clientes. Software diseñado a medida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-surface/20 border border-border rounded-2xl p-6 cursor-default transition-all duration-500 hover:bg-surface/40 hover:border-accent/20 hover:shadow-[0_0_30px_-12px_rgba(245,158,11,0.15)]"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-2xl mb-4 block">{service.icon}</span>
                <h3 className="font-display text-base font-bold text-text mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {service.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-medium text-accent pt-3 border-t border-border/50">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {service.benefit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
