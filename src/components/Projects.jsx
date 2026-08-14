import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectFilters } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.categories.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built end to end"
          description="A selection of full-stack, AI, and cloud projects — each shipped, deployed, and open source."
        />

        <div className="flex flex-wrap gap-2 rounded-full border border-base-border bg-base-surface/60 p-1.5">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                filter === f ? 'text-base-bg' : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-ink-primary"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
