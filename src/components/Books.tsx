import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'

export function Books() {
  return (
    <section id="leitura" className="py-20 md:py-28">
      <Reveal>
        <p className="section-label mb-4">Leitura</p>
        <h2 className="font-display mb-12 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          Livros que recomendo.
        </h2>
      </Reveal>

      <div className="grid items-stretch gap-5 md:grid-cols-3">
        {profile.books.map((book, index) => (
          <Reveal key={book.title} delay={0.08 * index} className="h-full">
            <motion.a
              href={book.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              className="panel panel-hover group flex h-full flex-col gap-4 p-6 md:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
                {book.focus}
              </p>
              <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--text-primary)] md:text-2xl">
                {book.title}
              </h3>
              <div className="mt-auto flex items-end justify-between gap-3">
                <p className="text-sm text-[var(--text-muted)]">{book.author}</p>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent)]">
                  Comprar
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
