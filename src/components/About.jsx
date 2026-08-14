import { CheckCircle2 } from 'lucide-react'
import { about } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal, { StaggerGroup, staggerItem } from './ui/Reveal.jsx'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="About"
        title="Product-minded engineer, systems-minded thinker"
        description={about.summary}
      />

      <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-5">
        <Reveal className="lg:col-span-2" delay={0.1}>
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-ink-secondary">
            What I focus on
          </h3>
          <StaggerGroup className="flex flex-col gap-4">
            {about.focus.map((line) => (
              <motion.div key={line} variants={staggerItem} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-violet" />
                <span className="text-sm leading-relaxed text-ink-secondary">{line}</span>
              </motion.div>
            ))}
          </StaggerGroup>
        </Reveal>

        {/* <div className="lg:col-span-3">
          <h3 className="mb-8 font-display text-sm font-semibold uppercase tracking-wider text-ink-secondary">
            My journey
          </h3>
          <div className="relative flex flex-col gap-10 border-l border-base-border pl-8">
            {about.timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.08} className="relative">
                <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-base-bg bg-accent-violet shadow-[0_0_0_3px_rgba(124,108,245,0.15)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
                  {entry.year}
                </span>
                <h4 className="mt-1 font-display text-lg font-semibold text-ink-primary">
                  {entry.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                  {entry.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
