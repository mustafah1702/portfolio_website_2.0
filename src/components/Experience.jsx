import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimes, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa'

const ExperienceSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: #f8f9fa;
`

const ExperienceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`

const ExperienceCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #2d3436;

  &:hover {
    transform: translateY(-5px);
  }
`

const TimelineBadge = styled(motion.div)`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 15px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => {
    switch(props.type) {
      case 'current': return 'linear-gradient(135deg, #00b894, #00a085)';
      case 'recent': return 'linear-gradient(135deg, #0984e3, #0873c4)';
      case 'previous': return 'linear-gradient(135deg, #636e72, #4a5568)';
      default: return '#636e72';
    }
  }};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
`

const SeeMoreIndicator = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #0984e3;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  margin-top: 0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  background: rgba(9, 132, 227, 0.1);
  border: 1px solid rgba(9, 132, 227, 0.2);

  &:hover {
    opacity: 1;
    background: rgba(9, 132, 227, 0.15);
  }
`

const CompanyLogo = styled(motion.div)`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }

  img[src*="magna-logo"] {
    max-width: 180%;
    max-height: 180%;
  }
`

const CompanyName = styled.h3`
  color: #0984e3;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  text-align: center;
`

const Position = styled.h4`
  color: #2d3436;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
  white-space: pre-line;
`

const Date = styled.span`
  color: #636e72;
  font-size: 0.8rem;
  display: block;
  margin-bottom: 0.8rem;
  text-align: center;
`

const Description = styled.ul`
  color: #636e72;
  list-style-type: none;
  padding: 0;

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

const WorkSamplesSection = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
`

const WorkSamplesTitle = styled.h4`
  color: #0984e3;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
`

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
  cursor: pointer;
`

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const GalleryNav = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  pointer-events: none;
`

const NavButton = styled(motion.button)`
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: all;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`

const GalleryDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const Dot = styled(motion.button)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#0984e3' : '#d0d0d0'};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0984e3;
  }
`

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
`

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`

const CloseButton = styled(motion.button)`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const ModalNav = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none;
`

const ModalNavButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: all;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

const ExperienceModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  padding: 2rem;
`

const ExperienceModalContent = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  max-width: 800px;
  width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`

const ExperienceModalHeader = styled.div`
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid #e0e0e0;
`

const ExperienceModalBody = styled.div`
  padding: 1rem 2rem 2rem 2rem;
`

const ExperienceModalClose = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #636e72;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalCardId, setModalCardId] = useState(null)
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState(null)

  const experienceData = [
    {
      id: "outlier",
      company: "Outlier",
      position: "LLM Training Squad Lead (Contract)",
      date: "January 2025 - July 2025",
      logo: "/images/outlier-logo.jpg",
      description: [
        "Led a team of 13 in training large language models (LLMs) for code generation tasks by crafting effective prompts and evaluating outputs through hands-on debugging in Python, Java, JavaScript, C#, C++, and SQL",
        "Assessed LLM-generated code for correctness, efficiency, and alignment with project specs, identifying edge cases and language-specific pitfalls to improve overall response quality."
      ],
      timeline: 'current'
    },
    {
      id: "magna-contract",
      company: "Magna International",
      position: "Full Stack Software Engineering (Contract)",
      date: "September 2024 - December 2024",
      logo: "/images/magna-logo.png",
      description: [
        "Recognized for high performance and offered a 4-month contract to develop and launch the Material Database, a global web app for managing and visualizing material specifications across Magna's divisions.",
        "Engineered intelligent data extraction using LlamaParser API with prompt customization to process inconsistent PDF formats, significantly accelerating data onboarding.",
        "Built the app using ReactJS and Python (Flask), with SQL Server and Azure Blob Storage for backend and data management, and Microsoft Entra for authentication and access control to integrate features such as interactive data visualization, curve comparison, and an intelligent material recommendation engine that suggests optimal materials based on user-specified conditions."
      ],
      workSamples: [
        {
          src: "/images/magna-sample3.png",
          alt: "Workflow Automation Demo",
          title: "Process Automation"
        },
        {
          src: "/images/magna-sample4.png",
          alt: "Database Schema",
          title: "Data Architecture"
        }
      ],
      timeline: 'recent'
    },
    {
      id: "magna-coop",
      company: "Magna International",
      position: "Full Stack Software Engineering Co-op",
      date: "September 2023 - August 2024",
      logo: "/images/magna-logo.png",
      description: [
        "Led end-to-end development of a full-stack REST application to track vehicle component testing workflows, using ReactJS, Python (Flask), ExpressJS, NodeJS, and SQL Server.",
        "Streamlined the process of job creation, test planning, and progress tracking by integrating Azure Blob Storage for secure report management, reducing tasking time by 48%.",
        "Maintained regular communication with the business clients to align feature development with their needs and requirements, ensuring maximum client satisfaction throughout the project lifecycle."
      ],
      workSamples: [
        {
          src: "/images/magna-sample1.png",
          alt: "Dashboard Interface",
          title: "Analytics Dashboard"
        },
        {
          src: "/images/magna-sample2.png", 
          alt: "Mobile App Screenshot",
          title: "Mobile Application"
        }
      ],
      timeline: 'previous'
    },
    {
      id: "canadian-tire",
      company: "Canadian Tire",
      position: "Automation Software Developer Co-op",
      date: "January 2023 - August 2023",
      logo: "/images/canadian-tire-logo.png",
      description: [
        "Developed and maintained automation scripts using Java and WorkFusion Automation Cloud within a Scrum team to streamline the reservation and deployment of product shipment containers via Canadian National Railway, reducing manual workload and accelerating processing by 9x.",
        "Collaborated in daily standups and sprint planning while working in an agile environment, using Jira for task tracking, Bitbucket and Git Bash for version control, and integrating backend logic with SQL; also managed builds and dependencies with Apache Maven to streamline development and deployment workflows."
      ],
      timeline: 'previous'
    }
  ]

  const handleCardClick = (cardId) => {
    const experience = experienceData.find(exp => exp.id === cardId)
    setSelectedExperience(experience)
    setIsExperienceModalOpen(true)
  }

  const closeExperienceModal = () => {
    setIsExperienceModalOpen(false)
    setSelectedExperience(null)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    if (selectedExperience?.workSamples) {
      setCurrentImageIndex((prev) => 
        prev === selectedExperience.workSamples.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = (e) => {
    e.stopPropagation()
    if (selectedExperience?.workSamples) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedExperience.workSamples.length - 1 : prev - 1
      )
    }
  }

  const goToImage = (index, e) => {
    e.stopPropagation()
    setCurrentImageIndex(index)
  }

  const openModal = (e) => {
    e.stopPropagation()
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextModalImage = () => {
    if (selectedExperience?.workSamples) {
      setCurrentImageIndex((prev) => 
        prev === selectedExperience.workSamples.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevModalImage = () => {
    if (selectedExperience?.workSamples) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedExperience.workSamples.length - 1 : prev - 1
      )
    }
  }

  return (
    <ExperienceSection
      id="experience"
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
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => handleCardClick(exp.id)}
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
              <Position>{exp.position}</Position>
              <Date>{exp.date}</Date>
              
              {/* Timeline Badge */}
              <TimelineBadge type={exp.timeline}>
                {exp.timeline === 'current' && 'Current'}
                {exp.timeline === 'recent' && 'Recent'}
                {exp.timeline === 'previous' && 'Previous'}
              </TimelineBadge>

              {/* See More Indicator */}
              <SeeMoreIndicator
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <span>See more</span>
                <FaExternalLinkAlt size={12} />
              </SeeMoreIndicator>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </ExperienceContent>

      {/* Experience Details Modal */}
      <AnimatePresence>
        {isExperienceModalOpen && selectedExperience && (
          <ExperienceModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={closeExperienceModal}
          >
            <ExperienceModalContent
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExperienceModalClose
                onClick={closeExperienceModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <FaTimes />
              </ExperienceModalClose>
              
              <ExperienceModalHeader>
                <motion.div 
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.img 
                    src={selectedExperience.logo} 
                    alt={`${selectedExperience.company} logo`} 
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div>
                    <motion.h2 
                      style={{ color: '#0984e3', fontSize: '1.8rem', margin: 0 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {selectedExperience.company}
                    </motion.h2>
                    <motion.h3 
                      style={{ color: '#2d3436', fontSize: '1.3rem', margin: '0.5rem 0' }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {selectedExperience.position}
                    </motion.h3>
                    <motion.p 
                      style={{ color: '#636e72', fontSize: '1rem', margin: 0 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {selectedExperience.date}
                    </motion.p>
                  </div>
                </motion.div>
              </ExperienceModalHeader>
              
              <ExperienceModalBody>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Description>
                    {selectedExperience.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.9 + (i * 0.1), 
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </Description>
                </motion.div>
                
                {/* Work Samples Gallery */}
                {selectedExperience.workSamples && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <WorkSamplesSection>
                      <WorkSamplesTitle>Work Samples</WorkSamplesTitle>
                      <GalleryContainer onClick={openModal}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <GalleryImage 
                              src={selectedExperience.workSamples[currentImageIndex].src} 
                              alt={selectedExperience.workSamples[currentImageIndex].alt}
                            />
                          </motion.div>
                        </AnimatePresence>
                        
                        <GalleryNav>
                          <NavButton
                            onClick={prevImage}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                          >
                            <FaChevronLeft size={12} />
                          </NavButton>
                          <NavButton
                            onClick={nextImage}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                          >
                            <FaChevronRight size={12} />
                          </NavButton>
                        </GalleryNav>
                      </GalleryContainer>
                      
                      <GalleryDots>
                        {selectedExperience.workSamples.map((_, index) => (
                          <Dot
                            key={index}
                            active={index === currentImageIndex}
                            onClick={(e) => goToImage(index, e)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                          />
                        ))}
                      </GalleryDots>
                    </WorkSamplesSection>
                  </motion.div>
                )}
              </ExperienceModalBody>
            </ExperienceModalContent>
          </ExperienceModal>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedExperience?.workSamples && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </CloseButton>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ModalImage 
                    src={selectedExperience.workSamples[currentImageIndex].src}
                    alt={selectedExperience.workSamples[currentImageIndex].alt}
                  />
                </motion.div>
              </AnimatePresence>

              <ModalNav>
                <ModalNavButton
                  onClick={prevModalImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft size={20} />
                </ModalNavButton>
                <ModalNavButton
                  onClick={nextModalImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight size={20} />
                </ModalNavButton>
              </ModalNav>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </ExperienceSection>
  )
}

export default Experience 