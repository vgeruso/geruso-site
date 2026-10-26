export const profile = {
  name: 'Victor Geruso',
  role: 'Engenheiro de Software · CTO Codíco',
  tagline:
    'Backend, dados e produtos digitais — do sertão baiano para a produção.',
  about: [
    'Nordestino do sertão baiano, dev desde os 12 anos, sempre com foco em desenvolvimento web. Iniciei minha carreira como web designer, atuando principalmente com o desenvolvimento básico de páginas para a web, utilizando apenas HTML, CSS e JavaScript vanilla, inicialmente como atividade recreativa.',
    'Formei-me em Engenharia de Software pela Universidade Católica do Salvador, na capital baiana, e passei a atuar profissionalmente na área em 2018, ainda com foco em desenvolvimento web, porém, agora, com maior ênfase em backend e dados.',
    'Hoje, estou me especializando em Data Science e atuo como CTO da Codíco Tecnologia, minha própria empresa, em sociedade com um dos meus melhores amigos.',
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
  books: [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      focus: 'Engenharia',
      href: 'https://meli.la/1dDLhwo',
    },
    {
      title: 'Startup Enxuta',
      author: 'Eric Ries',
      focus: 'Produto',
      href: 'https://meli.la/1XDTocj',
    },
    {
      title: 'Design Centrado no Usuário',
      author: 'Travis Lowdermilk',
      focus: 'UX',
      href: 'https://meli.la/237jWDs',
    },
  ],

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
