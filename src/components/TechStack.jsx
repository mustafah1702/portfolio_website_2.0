import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaLinux,
  FaCloud,
  FaJava,
  FaCode
} from 'react-icons/fa'
import {
  SiJavascript,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiJenkins,
  SiJira,
  SiHtml5,
  SiCss3
} from 'react-icons/si'

// Section wrapper
const TechStackSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: #f5f6fa;
  text-align: center;
`

// Content container
const TechStackContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`

// Flexible grid
const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

// Each tech item
const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

// Icon container
const IconCircle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`

// Tech label
const TechLabel = styled.span`
  font-size: 0.9rem;
  color: #2d3436;
`

const techItems = [
  // Programming
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'Java', icon: <FaJava />, color: '#007396' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#3C873A' },
  { name: 'C', icon: <FaCode />, color: '#A8B9CC' },
  { name: 'C++', icon: <FaCode />, color: '#00599C' },
  { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  // Tools
  { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { name: 'Azure', icon: <FaCloud />, color: '#0078D4' },
  { name: 'Jira', icon: <SiJira />, color: '#0052CC' },
  { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
]

const TechStack = () => (
  <TechStackSection
    id="tech-stack"
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
        style={{ color: '#0984e3', marginBottom: '2rem', fontSize: '2.5rem' }}
      >
        My Tech Stack
      </motion.h2>
      <TechGrid>
        {techItems.map((tech, idx) => (
          <TechItem
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <IconCircle style={{ background: tech.color + '20' }}>
              <span style={{ color: tech.color, fontSize: '1.5rem' }}>{tech.icon}</span>
            </IconCircle>
            <TechLabel>{tech.name}</TechLabel>
          </TechItem>
        ))}
      </TechGrid>
    </TechStackContent>
  </TechStackSection>
)

export default TechStack
