import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section id="projetos" className="py-20 md:py-28">
      <Reveal>
        <p className="section-label mb-4">Projetos</p>
        <h2 className="font-display mb-12 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          O que está no ar.
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map((project, index) => (
          <Reveal key={project.name} delay={0.08 * index}>
            <motion.a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              className="panel panel-hover group flex flex-col gap-5 p-6 md:p-8"
            >
              <div className="flex h-36 items-center justify-center rounded-xl bg-[var(--bg-deep)]/60 p-6">
                <img
                  src={project.logo}
                  alt={project.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-semibold text-[var(--text-primary)]">
                    {project.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{project.label}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent)]">
                  Visitar
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
