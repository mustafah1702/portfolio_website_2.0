import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#ffffff'};
  transition: background-color 0.3s ease;
`

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <TechStack />
        <Contact />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App 