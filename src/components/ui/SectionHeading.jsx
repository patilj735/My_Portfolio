import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
        {eyebrow && (
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed text-ink-secondary">{description}</p>
        )}
      </div>
    </Reveal>
  )
}
