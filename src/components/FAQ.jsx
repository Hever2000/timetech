import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <div className="border-b border-accent/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="font-display text-sm md:text-base font-medium text-text group-hover:text-accent transition-colors duration-300 pr-4">
          {item.q}
        </span>
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="flex-shrink-0 text-text-secondary/50 group-hover:text-accent transition-colors duration-300"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
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
            <p className="text-sm text-text-secondary pb-5 md:pb-6 leading-relaxed pr-8">
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

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-accent/10">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-xs text-accent uppercase tracking-[0.2em] block mb-6">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight leading-[1.05] mb-4">
          Preguntas frecuentes
        </h2>
        <p className="text-text-secondary text-sm md:text-base mb-12">
          Todo lo que necesitás saber antes de empezar.
        </p>

        <div>
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
