import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#ffffff'};
  transition: background-color 0.3s ease;
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #0984e3;
  margin-bottom: 2rem;
`

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.isDarkMode ? '#b2bec3' : '#636e72'};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  transition: color 0.3s ease;
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  transition: color 0.3s ease;
`

const ScrollText = styled.span`
  font-size: 0.9rem;
  opacity: 0.7;
`

const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid currentColor;
  border-radius: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: currentColor;
    border-radius: 50%;
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
  }
`

const Hero = () => {
  const { isDarkMode } = useTheme()

  const scrollToAbout = () => {
    const smoother = window.ScrollSmoother.get()
    if (smoother) {
      smoother.scrollTo('#about', true, 'center center')
    }
  }

  return (
    <HeroSection
      isDarkMode={isDarkMode}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroContent>
        <HeroTitle
          isDarkMode={isDarkMode}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Mustafa Hasan
        </HeroTitle>
        <HeroSubtitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer
        </HeroSubtitle>
        <HeroDescription
          isDarkMode={isDarkMode}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I build exceptional digital experiences that make an impact.
          Specializing in creating beautiful, functional, and user-centered websites.
        </HeroDescription>
      </HeroContent>
      <ScrollIndicator
        isDarkMode={isDarkMode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        style={{ cursor: 'pointer' }}
      >
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero 