import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
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
  background-color: #ffffff;
`

const App = () => {
  return (
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
  )
}

export default App 