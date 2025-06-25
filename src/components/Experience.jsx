import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const ExperienceSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#f8f9fa'};
  transition: background-color 0.3s ease;
`

const ExperienceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const ExperienceCard = styled(motion.div)`
  background: ${props => props.isDarkMode ? '#2d3436' : '#ffffff'};
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};

  &:hover {
    transform: translateY(-5px);
  }
`

const CompanyLogo = styled(motion.div)`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`

const CompanyName = styled.h3`
  color: #0984e3;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`

const Position = styled.h4`
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  transition: color 0.3s ease;
`

const Date = styled.span`
  color: ${props => props.isDarkMode ? '#b2bec3' : '#636e72'};
  font-size: 0.9rem;
  display: block;
  margin-bottom: 1rem;
  text-align: center;
  transition: color 0.3s ease;
`

const Description = styled(motion.ul)`
  color: ${props => props.isDarkMode ? '#b2bec3' : '#636e72'};
  list-style-type: none;
  padding: 0;
  transition: color 0.3s ease;

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #0984e3;
    }
  }
`

const Experience = () => {
  const { isDarkMode } = useTheme()
  const [selectedCompany, setSelectedCompany] = useState(null)

  const experienceData = [
    {
      company: "Canadian Tire",
      position: "Automation Software Developer",
      date: "January 2023 - April 2023",
      logo: "/images/canadian-tire-logo.png",
      description: [
        "Developed and maintained web applications using React.js and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality products",
        "Implemented new features and optimized existing codebase",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "Magna International",
      position: "Software Engineer Intern",
      date: "September 2023 - December 2024",
      logo: "/images/magna-logo.png",
      description: [
        "Assisted in developing and testing web applications",
        "Worked with REST APIs and database management",
        "Participated in agile development processes",
        "Contributed to code documentation and technical specifications"
      ]
    }
  ]

  const handleCardClick = (company) => {
    setSelectedCompany(selectedCompany === company ? null : company)
  }

  return (
    <ExperienceSection
      isDarkMode={isDarkMode}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ExperienceContent>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: '#0984e3', textAlign: 'center' }}
        >
          Experience
        </motion.h2>
        <ExperienceGrid>
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              isDarkMode={isDarkMode}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => handleCardClick(exp.company)}
              layout
            >
              <CompanyLogo
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </CompanyLogo>
              <CompanyName>{exp.company}</CompanyName>
              <Position isDarkMode={isDarkMode}>{exp.position}</Position>
              <Date isDarkMode={isDarkMode}>{exp.date}</Date>
              <AnimatePresence>
                {selectedCompany === exp.company && (
                  <Description
                    isDarkMode={isDarkMode}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </Description>
                )}
              </AnimatePresence>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </ExperienceContent>
    </ExperienceSection>
  )
}

export default Experience 