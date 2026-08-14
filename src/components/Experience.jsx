import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import GlowCard from './ui/GlowCard.jsx'
import TechBadge from './ui/TechBadge.jsx'

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've put this to work"
        description="Roles where I've shipped production code, led builds, and worked alongside teams that shaped how I engineer."
      />

      <div className="mt-14 flex flex-col gap-6">
        {experience.map((role, i) => (
          <Reveal key={role.company} delay={i * 0.1}>
            <GlowCard className="p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-base-border bg-base-raised text-accent-violet">
                    <Briefcase size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-primary">
                      {role.role}
                    </h3>
                    <p className="text-sm text-accent-violet">{role.company}</p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                  <span className="font-mono text-xs text-ink-muted">{role.period}</span>
                  <span className="rounded-full border border-base-border px-2.5 py-0.5 text-[11px] text-ink-secondary">
                    {role.type}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-secondary">{role.summary}</p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {role.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {role.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
