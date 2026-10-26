import { About } from './components/About'
import { Articles } from './components/Articles'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="site-shell min-h-screen w-full">
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Articles />
        <Contacts />
        <Footer />
      </div>
    </div>
  )
}

export default App
