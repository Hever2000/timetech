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
            En TimeTech creamos chatbots con IA, páginas web, automatizaciones, integraciones y sistemas a
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
            <span className="text-text-secondary/40">·</span>
            <span>Dashboards</span>
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
                  <text
                    x="200"
                    y="158"
                    textAnchor="middle"
                    fill="#06D6A0"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="Satoshi, sans-serif"
                  >
                    Time
                  </text>
                  <text
                    x="200"
                    y="172"
                    textAnchor="middle"
                    fill="#F9FAFB"
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="Satoshi, sans-serif"
                  >
                    TECH
                  </text>
                </motion.g>
              </svg>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -left-4 top-17 hidden items-center gap-3 rounded-xl border border-border bg-surface/80 backdrop-blur-xl px-3.5 py-2.5 shadow-lg sm:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <div className="text-xs">
              <div className="font-medium text-text">Chatbot IA</div>
              <div className="text-text-secondary">Cliente atendido al instante</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -right-4 top-1/5 hidden items-center gap-3 rounded-xl border border-border bg-surface/80 backdrop-blur-xl px-3.5 py-2.5 shadow-lg sm:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#06D6A0]/15 text-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <div className="text-xs">
              <div className="font-medium text-text">Dashboard</div>
              <div className="text-text-secondary">Datos en tiempo real</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -left-2 -bottom-4 hidden items-center gap-3 rounded-xl border border-border bg-surface/80 backdrop-blur-xl px-3.5 py-2.5 shadow-lg sm:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </span>
            <div className="text-xs">
              <div className="font-medium text-text">Integraciones</div>
              <div className="text-text-secondary">Sistemas conectados</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute -right-2 -bottom-10 hidden items-center gap-3 rounded-xl border border-border bg-surface/80 backdrop-blur-xl px-3.5 py-2.5 shadow-lg sm:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#F59E0B]/15 text-[#F59E0B]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </span>
            <div className="text-xs">
              <div className="font-medium text-text">Automatización</div>
              <div className="text-text-secondary">Procesos optimizados</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
