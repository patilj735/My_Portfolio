import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ArrowUpRight, Layers, TrendingUp } from 'lucide-react'
import TechBadge from './ui/TechBadge.jsx'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-base-border shadow-glow"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-base-border bg-base-bg/60 text-ink-secondary transition-colors hover:text-ink-primary"
            >
              <X size={16} />
            </button>

            <div className="relative flex aspect-[16/8] w-full items-center justify-center overflow-hidden border-b border-base-border bg-gradient-to-br from-base-raised via-base-surface to-base-bg">
              <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-40" />
              <Layers size={40} className="relative text-ink-muted" />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-ink-primary">{project.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-accent-violet">
                {project.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{project.description}</p>

              {project.metrics && (
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-base-border bg-base-raised/60 p-4">
                      <div className="flex items-center gap-1.5 text-accent-cyan">
                        <TrendingUp size={13} />
                        <span className="font-mono text-[11px] uppercase tracking-wide">{m.label}</span>
                      </div>
                      <p className="mt-1 font-display text-xl font-semibold text-ink-primary">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-ink-secondary">
                  Architecture overview
                </h4>
                <p className="text-sm leading-relaxed text-ink-secondary">{project.architecture}</p>
              </div>

              <div className="mt-8">
                <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-ink-secondary">
                  Features
                </h4>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-ink-secondary">
                  Challenges solved
                </h4>
                <p className="text-sm leading-relaxed text-ink-secondary">{project.challenges}</p>
              </div>

              <div className="mt-8">
                <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-ink-secondary">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-base-border pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-base-border px-4 py-2.5 text-sm font-medium text-ink-secondary transition-colors hover:border-base-borderHover hover:text-ink-primary"
                >
                  <Github size={15} />
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink-primary px-4 py-2.5 text-sm font-medium text-base-bg transition-transform hover:-translate-y-0.5"
                >
                  Live Demo
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
