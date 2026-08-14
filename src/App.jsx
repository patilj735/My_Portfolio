import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import AmbientBackground from './components/AmbientBackground.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />

      <div className="noise-overlay" />
      <AmbientBackground />
      <CustomCursor />
      <CommandPalette />

      <div
        className="relative z-10 transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
