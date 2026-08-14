import { Award, ShieldCheck, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.jsx'
import GlowCard from './ui/GlowCard.jsx'
import { StaggerGroup, staggerItem } from './ui/Reveal.jsx'
import { motion } from 'framer-motion'

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials that back it up"
        description="Verified certifications across cloud architecture, full-stack development, and applied AI."
      />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {certifications.map((cert) => (
          <motion.div key={cert.name} variants={staggerItem}>
            <GlowCard className="flex h-full items-start gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-base-border bg-base-raised text-accent-cyan">
                <Award size={18} />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-ink-primary">{cert.name}</h3>
                <p className="mt-1 text-sm text-ink-secondary">
                  {cert.issuer} · <span className="font-mono text-xs text-ink-muted">{cert.date}</span>
                </p>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent-violet transition-colors hover:text-accent-cyan"
                >
                  <ShieldCheck size={13} />
                  Verify credential
                  <ExternalLink size={12} />
                </a>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  )
}
