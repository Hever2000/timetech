import { motion } from 'framer-motion'
import heroWorkflow from '../assets/hero-workflow.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12)_0%,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Left: Copy */}
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
            AI Automation Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            Automatiza los procesos de tu empresa con{' '}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              automatización e IA.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            Diseño automatizaciones y agentes IA personalizados para empresas argentinas que
            quieren reducir carga operativa, integrar sistemas y escalar procesos sin contratar
            más personal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(245,158,11,0.55)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_50px_-12px_rgba(245,158,11,0.8)]"
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
            <span>n8n</span>
            <span className="text-text-secondary/30">·</span>
            <span>Claude</span>
            <span className="text-text-secondary/30">·</span>
            <span>OpenAI</span>
            <span className="text-text-secondary/30">·</span>
            <span>Supabase</span>
            <span className="text-text-secondary/30">·</span>
            <span>WhatsApp API</span>
            <span className="text-text-secondary/30">·</span>
            <span>MCP</span>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-accent/15 opacity-40 blur-3xl" />

          {/* Main workflow card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-sm">
            <div className="p-0">
              <img
                src={heroWorkflow}
                alt="Workflow de automatización n8n con agente IA conectado a WhatsApp y Supabase"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Floating card: WhatsApp */}
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
              <div className="font-medium text-text">WhatsApp</div>
              <div className="text-text-secondary">+1 mensaje recibido</div>
            </div>
          </motion.div>

          {/* Floating card: Agente IA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -right-4 top-1/5 hidden items-center gap-3 rounded-xl border border-border bg-surface/80 backdrop-blur-xl px-3.5 py-2.5 shadow-lg sm:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <div className="text-xs">
              <div className="font-medium text-text">Agente IA</div>
              <div className="text-text-secondary">Procesando intención</div>
            </div>
          </motion.div>

          {/* Floating card: Supabase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -left-2 -bottom-4 hidden items-center gap-3 rounded-xl border border-border bg-surface/80 backdrop-blur-xl px-3.5 py-2.5 shadow-lg sm:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </span>
            <div className="text-xs">
              <div className="font-medium text-text">Supabase</div>
              <div className="text-text-secondary">Lead guardado</div>
            </div>
          </motion.div>

          {/* Floating card: Acción ejecutada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute -right-2 -bottom-10 hidden items-center gap-3 rounded-xl border border-border bg-surface/80 backdrop-blur-xl px-3.5 py-2.5 shadow-lg sm:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#10B981]/15 text-[#10B981]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </span>
            <div className="text-xs">
              <div className="font-medium text-text">Acción ejecutada</div>
              <div className="text-text-secondary">Turno agendado · 11:30</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
