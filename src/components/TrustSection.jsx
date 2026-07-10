import { motion } from 'framer-motion'

const TECH_STACK = [
  'React', 'Node.js', 'Python', 'PostgreSQL',
  'TypeScript', 'Docker', 'AWS', 'TailwindCSS',
  'Next.js', 'FastAPI',
]

export default function TrustSection() {
  const duplicated = [...TECH_STACK, ...TECH_STACK]

  return (
    <section className="border-t border-accent/10 py-20 overflow-hidden">
      <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
        <motion.div
          className="flex gap-16"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 8,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicated.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="shrink-0 text-xl font-bold text-text-secondary select-none"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
