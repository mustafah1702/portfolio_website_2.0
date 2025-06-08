import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { gsap } from 'gsap'
import { useTheme } from '../context/ThemeContext'

const ProjectsSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#ffffff'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.3s ease;
  position: relative;
  overflow: hidden;
`

const ProjectsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  height: 600px;
`

const ProjectsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const ProjectsTrack = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
  will-change: transform;
  left: 50%;
  transform: translateX(-50%);
`

const ProjectCard = styled(motion.div)`
  background: ${props => props.isDarkMode ? '#ffffff' : '#ffffff'};
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 12px 40px rgba(9, 132, 227, 0.4);
  width: 400px;
  height: 500px;
  flex-shrink: 0;
  border: 3px solid #0984e3;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 50px rgba(9, 132, 227, 0.6);
    border-color: #74b9ff;
    background: ${props => props.isDarkMode ? '#ffffff' : '#ffffff'};
  }
`

const ProjectImage = styled(motion.div)`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  color: #0984e3;
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  font-weight: 800;
  transition: color 0.3s ease;
`

const ProjectDescription = styled.p`
  color: ${props => props.isDarkMode ? '#000000' : '#000000'};
  margin-bottom: 1.2rem;
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Tech = styled.span`
  color: #ffffff;
  font-size: 1rem;
  background: #0984e3;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(9, 132, 227, 0.3);

  &:hover {
    background: #74b9ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(9, 132, 227, 0.4);
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`

const ProjectLink = styled(motion.a)`
  color: #0984e3;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  background: rgba(9, 132, 227, 0.1);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ffffff;
    background: #0984e3;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(9, 132, 227, 0.4);
  }
`

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #0984e3;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(9, 132, 227, 0.4);
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #74b9ff;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 16px rgba(9, 132, 227, 0.6);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: #b2bec3;
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`

const Projects = () => {
  const { isDarkMode } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef(null)
  const projectsRef = useRef([])
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

  useEffect(() => {
    // Initialize GSAP animations for each project card
    projectsRef.current.forEach((project, index) => {
      gsap.from(project, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        delay: index * 0.1,
        ease: "power2.out"
      })
    })

    // Set initial position
    gsap.set(trackRef.current, {
      x: 0
    })
  }, [])

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      gsap.to(trackRef.current, {
        x: newIndex * -(400 + 32), // 400px card width + 32px gap
        duration: 0.8,
        ease: "power2.inOut"
      })
    }
  }

  const handleNext = () => {
    if (currentIndex < projectsData.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      gsap.to(trackRef.current, {
        x: newIndex * -(400 + 32), // 400px card width + 32px gap
        duration: 0.8,
        ease: "power2.inOut"
      })
    }
  }

  return (
    <ProjectsSection
      isDarkMode={isDarkMode}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ color: '#0984e3', textAlign: 'center', marginBottom: '2rem' }}
      >
        Projects
      </motion.h2>
      <ProjectsContainer>
        <ProjectsWrapper>
          <ProjectsTrack ref={trackRef}>
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                ref={el => projectsRef.current[index] = el}
                isDarkMode={isDarkMode}
                style={{ opacity: 1 }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle isDarkMode={isDarkMode}>{project.title}</ProjectTitle>
                  <ProjectDescription isDarkMode={isDarkMode}>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.tech.map((tech, i) => (
                      <Tech key={i} isDarkMode={isDarkMode}>{tech}</Tech>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <ProjectLink 
                      isDarkMode={isDarkMode}
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                    >
                      <FaGithub />
                    </ProjectLink>
                    <ProjectLink 
                      isDarkMode={isDarkMode}
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                    >
                      <FaExternalLinkAlt />
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsTrack>
          <NavigationButton
            isDarkMode={isDarkMode}
            className="prev"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </NavigationButton>
          <NavigationButton
            isDarkMode={isDarkMode}
            className="next"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={currentIndex === projectsData.length - 1}
          >
            <FaChevronRight />
          </NavigationButton>
        </ProjectsWrapper>
      </ProjectsContainer>
    </ProjectsSection>
  )
}

export default Projects 