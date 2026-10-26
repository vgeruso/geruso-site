import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <header className="relative flex min-h-[100svh] flex-col justify-center py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-start gap-8 md:gap-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 16, delay: 0.15 }}
          className="flex items-center gap-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-2.5 shadow-[0_0_40px_rgba(103,232,249,0.08)] md:h-20 md:w-20">
            <img
              src="/geruso_logo.png"
              alt="Geruso"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="section-label">Geruso</span>
        </motion.div>

        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 font-display text-xl font-medium text-[var(--text-secondary)] md:text-2xl">
            {profile.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
            {profile.tagline}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href={profile.socialQuick.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--silver)] transition-colors hover:border-[rgba(103,232,249,0.35)] hover:text-[var(--accent)]"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
            GitHub
          </motion.a>
          <motion.a
            href={profile.socialQuick.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--silver)] transition-colors hover:border-[rgba(103,232,249,0.35)] hover:text-[var(--accent)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </motion.a>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-0 text-xs font-medium tracking-[0.2em] text-[var(--text-muted)] uppercase"
      >
        role para explorar
      </motion.p>
    </header>
  )
}
