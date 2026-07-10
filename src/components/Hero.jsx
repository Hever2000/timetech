import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,152,64,0.08)_0%,transparent_70%)]" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <img
          src="/logo-timetech.PNG"
          alt=""
          className="w-[50vw] md:w-[600px] opacity-[0.12]"
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-accent/20 bg-accent/[0.05] px-4 py-1.5 text-xs text-accent tracking-wider"
        >
          Agencia de desarrollo de software
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-10 font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[100px]"
        >
          Soluciones de software
          <br />
          <span className="italic text-accent">
            que transforman
            <br />
            tu empresa.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-15 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
        >
          En TimeTech creamos soluciones a
          medida para que tu empresa ahorre tiempo, reduzca costos y escale sin límites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(200,152,64,0.5)] transition-all duration-300 hover:bg-accent-light hover:-translate-y-[1px] hover:shadow-[0_18px_50px_-12px_rgba(200,152,64,0.7)]"
          >
            Hablemos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-text-secondary hover:text-text hover:border-text/30 transition-all duration-300"
          >
            Ver soluciones
          </a>
        </motion.div>
      </div>
    </section>
  )
}
