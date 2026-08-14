import { useEffect, useRef } from 'react'

/**
 * The site's ambient atmosphere: a fixed-position layer combining a soft
 * aurora gradient mesh, a faint grid, drifting stars, and a spotlight that
 * follows the cursor. Sits behind all content, pointer-events disabled.
 */
export default function AmbientBackground() {
  const spotlightRef = useRef(null)
  const starCanvasRef = useRef(null)

  // Cursor-reactive spotlight glow
  useEffect(() => {
    const el = spotlightRef.current
    if (!el) return

    let raf = null
    function handleMove(e) {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(124,108,245,0.06), transparent 70%)`
      })
    }
    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Lightweight animated starfield
  useEffect(() => {
    const canvas = starCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width, height, stars, animId
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      const count = Math.min(90, Math.floor((width * height) / 22000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.2,
        speed: Math.random() * 0.15 + 0.02,
        twinkle: Math.random() * Math.PI * 2,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      stars.forEach((s) => {
        s.twinkle += 0.015
        const alpha = 0.25 + Math.abs(Math.sin(s.twinkle)) * 0.45
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 200, 255, ${alpha})`
        ctx.fill()
        if (!prefersReducedMotion) {
          s.y -= s.speed
          if (s.y < 0) s.y = height
        }
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base aurora gradient mesh */}
      <div className="absolute inset-0 bg-aurora-gradient" />

      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_10%,transparent_75%)]" />

      {/* Starfield */}
      <canvas ref={starCanvasRef} className="absolute inset-0 opacity-70" />

      {/* Floating gradient orbs */}
      <div className="absolute -left-32 top-24 h-96 w-96 animate-float rounded-full bg-accent-violet/20 blur-[110px]" />
      <div className="absolute right-[-6rem] top-[40%] h-[28rem] w-[28rem] animate-float-delay rounded-full bg-accent-blue/15 blur-[130px]" />
      <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 animate-float rounded-full bg-accent-cyan/10 blur-[120px]" />

      {/* Cursor spotlight */}
      <div ref={spotlightRef} className="absolute inset-0 transition-[background] duration-100" />
    </div>
  )
}
