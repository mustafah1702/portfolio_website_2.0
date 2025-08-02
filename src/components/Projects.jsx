import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'


const ProjectsSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f5f6fa;
  text-align: center;
`

const SectionTitle = styled(motion.h2)`
  color: #0984e3;
  font-size: 2.8rem;
  margin-bottom: 3rem;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`

const ProjectCard = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
`

const CardImage = styled.div`
  background: center/cover no-repeat url(${props => props.src});
  height: 180px;
  width: 100%;
`

const CardContent = styled.div`
  padding: 1rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProjectTitle = styled.h3`
  color: #2d3436;
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
`

const ProjectDescription = styled.p`
  color: #636e72;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0 0 1rem;
`

const LinksRow = styled.div`
  display: flex;
  gap: 1rem;
`

const IconLink = styled.a`
  color: #0984e3;
  font-size: 1.2rem;
  background: rgba(9, 132, 227, 0.1);
  padding: 0.6rem;
  border-radius: 50%;
  transition: background 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #0984e3;
    color: #fff;
    transform: translateY(-2px);
  }
`

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

const TechBadge = styled.span`
  background: #e0e0e0;
  color: #333;
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
`

const projectsData = [
  {
    title: "(De)Compressor",
    description: "Full-stack platform using the Huffman Tree algorithm and recursion for efficient data encoding.",
    image: "/images/Decompressor-image.png",
    github: "https://github.com/mustafah1702/-De-Compressor",
    live: "https://ecommerce-demo.com",
    private: true,
    techStack: ['Python','React', 'Node.js', 'Styled-Components', 'Framer-Motion']
  },
  {
    title: "Sports Scheduler App",
    description: "Mobile application for scheduling sports events using object-oriented programming and Android Studio.",
    image: "/images/project2-image.png",
    github: "https://github.com/shenceyang/Android-sports-event-scheduler",
    live: "https://task-manager-demo.com",
    private: false,
    techStack: ['Java', 'JUnit', 'Android Studio', 'Firebase', 'Git']

  },
  {
    title: "AI Image Generator",
    description: "Generate art from text prompts using OpenAI's DALL·E API.",
    image: "/images/project3.jpg",
    github: "https://github.com/yourusername/ai-art",
    live: "https://ai-art-demo.com",
    private: false,
    techStack: ['React', 'Node.js', 'Styled-Components', 'Framer-Motion']

  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard with charts and reports across platforms.",
    image: "/images/project4.jpg",
    github: "https://github.com/yourusername/social-dashboard",
    live: "https://social-dashboard-demo.com",
    private: false,
    techStack: ['React', 'Node.js', 'Styled-Components', 'Framer-Motion']

  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first app with workout plans, logging, and GraphQL API.",
    image: "/images/project5.jpg",
    github: "https://github.com/yourusername/fitness-tracker",
    live: "https://fitness-tracker-demo.com",
    private: false,
    techStack: ['React', 'Node.js', 'Styled-Components', 'Framer-Motion']

  }
]

const Projects = () => (
  <ProjectsSection id="projects">
    <SectionTitle
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Projects
    </SectionTitle>

    <ProjectsGrid>
      {projectsData.map((proj, i) => (
        <ProjectCard
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <CardImage src={proj.image} />
          <CardContent>
            <div>
              <ProjectTitle>{proj.title}</ProjectTitle>
              <ProjectDescription>{proj.description}</ProjectDescription>
              <StackRow>
  {proj.techStack.map(t => (
    <TechBadge key={t}>{t}</TechBadge>
  ))}
</StackRow>
            </div>
            <LinksRow>
              {proj.private ? (
                <a data-tooltip-id="my-tooltip" data-tooltip-content="This GitHub repo is private">
                  <IconLink as="span" disabled>
                    <FaGithub color="black" />
                  </IconLink>
                  <Tooltip id="my-tooltip" />
              </a>
                ) : 
                (<IconLink href={proj.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                </IconLink>)}
              
              <IconLink href={proj.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </IconLink>
            </LinksRow>
          </CardContent>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  </ProjectsSection>
)

export default Projects
