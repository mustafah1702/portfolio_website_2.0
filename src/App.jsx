import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#ffffff'};
  transition: background-color 0.3s ease;
`

const SmoothScrollWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const SmoothScrollContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
`

const App = () => {
  const smoother = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Initialize ScrollSmoother
    smoother.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5, // Adjust this value to control smoothness (higher = smoother)
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1, // Smoother scrolling on touch devices
    })

    // Cleanup
    return () => {
      if (smoother.current) {
        smoother.current.kill()
      }
    }
  }, [])

  return (
    <ThemeProvider>
      <AppContainer>
        <SmoothScrollWrapper id="smooth-wrapper">
          <SmoothScrollContent id="smooth-content" ref={contentRef}>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Education />
            <Projects />
            <TechStack />
            <Contact />
          </SmoothScrollContent>
        </SmoothScrollWrapper>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App 