import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { FaTimes, FaDownload } from 'react-icons/fa'

const ResumeModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
`

const ModalContent = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 1000px;
  height: 90vh;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`

const ModalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 10;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const ModalTitle = styled.h3`
  color: #2d3436;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ActionButton = styled.button`
  background: ${props => props.primary ? '#0984e3' : 'rgba(0, 0, 0, 0.5)'};
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.primary ? '#0873c4' : 'rgba(0, 0, 0, 0.8)'};
    transform: scale(1.1);
  }
`

const ResumeFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
  margin-top: 60px;
`

const Resume = ({ isOpen, onClose }) => {
  // Convert Google Docs URL to PDF viewer URL
  const googleDocsUrl = 'https://docs.google.com/document/d/15bDF246QcmNbmaW3y3dZNS4dctqcfOndJZ-oEYDXNtI/edit?usp=sharing'
  const pdfViewerUrl = googleDocsUrl.replace('/edit?usp=sharing', '/preview')
  
  // Download URL - convert to PDF download
  const downloadUrl = googleDocsUrl.replace('/edit?usp=sharing', '/export?format=pdf')

  const handleDownload = () => {
    // Open Google Docs export page in a new tab for better download experience
    window.open(downloadUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <ResumeModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ModalHeader>
              <ModalTitle>Mustafa Hasan - Resume</ModalTitle>
              <ButtonGroup>
                <ActionButton 
                  primary
                  onClick={handleDownload}
                  title="Download Resume"
                >
                  <FaDownload />
                </ActionButton>
                <ActionButton 
                  onClick={onClose}
                  title="Close"
                >
                  <FaTimes />
                </ActionButton>
              </ButtonGroup>
            </ModalHeader>
            <ResumeFrame
              src={pdfViewerUrl}
              title="Mustafa Hasan Resume"
              allowFullScreen
            />
          </ModalContent>
        </ResumeModal>
      )}
    </AnimatePresence>
  )
}

export default Resume 