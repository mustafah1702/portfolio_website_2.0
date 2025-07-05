import { useTheme } from '../context/ThemeContext'
import styled from 'styled-components'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Carousel } from 'antd'
import 'antd/dist/reset.css'

const ProjectsSection = styled.section`
  padding: 4rem 0;
  background-color: ${props => props.isDarkMode ? '#23272f' : '#f5f6fa'};
  min-height: 100vh;
`

const contentStyle = {
  margin: 0,
  minHeight: '520px',
  height: '60vh',
  color: '#fff',
  textAlign: 'center',
  background: '#0cb3eb',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
  width: '100%',
  maxWidth: '100%',
}

const ProjectCard = styled.div`
  background: transparent;
  padding: 0;
  min-width: 300px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProjectImage = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ProjectDescription = styled.p`
  color: #e0e0e0;
  margin-bottom: 0.7rem;
  line-height: 1.3;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.7rem;
  justify-content: center;
`

const Tech = styled.span`
  color: #fff;
  font-size: 0.7rem;
  background: #0984e3;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  margin-top: 0.7rem;
`

const ProjectLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  background: rgba(9, 132, 227, 0.2);
  padding: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: #0984e3;
    color: #fff;
  }
`

const Projects = () => {
  const { isDarkMode } = useTheme()
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

  const onChange = currentSlide => {
    console.log(currentSlide);
  };

  return (
    <ProjectsSection id="projects" isDarkMode={isDarkMode}>
      <h2 style={{ color: '#0984e3', textAlign: 'center', marginBottom: '2rem' }}>
        Projects
      </h2>
      <div style={{ width: '80vw', maxWidth: '1200px', margin: '0 auto' }}>
        <Carousel arrows={true} afterChange={onChange} dots>
          {projectsData.map((project, index) => (
            <div key={index}>
              <div style={contentStyle}>
                <ProjectCard style={{ width: '100%', maxWidth: 700 }}>
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
                    >
                      <FaGithub />
                    </ProjectLink>
                    <ProjectLink 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectCard>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </ProjectsSection>
  )
}

export default Projects 