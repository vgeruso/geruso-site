import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'

export function Articles() {
  return (
    <section id="escrita" className="py-20 md:py-28">
      <Reveal>
        <p className="section-label mb-4">Escrita</p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Artigos técnicos
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              Anotações e reflexões sobre engenharia, backend e o que for aprendendo no caminho.
            </p>
          </div>
          <motion.a
            href={profile.articles.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex shrink-0 items-center gap-2 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-5 py-3 text-sm font-semibold text-[var(--silver)] transition-colors hover:border-[rgba(103,232,249,0.4)] hover:text-[var(--accent)]"
          >
            {profile.articles.label}
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
      </Reveal>
    </section>
  )
}
