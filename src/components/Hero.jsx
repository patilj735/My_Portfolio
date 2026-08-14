import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import MagneticButton from './ui/MagneticButton.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <motion.div variants={container} initial="hidden" animate="show" className="flex max-w-3xl flex-col items-center">
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-border bg-base-surface/60 px-4 py-1.5 font-mono text-xs text-ink-secondary"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan" />
          </span>
          Available for new opportunities
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-primary sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-5 font-mono text-sm uppercase tracking-[0.18em] text-accent-violet sm:text-base">
          {profile.role}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <MagneticButton
            as="a"
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-ink-primary px-6 py-3 text-sm font-medium text-base-bg shadow-glow transition-transform"
          >
            View Projects
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>

          <MagneticButton
            as="a"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-base-border bg-base-surface/60 px-6 py-3 text-sm font-medium text-ink-primary transition-colors hover:border-base-borderHover"
          >
            <Download size={16} />
            Download Resume
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-ink-muted transition-colors hover:text-ink-secondary"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  )
}
