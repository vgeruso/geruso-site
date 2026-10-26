export const profile = {
  name: 'Victor Geruso',
  role: 'Engenheiro de Software · CTO Codíco',
  tagline:
    'Backend, dados e produtos digitais — do sertão baiano para a produção.',
  about: [
    'Nordestino do sertão baiano, código desde os 12 anos — comecei como web designer com HTML, CSS e JavaScript vanilla, ainda como brincadeira séria. Formei-me em Engenharia de Software pela Universidade Católica do Salvador (UCSal) e, desde 2018, atuo profissionalmente com foco cada vez maior em backend e dados.',
    'Passei boa parte da trajetória como fullstack em empresas da região metropolitana de Salvador: APIs, serviços web e mobile, documentação e sistemas SaaS. Hoje especializo-me em Data Science e atuo como CTO da Codíco Tecnologia, empresa que construí em sociedade com um dos meus melhores amigos.',
    'Sigo estudando, certificando e refinando arquitetura, estruturas e armazenamento — sempre com o mesmo objetivo: agregar valor onde estiver.',
  ],
  hardSkillGroups: [
    {
      label: 'Linguagens',
      skills: ['TypeScript', 'Python', 'C#'],
    },
    {
      label: 'Backend',
      skills: ['NodeJS', 'NestJS', '.Net Framework'],
    },
    {
      label: 'Dados',
      skills: ['PostgreSQL', 'MySQL', 'Prisma', 'Metabase'],
    },
    {
      label: 'Frontend',
      skills: ['React', 'Angular'],
    },
    {
      label: 'Infra',
      skills: ['Docker', 'Portainer'],
    },
  ],
  softSkills: [
    'Trabalho em equipe',
    'Boa liderança',
    'Resolução de problemas complexos',
    'Foco no resultado',
  ],
  projects: [
    {
      name: 'OK Snack',
      href: 'https://ok-snack.com',
      logo: '/svg-rect.svg',
      label: 'Produto SaaS · food service',
    },
    {
      name: 'Codíco',
      href: 'https://codico.com.br/',
      logo: '/logo-codico.png',
      label: 'Software house · produtos digitais',
    },
    {
      name: 'Deploy de Sexta',
      href: 'https://www.deploydesextapodcast.com.br/',
      logo: '/logo-deploy-de-sexta.jpg',
      label: 'Podcast · tech e carreira',
    },
  ],
  articles: {
    href: 'https://dev.to/vgeruso',
    label: 'Artigos no dev.to',
  },
  contacts: [
    {
      name: 'Énóis',
      href: 'https://enois.ia.br/perfil/vgeruso',
      detail: 'enois.ia.br/perfil/vgeruso',
      kind: 'social' as const,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/victor-geruso-gomes-654a8111a/',
      detail: 'victor-geruso-gomes',
      kind: 'social' as const,
    },
    {
      name: 'E-mail',
      href: 'mailto:victor.geruso@gmail.com',
      detail: 'victor.geruso@gmail.com',
      kind: 'email' as const,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/vgeruso',
      detail: 'github.com/vgeruso',
      kind: 'social' as const,
    },
  ],
  socialQuick: {
    github: 'https://github.com/vgeruso',
    linkedin: 'https://www.linkedin.com/in/victor-geruso-gomes-654a8111a/',
  },
} as const
