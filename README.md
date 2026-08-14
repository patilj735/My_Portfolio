# Developer Portfolio

A premium, product-landing-page-style developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion — inspired by Vercel, Linear, Raycast, and Stripe.

## Stack

- React 18 + Vite
- Tailwind CSS (custom token system in `tailwind.config.js`)
- Framer Motion for animation
- Lucide React for icons

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Personalize the content

**Everything text-based lives in one file: `src/data/portfolio.js`.** Edit your name, role, bio, timeline, skills, experience, projects, certifications, and contact links there — no need to touch component code.

A few things to swap in before shipping:

1. **Resume** — drop your real PDF at `public/resume.pdf` (replace `public/resume-placeholder.txt`). The Download Resume buttons already point to `/resume.pdf`.
2. **Social links & email** — update `profile` in `src/data/portfolio.js`.
3. **Project screenshots** — each project card currently shows a placeholder tile. Add real screenshots to `src/assets/`, import them in `Projects.jsx` / `ProjectCard.jsx`, and swap the placeholder `<div>` for an `<img>`.
4. **Contact form** — the form in `Contact.jsx` currently simulates a submit. Wire `handleSubmit` up to a real backend (Formspree, Resend, a serverless API route, etc.) before relying on it.
5. **OG image** — add `public/og-image.png` (1200×630) referenced in `index.html`'s meta tags, for nice link previews on LinkedIn/Twitter/Slack.

## Structure

```
src/
  components/       All sections + shared UI (Navbar, Hero, Projects, ProjectModal, ...)
  components/ui/     Reusable primitives (GlowCard, MagneticButton, Reveal, SectionHeading, TechBadge)
  data/portfolio.js  All copy and content — single source of truth
  hooks/              useActiveSection (scroll-spy for the navbar)
  index.css          Design tokens, noise overlay, custom scrollbar, focus states
```

## Features implemented

- Full-screen animated hero with magnetic CTAs
- Sticky glass navbar with scroll-spy active-section indicator
- ⌘K / Ctrl+K command palette for quick navigation
- Custom cursor with hover-aware states (auto-disabled on touch devices)
- Ambient background: aurora gradient mesh, grid pattern, starfield canvas, cursor spotlight, floating orbs
- Skills grid, animated timeline, filterable project grid with detail modals
- Scroll-triggered reveal + stagger animations throughout (Framer Motion)
- Reduced-motion support, visible keyboard focus states, semantic HTML
- SEO meta tags (Open Graph, Twitter Card, description, keywords)

## Deploying to Vercel

**Option A — CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts; Vercel auto-detects the Vite framework preset.

**Option B — Git integration (recommended)**

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`. Vercel fills these in automatically.
4. Click **Deploy**. You'll get a `*.vercel.app` URL; add a custom domain from the project's Settings → Domains if you have one.

Every push to your main branch will auto-deploy; pull requests get their own preview URLs.

## Making it hit harder for recruiters in 2026

- **Put metrics on everything.** Recruiters skim. "Cut manual QA time 40%" beats "improved testing." The project data model already has a `metrics` field for this per project — fill it with real numbers.
- **Link a live, working demo for every project**, not just GitHub. A recruiter who can click and use something in 10 seconds remembers you.
- **Record a 60–90 second Loom/video walkthrough** of your best project and link it in that project's modal — video is still underused on dev portfolios and stands out.
- **Keep the resume PDF and the site in sync.** Mismatched dates or titles between the two is a common, avoidable red flag.
- **Add a "Now" line near the hero** (one sentence on what you're currently building or learning) — signals momentum over a static bio.
- **Ship it on a custom domain**, not the default `*.vercel.app` — `yourname.dev` or `.com` reads as more intentional.
- **Run Lighthouse before you share the link.** A slow or inaccessible portfolio undercuts a "I care about performance" narrative fast.
- **Open-source at least one project properly** — a real README, setup instructions, and a couple of commits with meaningful messages. Recruiters and engineers do click through to GitHub.
