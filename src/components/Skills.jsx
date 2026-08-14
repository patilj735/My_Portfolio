import {
  Code2,
  Server,
  Cloud,
  Database,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { skills } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.jsx'
import GlowCard from './ui/GlowCard.jsx'
import { StaggerGroup, staggerItem } from './ui/Reveal.jsx'
import { motion } from 'framer-motion'

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Cloud: Cloud,
  Databases: Database,
  'AI Tools': Sparkles,
  Programming: Terminal,
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Skills"
        title="The stack behind the work"
        description="Tools I reach for daily, grouped by where they sit in the stack — from interface to infrastructure."
      />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, items }) => {
          const Icon = categoryIcons[category] ?? Code2
          return (
            <motion.div key={category} variants={staggerItem}>
              <GlowCard className="h-full p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-border bg-base-raised text-accent-violet">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink-primary">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-base-border bg-base-bg/40 px-3 py-1.5 text-xs text-ink-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-violet/40 hover:text-ink-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          )
        })}
      </StaggerGroup>
    </section>
  )
}
