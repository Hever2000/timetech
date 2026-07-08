import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FAQS = [
  {
    q: '¿Qué tipo de proyectos hacen?',
    a: 'Todo tipo de soluciones de software: chatbots con IA, páginas web, automatizaciones, integraciones entre sistemas, dashboards y desarrollo a medida. Si tu problema se resuelve con software, lo construimos.',
  },
  {
    q: '¿Trabajan con empresas argentinas?',
    a: 'Sí, nuestro foco principal son pymes y empresas argentinas. Conocemos el contexto local, los desafíos operativos del día a día y las herramientas que se usan acá.',
  },
  {
    q: '¿Cuánto tiempo toma desarrollar un proyecto?',
    a: 'Depende de la complejidad. Una landing page puede estar lista en días, mientras que un sistema a medida puede llevar semanas. En el diagnóstico inicial te damos un timeline claro y realista.',
  },
  {
    q: '¿Las soluciones son personalizadas?',
    a: 'Siempre. Cada proyecto se diseña desde cero para tu operación específica. No vendemos plantillas genéricas — cada solución es única porque cada negocio también lo es.',
  },
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'Para nada. Nosotros nos encargamos de todo: diagnóstico, desarrollo, implementación y soporte. Solo necesitás contarnos tu problema y definir los objetivos con nosotros.',
  },
  {
    q: '¿Dan mantenimiento después de entregar?',
    a: 'Sí. Ofrecemos planes de soporte y mantenimiento continuo para garantizar que el software funcione siempre al 100%. Nos ocupamos de actualizaciones, monitoreo y ajustes.',
  },
]

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border/50 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left transition-colors duration-300 hover:text-accent group"
      >
        <span className="font-display text-sm md:text-base font-medium text-text group-hover:text-accent transition-colors duration-300 pr-4">
          {item.q}
        </span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-text-secondary"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-secondary pb-5 leading-relaxed pr-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" ref={ref} className="py-24 border-t border-border/50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium text-accent uppercase tracking-[0.15em] mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Todo lo que necesitás saber antes de empezar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-surface/30 border border-border rounded-2xl p-6"
        >
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
