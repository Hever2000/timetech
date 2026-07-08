export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-text-secondary/50">
          © {new Date().getFullYear()}{' '}
          <span className="text-text-secondary/70">TimeTech</span>
        </span>
        <div className="flex items-center gap-6">
          <a
            href="mailto:hola@timetech.dev"
            className="text-xs text-text-secondary/50 hover:text-text-secondary/70 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
