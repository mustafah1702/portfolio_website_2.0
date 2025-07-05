import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const AboutSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#f8f9fa'};
  transition: background-color 0.3s ease;
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #0984e3;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.isDarkMode ? '#b2bec3' : '#636e72'};
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;
  }
`

const AboutImage = styled(motion.div)`
  img {
    width: 100%;
    max-width: 500px;
    height: 400px;
    border-radius: 12px;
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    object-position: center;
  }
`

const About = () => {
  const { isDarkMode } = useTheme()

  return (
    <AboutSection
      id="about"
      isDarkMode={isDarkMode}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <AboutContent>
        <AboutText isDarkMode={isDarkMode}>
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate software developer with a keen interest in creating
            innovative solutions and building user-friendly applications. I love
            tackling complex problems and turning them into simple, beautiful, and
            intuitive solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge through
            technical writing.
          </p>
        </AboutText>
        <AboutImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/photo.jpeg" alt="Profile" />
        </AboutImage>
      </AboutContent>
    </AboutSection>
  )
}

export default About 