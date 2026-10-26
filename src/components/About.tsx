import { profile } from '../data/profile'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <Reveal>
        <p className="section-label mb-4">Quem eu sou</p>
        <h2 className="font-display mb-10 max-w-2xl text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
          De brincadeira com a web a sistemas em produção.
        </h2>
      </Reveal>

      <div className="max-w-3xl space-y-6">
        {profile.about.map((paragraph, index) => (
          <Reveal key={paragraph.slice(0, 24)} delay={0.08 * (index + 1)}>
            <p className="text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
