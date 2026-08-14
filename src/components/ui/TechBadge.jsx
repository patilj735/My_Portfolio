export default function TechBadge({ label }) {
  return (
    <span className="rounded-full border border-base-border bg-base-raised/80 px-2.5 py-1 font-mono text-[11px] text-ink-secondary transition-colors group-hover:border-base-borderHover">
      {label}
    </span>
  )
}
