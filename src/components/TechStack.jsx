import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiPython, SiMongodb, SiPostgresql } from 'react-icons/si'
import { useTheme } from '../context/ThemeContext'

const TechStackSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: #fff;
  transition: background-color 0.3s ease;
`

const TechStackContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const TechCard = styled(motion.div)`
  background: ${props => props.isDarkMode ? '#2d3436' : '#ffffff'};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
`

const TechIcon = styled.div`
  font-size: 3rem;
  color: #0984e3;
  margin-bottom: 1rem;
`

const TechName = styled.h3`
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  font-size: 1.2rem;
  transition: color 0.3s ease;
`

const TechStack = () => {
  const { isDarkMode } = useTheme()
  const techData = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Database', icon: <FaDatabase /> }
  ]

  return (
    <TechStackSection
      id="tech-stack"
      isDarkMode={isDarkMode}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <TechStackContent>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: '#0984e3', textAlign: 'center' }}
        >
          Tech Stack
        </motion.h2>
        <TechGrid>
          {techData.map((tech, index) => (
            <TechCard
              key={index}
              isDarkMode={isDarkMode}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TechIcon>{tech.icon}</TechIcon>
              <TechName isDarkMode={isDarkMode}>{tech.name}</TechName>
            </TechCard>
          ))}
        </TechGrid>
      </TechStackContent>
    </TechStackSection>
  )
}

export default TechStack 