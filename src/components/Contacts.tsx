import { Github, Linkedin, Mail, Users } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'

const icons = {
  Énóis: Users,
  LinkedIn: Linkedin,
  'E-mail': Mail,
  GitHub: Github,
} as const

export function Contacts() {
  return (
    <section id="contatos" className="py-20 md:py-28">
      <Reveal>
        <p className="section-label mb-4">Meus contatos</p>
        <h2 className="font-display mb-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          Onde me encontrar.
        </h2>
        <p className="mb-10 max-w-lg text-[var(--text-muted)]">
          Redes e e-mail — sem formulário, sem fila. Escolha o canal que preferir.
        </p>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2">
        {profile.contacts.map((contact, index) => {
          const Icon = icons[contact.name as keyof typeof icons] ?? Users
          return (
            <Reveal key={contact.name} delay={0.06 * index}>
              <a
                href={contact.href}
                target={contact.kind === 'email' ? undefined : '_blank'}
                rel={contact.kind === 'email' ? undefined : 'noopener noreferrer'}
                className="contact-link"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--accent)]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-semibold text-[var(--text-primary)]">
                    {contact.name}
                  </span>
                  <span className="block truncate text-sm text-[var(--text-muted)]">
                    {contact.detail}
                  </span>
                </span>
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
