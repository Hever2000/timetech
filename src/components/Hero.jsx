import { motion } from 'framer-motion'

const nodes = [
  { id: 'Chatbot', x: 0, y: 0, color: '#06D6A0' },
  { id: 'Web', x: 120, y: -90, color: '#3B82F6' },
  { id: 'CRM', x: 120, y: 90, color: '#8B5CF6' },
  { id: 'Data', x: -120, y: -90, color: '#F59E0B' },
  { id: 'Auto', x: -120, y: 90, color: '#EC4899' },
]

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [3, 4],
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,214,160,0.1)_0%,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-text-secondary"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Agencia de desarrollo de software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            Soluciones de software que{' '}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              transforman tu empresa.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            En TimeTech creamos soluciones a
            medida para que tu empresa ahorre tiempo, reduzca costos y escale sin límites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(6,214,160,0.55)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_50px_-12px_rgba(6,214,160,0.8)]"
            >
              Hablemos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-3 text-sm font-medium text-text transition-colors hover:bg-surface"
            >
              Ver soluciones
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-secondary"
          >
            <span>Chatbots</span>
            <span className="text-text-secondary/40">·</span>
            <span>Web</span>
            <span className="text-text-secondary/40">·</span>
            <span>Automatización</span>
            <span className="text-text-secondary/40">·</span>
            <span>Integraciones</span>
            <span className="text-text-secondary/40">·</span>
            <span>Sistemas a medida</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-accent/10 opacity-40 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-sm">
            <div className="p-0">
              <svg viewBox="0 0 400 320" className="w-full h-auto">
                <defs>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06D6A0" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#06D6A0" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06D6A0" stopOpacity="0.1" />
                  </linearGradient>
                  <radialGradient id="node-glow-1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#06D6A0" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06D6A0" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {connections.map(([i, j], idx) => (
                  <motion.line
                    key={idx}
                    x1={200 + nodes[i].x}
                    y1={160 + nodes[i].y}
                    x2={200 + nodes[j].x}
                    y2={160 + nodes[j].y}
                    stroke="url(#line-grad)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 + idx * 0.1, ease: 'easeInOut' }}
                  />
                ))}

                {nodes.map((node, idx) => (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + idx * 0.15, ease: 'backOut' }}
                  >
                    <circle
                      cx={200 + node.x}
                      cy={160 + node.y}
                      r="28"
                      fill={`${node.color}15`}
                      className="animate-glow-pulse"
                    />
                    <circle
                      cx={200 + node.x}
                      cy={160 + node.y}
                      r="12"
                      fill={node.color}
                      opacity="0.9"
                    />
                    <text
                      x={200 + node.x}
                      y={160 + node.y + 48}
                      textAnchor="middle"
                      fill="#9CA3AF"
                      fontSize="10"
                      fontFamily="Inter, sans-serif"
                    >
                      {node.id}
                    </text>
                  </motion.g>
                ))}

                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                >
                  <circle cx="200" cy="160" r="40" fill="url(#node-glow-1)" />
                </motion.g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
