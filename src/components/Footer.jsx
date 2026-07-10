export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[11px] text-text-secondary/60 tracking-wider uppercase">
          © {new Date().getFullYear()} TimeTech
        </span>
        <a
          href="mailto:hola@timetech.dev"
          className="text-[11px] text-text-secondary/60 hover:text-text-secondary transition-colors tracking-wider uppercase"
        >
          hola@timetech.dev
        </a>
      </div>
    </footer>
  )
}
