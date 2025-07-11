import { motion } from 'framer-motion'
import styled from 'styled-components'

const AboutSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: #f8f9fa;
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
    color: #636e72;
    margin-bottom: 1.5rem;
  }
`

const AboutImage = styled(motion.div)`
  img {
    margin-top: 70px;
    width: 100%;
    max-width: 600px;
    height: 500px;
    border-radius: 12px;
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    object-position: center;
  }
`

const About = () => {
  return (
    <AboutSection
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <AboutContent>
        <AboutText>
          <h2>About Me</h2>
          <p>
          I'm a Computer Science graduate from Toronto Metropolitan University with a passion for building smart, scalable, and human-centered tech.
          Over the last few years, I’ve worked on projects and internships that span AI, automation, and full-stack development—including co-op roles at Canadian Tire and Magna International, and leading LLM training efforts at Outlier. 
          These experiences have sharpened both my technical skills and my ability to work on real-world, high-impact solutions.
          This site highlights my projects, experience, and the tools I’ve picked up along the way.
          </p>
          <p>
          Outside of coding, I’m interested in how emerging technologies like machine learning and automation can be used to make everyday systems more efficient and accessible. 
          I’m always learning, experimenting, and documenting the process as I go.
          Thanks for stopping by. Feel free to explore and don’t hesitate to reach out if you'd like to connect or talk tech.
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