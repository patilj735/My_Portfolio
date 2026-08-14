import { useRef } from 'react'

/**
 * A card with a subtle cursor-tracked spotlight and gradient border glow
 * on hover. Wraps children — used for skill, project, and cert cards.
 */
export default function GlowCard({ children, className = '', as: Tag = 'div', ...props }) {
  const ref = useRef(null)

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`card-border-glow group relative overflow-hidden rounded-2xl border border-base-border bg-base-surface/60 transition-colors duration-300 hover:border-base-borderHover ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgba(124,108,245,0.10), transparent 70%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </Tag>
  )
}
