import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="relative border-t border-base-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-ink-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="flex items-center gap-1.5 font-mono">
          Built with React + Tailwind · Deployed on Vercel
        </p>
      </div>
    </footer>
  )
}
