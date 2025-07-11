import { motion } from 'framer-motion'
import styled from 'styled-components'

const EducationSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: #ffffff;
`

const EducationContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`

const EducationItem = styled(motion.div)`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 3rem;
  border-left: 2px solid #0984e3;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #0984e3;
  }
`

const EducationTitle = styled.h3`
  color: #2d3436;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

const EducationSchool = styled.h4`
  color: #0984e3;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const EducationDate = styled.span`
  color: #636e72;
  font-size: 0.9rem;
`

const EducationDescription = styled.p`
  color: #636e72;
  margin-top: 1rem;
  line-height: 1.6;
`

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science (Honours)",
      school: "Toronto Metropolitan University",
      date: "2020 - 2025",
      description: "Graduated with a 3.72 CGPA and Dean's Distinction List."
    },
  ]

  return (
    <EducationSection
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <EducationContent>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: '#0984e3', marginBottom: '3rem', textAlign: 'center' }}
        >
          Education
        </motion.h2>
        {educationData.map((edu, index) => (
          <EducationItem
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <EducationTitle>{edu.title}</EducationTitle>
            <EducationSchool>{edu.school}</EducationSchool>
            <EducationDate>{edu.date}</EducationDate>
            <EducationDescription>{edu.description}</EducationDescription>
          </EducationItem>
        ))}
      </EducationContent>
    </EducationSection>
  )
}

export default Education 