import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(canHover)
    if (!canHover) return

    document.body.classList.add('custom-cursor-active')

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let raf

    function handleMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
      const target = e.target
      setIsPointer(Boolean(target.closest?.('a, button, [role="button"], input, textarea')))
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }
      raf = requestAnimationFrame(animateRing)
    }

    window.addEventListener('pointermove', handleMove)
    animateRing()

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('pointermove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200 ${
          isPointer ? 'h-9 w-9 border-accent-violet/70' : 'h-6 w-6 border-white/25'
        }`}
      />
    </>
  )
}
