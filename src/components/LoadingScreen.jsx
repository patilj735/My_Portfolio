import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base-bg"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-10 w-10">
              <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-accent-violet border-r-accent-blue" />
              <span className="absolute inset-2 rounded-full bg-base-bg" />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted"
            >
              loading
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
