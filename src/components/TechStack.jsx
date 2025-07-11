import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaGithub, FaLinux, FaCloud } from 'react-icons/fa'
import { SiJavascript, SiPython, SiMongodb, SiTailwindcss, SiJenkins, SiJira } from 'react-icons/si'

const TechStackSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: #fff;
`

const TechStackContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const TechCategory = styled.div`
  margin-bottom: 3rem;
  
  h3 {
    color: #0984e3;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const TechCard = styled(motion.div)`
  background: #ffffff;
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
  color: #2d3436;
  font-size: 1.2rem;
`

const TechStack = () => {
  const programmingTech = [
    { name: 'Python', icon: <SiPython /> },
    { name: 'Java', icon: <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Java</span> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'C', icon: <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>C</span> },
    { name: 'C++', icon: <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>C++</span> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Assembly', icon: <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>ASM</span> },
    { name: 'HTML', icon: <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>HTML</span> },
    { name: 'CSS', icon: <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>CSS</span> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'MongoDB', icon: <SiMongodb /> }
  ]

  const toolsTech = [
    { name: 'Linux/Unix', icon: <FaLinux /> },
    { name: 'Git Bash', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Azure', icon: <FaCloud /> },
    { name: 'Jira', icon: <SiJira /> },
    { name: 'Jenkins', icon: <SiJenkins /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'DevOps', icon: <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>DevOps</span> },
    { name: 'Scrum (Agile)', icon: <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Scrum</span> },
    { name: 'SDLC', icon: <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>SDLC</span> }
  ]

  return (
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
          style={{ color: '#0984e3', textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          Tech Stack
        </motion.h2>
        
        <TechCategory>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Programming Languages & Frameworks
          </motion.h3>
          <TechGrid>
            {programmingTech.map((tech, index) => (
              <TechCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechCard>
            ))}
          </TechGrid>
        </TechCategory>

        <TechCategory>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Software Tools & Practices
          </motion.h3>
          <TechGrid>
            {toolsTech.map((tech, index) => (
              <TechCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechCard>
            ))}
          </TechGrid>
        </TechCategory>
      </TechStackContent>
    </TechStackSection>
  )
}

export default TechStack 