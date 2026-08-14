import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * A button that gently pulls toward the cursor on hover ("magnetic" effect),
 * used for primary CTAs in the hero and contact sections.
 */
export default function MagneticButton({ children, className = '', strength = 18, as: Tag = 'button', ...props }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const MotionTag = motion[Tag] || motion.button

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength
    setPos({ x, y })
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 })
  }

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
