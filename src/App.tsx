import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Database, Server, Sparkles, BookOpen, ExternalLink, Briefcase } from 'lucide-react'

function App() {
  const skills = [
    { name: 'JavaScript', icon: Code2 },
    { name: 'TypeScript', icon: Code2 },
    { name: 'NodeJS', icon: Server },
    { name: 'NestJS', icon: Server },
    { name: 'ReactJS', icon: Code2 },
    { name: 'React Native', icon: Code2 },
    { name: 'NextJS', icon: Code2 },
    { name: 'Angular', icon: Code2 },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'Prisma', icon: Database },
    { name: 'Docker', icon: Server },
    { name: 'Git', icon: Code2 },
    { name: 'Jest', icon: Code2 },
    { name: 'Scrum', icon: Sparkles },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(226,232,240,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-slate-200 via-slate-100 to-white p-1 shadow-lg shadow-slate-400/20"
          >
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center p-4">
              <img src="/geruso_logo.png" alt="Geruso Logo" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Victor Geruso</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-semibold mb-8">
            Engenheiro de Software (Dev Backend)
          </p>

          <div className="flex gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/vgeruso"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:bg-gradient-to-br hover:from-slate-200/20 hover:to-white/20 hover:shadow-lg hover:shadow-slate-300/30 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:text-slate-100 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/victor-geruso-gomes-654a8111a/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:bg-gradient-to-br hover:from-slate-200/20 hover:to-white/20 hover:shadow-lg hover:shadow-slate-300/30 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-slate-100 transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-slate-300" />
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">Sobre mim</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Olá, sou Victor Geruso Gomes, Bacharel em Engenharia de Software formado pela 
              Universidade Católica do Salvador (Ucsal), focado no desenvolvimento backend e 
              atualmente em busca de aprimoramento técnico em arquitetura, estruturas e 
              armazenamento de dados.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mt-4">
              Possuo experiência em desenvolvimento Web, trabalhando a maior parte do tempo 
              como fullstack em empresas conceituadas da região metropolitana de Salvador. 
              Nessas empresas atuei com documentação e desenvolvimento de sites, serviços 
              web/mobile, APIs, sistemas SaaS, entre outros.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mt-4">
              Estou sempre em busca de melhorias, realizando desde cursos até certificações 
              para me manter por dentro de tudo que tenho ao meu alcance para agregar valor 
              onde eu estiver.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text flex items-center gap-3">
              <Code2 className="w-8 h-8 text-slate-300" />
              Habilidades
            </h2>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-white/10 transition-all cursor-pointer"
              >
                <skill.icon className="w-8 h-8 text-slate-300" />
                <span className="text-slate-200 font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-slate-300" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Meus Artigos</h2>
          </div>
          <p className="text-slate-300 text-lg mb-8">
            Confira meus artigos técnicos no dev.to
          </p>
          <motion.a
            href="https://dev.to/vgeruso"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-slate-400/30 hover:from-slate-600 hover:to-slate-500 transition-all"
          >
            Visitar dev.to
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-slate-300" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Meus Projetos</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              href="https://ok-snack.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="w-full h-32 flex items-center justify-center bg-slate-800/50 rounded-xl p-6 group-hover:bg-slate-800/70 transition-all">
                <img 
                  src="/svg-rect.svg" 
                  alt="OK Snack" 
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-2 text-slate-300 group-hover:text-slate-100 transition-colors">
                <span className="font-semibold">Visitar</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>

            <motion.a
              href="https://www.ultracleanba.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="w-full h-32 flex items-center justify-center bg-slate-800/50 rounded-xl p-6 group-hover:bg-slate-800/70 transition-all">
                <h3 className="text-4xl md:text-5xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                  Site Ultra Clean
                </h3>
              </div>
              <div className="flex items-center gap-2 text-slate-300 group-hover:text-slate-100 transition-colors">
                <span className="font-semibold">Visitar</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center text-slate-500"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} <a href="https://bsky.app/profile/geruso.com" target="_blank" rel="noopener noreferrer">Victro Geruso</a>.
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

export default App
