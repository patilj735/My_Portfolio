// import { motion } from 'framer-motion'
// import { Github, ArrowUpRight, Layers } from 'lucide-react'
// import GlowCard from './ui/GlowCard.jsx'
// import TechBadge from './ui/TechBadge.jsx'

// export default function ProjectCard({ project, onOpen }) {
//   return (
//     <motion.div layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}>
//       <GlowCard className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
//         <button onClick={() => onOpen(project)} className="text-left" aria-label={`Open details for ${project.name}`}>
//           {/* Screenshot placeholder */}
//           <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-base-border bg-gradient-to-br from-base-raised via-base-surface to-base-bg">
//             <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-40" />
//             <Layers size={32} className="relative text-ink-muted transition-colors group-hover:text-accent-violet" />
//             <span className="absolute bottom-3 right-3 rounded-full border border-base-border bg-base-bg/70 px-2.5 py-1 font-mono text-[10px] text-ink-muted">
//               preview
//             </span>
//           </div>
//         </button>

//         <div className="flex flex-1 flex-col p-6">
//           <div className="mb-1 flex items-center justify-between gap-2">
//             <h3 className="font-display text-lg font-semibold text-ink-primary">{project.name}</h3>
//           </div>
//           <p className="mb-3 text-xs font-medium uppercase tracking-wide text-accent-violet">
//             {project.tagline}
//           </p>
//           <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-secondary">
//             {project.description}
//           </p>

//           <div className="mb-6 flex flex-wrap gap-2">
//             {project.tech.slice(0, 4).map((t) => (
//               <TechBadge key={t} label={t} />
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={(e) => e.stopPropagation()}
//               className="inline-flex items-center gap-1.5 rounded-full border border-base-border px-3.5 py-2 text-xs font-medium text-ink-secondary transition-colors hover:border-base-borderHover hover:text-ink-primary"
//             >
//               <Github size={14} />
//               Code
//             </a>
//             <a
//               href={project.demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={(e) => e.stopPropagation()}
//               className="inline-flex items-center gap-1.5 rounded-full bg-ink-primary px-3.5 py-2 text-xs font-medium text-base-bg transition-transform hover:-translate-y-0.5"
//             >
//               Live Demo
//               <ArrowUpRight size={14} />
//             </a>
//             <button
//               onClick={() => onOpen(project)}
//               className="ml-auto text-xs font-medium text-ink-muted underline-offset-4 transition-colors hover:text-accent-violet hover:underline"
//             >
//               Details
//             </button>
//           </div>
//         </div>
//       </GlowCard>
//     </motion.div>
//   )
// }

import { motion } from "framer-motion";

import { Github, ArrowUpRight, Layers } from "lucide-react";

import GlowCard from "./ui/GlowCard.jsx";

import TechBadge from "./ui/TechBadge.jsx";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <GlowCard className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
        <button
          onClick={() => onOpen(project)}
          className="text-left"
          aria-label={`Open details for ${project.name}`}
        >
          {/* Screenshot placeholder */}

          <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-base-border bg-gradient-to-br from-base-raised via-base-surface to-base-bg">
            <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-40" />

            <Layers
              size={32}
              className="relative text-ink-muted transition-colors group-hover:text-accent-violet"
            />

            <span className="absolute bottom-3 right-3 rounded-full border border-base-border bg-base-bg/70 px-2.5 py-1 font-mono text-[10px] text-ink-muted">
              preview
            </span>
          </div>
        </button>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-1 flex items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-ink-primary">
              {project.name}
            </h3>
          </div>

          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-accent-violet">
            {project.tagline}
          </p>

          <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-secondary">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full border border-base-border px-3.5 py-2 text-xs font-medium text-ink-secondary transition-colors hover:border-base-borderHover hover:text-ink-primary"
            >
              <Github size={14} />
              Code
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink-primary px-3.5 py-2 text-xs font-medium text-base-bg transition-transform hover:-translate-y-0.5"
              >
                Live Demo
                <ArrowUpRight size={14} />
              </a>
            )}

            <button
              onClick={() => onOpen(project)}
              className="ml-auto text-xs font-medium text-ink-muted underline-offset-4 transition-colors hover:text-accent-violet hover:underline"
            >
              Details
            </button>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
