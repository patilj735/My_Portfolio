import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Github, Linkedin, Download, Mail } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio.js'

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const commands = useMemo(
    () => [
      ...navLinks.map((link) => ({
        id: link.href,
        label: `Go to ${link.label}`,
        hint: link.href,
        action: () => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }),
        icon: ArrowRight,
      })),
      {
        id: 'github',
        label: 'Open GitHub',
        hint: 'external',
        action: () => window.open(profile.socials.github, '_blank'),
        icon: Github,
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        hint: 'external',
        action: () => window.open(profile.socials.linkedin, '_blank'),
        icon: Linkedin,
      },
      {
        id: 'resume',
        label: 'Download resume',
        hint: 'pdf',
        action: () => window.open(profile.resumeUrl, '_blank'),
        icon: Download,
      },
      {
        id: 'email',
        label: `Email ${profile.name.split(' ')[0]}`,
        hint: profile.email,
        action: () => window.open(`mailto:${profile.email}`),
        icon: Mail,
      },
    ],
    []
  )

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  function runCommand(cmd) {
    cmd.action()
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 px-4 pt-28 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-lg overflow-hidden rounded-2xl border border-base-border shadow-glow"
          >
            <div className="flex items-center gap-3 border-b border-base-border px-4 py-3">
              <Search size={16} className="text-ink-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section, or run a command…"
                className="w-full bg-transparent text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none"
              />
              <kbd className="rounded border border-base-border px-1.5 py-0.5 font-mono text-[10px] text-ink-muted">
                esc
              </kbd>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-ink-muted">No matches.</p>
              )}
              {filtered.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={() => runCommand(cmd)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-ink-secondary transition-colors hover:bg-base-raised hover:text-ink-primary"
                >
                  <span className="flex items-center gap-2.5">
                    <cmd.icon size={15} className="text-accent-violet" />
                    {cmd.label}
                  </span>
                  <span className="font-mono text-[11px] text-ink-muted">{cmd.hint}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
