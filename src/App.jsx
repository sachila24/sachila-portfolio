import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface">
      <div className="pointer-events-none fixed inset-0 bg-page-grid opacity-90 [background-size:56px_56px]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[520px] bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
      <div className="pointer-events-none fixed -right-40 top-40 h-[420px] w-[420px] rounded-full bg-purple-600/15 blur-[100px]" />
      <div className="pointer-events-none fixed -left-32 bottom-20 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[90px]" />

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
