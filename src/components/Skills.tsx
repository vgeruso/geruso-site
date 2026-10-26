import { profile } from '../data/profile'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section id="habilidades" className="py-20 md:py-28">
      <Reveal>
        <p className="section-label mb-4">O que eu faço bem</p>
        <h2 className="font-display mb-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          Stack que sustenta produto — e soft skills que sustentam times.
        </h2>
        <p className="mb-12 max-w-xl text-[var(--text-muted)]">
          Hard skills agrupadas por domínio. Soft skills no ritmo do dia a dia.
        </p>
      </Reveal>

      <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div className="space-y-8">
          {profile.hardSkillGroups.map((group, index) => (
            <Reveal key={group.label} delay={0.06 * index}>
              <div>
                <h3 className="mb-3 font-display text-sm font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="panel p-6 md:p-8">
            <h3 className="font-display mb-4 text-lg font-semibold text-[var(--text-primary)]">
              Soft skills
            </h3>
            <ul className="space-y-3">
              {profile.softSkills.map((skill) => (
                <li key={skill} className="soft-chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
