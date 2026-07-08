import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SERVICES = [
  {
    title: 'Chatbots con IA',
    desc: 'Atención al cliente 24/7, generación de leads y agendamiento automatizado vía WhatsApp y web. Tus clientes siempre atendidos al instante.',
    benefit: 'Clientes atendidos al instante, sin demoras',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Páginas Web Profesionales',
    desc: 'Landing pages, sitios corporativos y dashboards con diseño moderno y optimización para conversión. Tu negocio online con presencia profesional.',
    benefit: 'Presencia online que convierte visitas en clientes',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Automatización de Procesos',
    desc: 'Workflows inteligentes que eliminan tareas repetitivas: facturación automática, reportes, conciliaciones y más. Tu equipo enfocado en lo estratégico.',
    benefit: 'Tu equipo dedicado a lo que realmente importa',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Integración de Sistemas',
    desc: 'Conectamos CRMs, ERPs, APIs y las herramientas que ya usás. Todos tus sistemas trabajando juntos sin fricción ni datos duplicados.',
    benefit: 'Todos tus sistemas sincronizados y fluyendo',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <circle cx="12" cy="12" r="1" />
        <path d="M20.2 20.2A10 10 0 0 0 3.8 3.8" />
        <path d="M20.2 3.8a10 10 0 0 0-16.4 16.4" />
      </svg>
    ),
  },
  {
    title: 'Sistemas a Medida',
    desc: 'Software custom diseñado desde cero para resolver los problemas específicos de tu operación. Ni más ni menos de lo que necesitás.',
    benefit: 'La solución exacta para tu operación',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Dashboards y Reportes',
    desc: 'Visualización de datos en tiempo real para tomar decisiones informadas al instante. Tu negocio medido y controlado desde un solo lugar.',
    benefit: 'Decisiones basadas en datos, siempre',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" ref={ref} className="py-24 border-t border-border/50 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,214,160,0.04)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4 block">
            Servicios
          </span>
          <h2 className="font-display text-5xl md:text-5xl font-bold tracking-tight mb-6">
            Soluciones de software para{' '}
            <span className="text-accent">problemas reales</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto">
            Cada servicio está pensado para resolver un problema concreto de tu operación.
            Esto es lo que hacemos, y lo hacemos bien.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-surface/20 border border-border rounded-2xl p-6 cursor-default transition-all duration-500 hover:bg-surface/40 hover:border-accent/20 hover:shadow-[0_0_30px_-12px_rgba(6,214,160,0.15)]"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-4 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  {service.icon}
                </div>
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
