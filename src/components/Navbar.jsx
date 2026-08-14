import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Command, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace('#', '')))
  const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavClick(href) {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? 'glass border border-base-border shadow-glow-sm' : 'border border-transparent'
        }`}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2 py-3 font-display text-sm font-semibold tracking-tight text-ink-primary"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan text-xs font-bold text-black">
            {profile.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </span>
          {profile.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isActive ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-base-raised"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
            }
            className="hidden items-center gap-1.5 rounded-full border border-base-border px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-base-borderHover hover:text-ink-secondary sm:flex"
          >
            <Command size={12} />
            {isMac ? '⌘K' : 'Ctrl K'}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-base-border text-ink-secondary md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mx-4 mt-2 overflow-hidden rounded-2xl border border-base-border md:hidden"
          >
            <div className="flex flex-col p-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="rounded-xl px-4 py-3 text-sm text-ink-secondary transition-colors hover:bg-base-raised hover:text-ink-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
