import { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Download, Send, Check } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.jsx'
import GlowCard from './ui/GlowCard.jsx'
import Reveal from './ui/Reveal.jsx'
import MagneticButton from './ui/MagneticButton.jsx'

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: 'GitHub', href: profile.socials.github },
  { icon: Linkedin, label: 'LinkedIn', href: profile.socials.linkedin },
  { icon: MapPin, label: profile.location, href: null },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // Wire this up to your form handler of choice (Formspree, Resend, an API route, etc).
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Open to full-time roles, internships, and interesting freelance builds. The fastest way to reach me is email."
        align="center"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <GlowCard className="flex h-full flex-col justify-between p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              {contactLinks.map(({ icon: Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-base-border bg-base-raised/40 px-4 py-3 text-sm text-ink-secondary transition-colors hover:border-accent-violet/40 hover:text-ink-primary"
                  >
                    <Icon size={16} className="text-accent-violet" />
                    <span className="truncate">{label}</span>
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-base-border bg-base-raised/40 px-4 py-3 text-sm text-ink-secondary"
                  >
                    <Icon size={16} className="text-accent-violet" />
                    <span>{label}</span>
                  </div>
                )
              )}
            </div>

            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink-primary px-6 py-3 text-sm font-medium text-base-bg transition-transform"
            >
              <Download size={16} />
              Download Resume
            </MagneticButton>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <GlowCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-ink-secondary">
                  Name
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-xl border border-base-border bg-base-raised/40 px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent-violet/50 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-secondary">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="rounded-xl border border-base-border bg-base-raised/40 px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent-violet/50 focus:outline-none"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-ink-secondary">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you building?"
                  className="resize-none rounded-xl border border-base-border bg-base-raised/40 px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent-violet/50 focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-ink-primary px-6 py-3 text-sm font-medium text-base-bg transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === 'idle' && (
                  <>
                    Send message
                    <Send size={15} />
                  </>
                )}
                {status === 'sending' && 'Sending…'}
                {status === 'sent' && (
                  <>
                    Message sent
                    <Check size={15} />
                  </>
                )}
              </button>
            </form>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  )
}
