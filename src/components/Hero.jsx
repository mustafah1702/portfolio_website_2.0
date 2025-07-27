import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaUserTie, FaProjectDiagram} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background-color: #ffffff;
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
  color: #2d3436;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const Caret = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  background-color: #0984e3;
  margin-left: 2px;
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #0984e3;
  margin-bottom: 2rem;
`

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: #636e72;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`

const HeroHighlights = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const HighlightItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.8rem;
  font-size: 1rem;
  color: #636e72;
  flex: 1;
  max-width: 300px;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    flex-direction: column;
    gap: 0.3rem;
    max-width: none;
  }
`

const HighlightIcon = styled.span`
  font-size: 1.3rem;
  min-width: 30px;
  text-align: center;
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
  color: #2d3436;
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
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto'
      })
    }
  }

  return (
    <HeroSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroContent>
        <HeroTitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Mustafa Hasan<Caret />
        </HeroTitle>
        <HeroSubtitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Software Engineer
        </HeroSubtitle>
        <HeroDescription
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I'm a versatile software developer with hands-on experience in AI, full-stack development, and automation—driven by a passion for building practical, scalable tech solutions.
        </HeroDescription>
        
        <HeroHighlights
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <HighlightItem
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <HighlightIcon>
              <FaUserTie />
            </HighlightIcon>
            <span>
              <strong>2+ Years Industry Experience</strong><br />
              Worked at Canadian Tire, Magna International, and Outlier building real-world software.
            </span>
          </HighlightItem>
          
          <HighlightItem
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <HighlightIcon><FaProjectDiagram /> </HighlightIcon>
            <span><strong>Built AI & Automation Projects</strong><br />
            From self-driving cars to workflow bots—practical, innovative tech.</span>
          </HighlightItem>
          
          <HighlightItem
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <HighlightIcon><FaLocationDot />            </HighlightIcon>
            <span><strong>Based in Toronto, Canada</strong><br />
            Open to remote/hybrid/onsite roles across North America.</span>
          </HighlightItem>
        </HeroHighlights>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={scrollToAbout}
        style={{ cursor: 'pointer' }}
      >
        <ScrollText>Scroll to explore</ScrollText>
        <ScrollIcon />
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero