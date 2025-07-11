import styled from 'styled-components'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ProjectsSection = styled.section`
  padding: 4rem 0;
  background-color: #f5f6fa;
  min-height: 100vh;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ProjectCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  will-change: transform, box-shadow;
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`

const ProjectTitle = styled.h3`
  color: #2d3436;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`

const ProjectDescription = styled.p`
  color: #636e72;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Tech = styled.span`
  color: #ffffff;
  font-size: 0.8rem;
  background: #0984e3;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: 500;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`

const ProjectLink = styled(motion.a)`
  color: #2d3436;
  font-size: 1.2rem;
  background: rgba(9, 132, 227, 0.1);
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    background: #0984e3;
    color: #ffffff;
    border-color: #0984e3;
    transform: translateY(-2px);
  }
`

const Projects = () => {
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with features like product filtering, cart management, and secure payment integration. Built with React, Node.js, and MongoDB.",
      image: "/images/project1.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking. Features drag-and-drop functionality and deadline notifications.",
      image: "/images/project2.jpg",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool that creates unique artwork based on text prompts. Integrates with OpenAI's DALL-E API and includes a gallery feature.",
      image: "/images/project3.jpg",
      tech: ["Python", "React", "OpenAI API", "FastAPI"],
      github: "https://github.com/yourusername/ai-art",
      live: "https://ai-art-demo.com"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard that tracks engagement metrics, generates reports, and provides insights across multiple platforms.",
      image: "/images/project4.jpg",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      github: "https://github.com/yourusername/social-dashboard",
      live: "https://social-dashboard-demo.com"
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-first fitness tracking application with workout planning, progress tracking, and nutrition logging. Includes integration with wearable devices.",
      image: "/images/project5.jpg",
      tech: ["React Native", "Node.js", "MongoDB", "GraphQL"],
      github: "https://github.com/yourusername/fitness-tracker",
      live: "https://fitness-tracker-demo.com"
    }
  ]

  return (
    <ProjectsSection id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ color: '#0984e3', textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
      >
        Projects
      </motion.h2>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard
              whileHover={{ 
                scale: 1.025,
                y: -5,
                boxShadow: "0 16px 32px rgba(0, 0, 0, 0.13)"
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} loading="lazy" />
              </ProjectImage>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>
                {project.description}
              </ProjectDescription>
              <TechStack>
                {project.tech.map((tech, i) => (
                  <Tech key={i}>{tech}</Tech>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </ProjectLink>
                <ProjectLink 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          </motion.div>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}

export default Projects 