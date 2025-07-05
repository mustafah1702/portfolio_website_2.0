import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const ContactSection = styled(motion.section)`
  padding: 4rem 0;
  background-color: ${props => props.isDarkMode ? '#23272f' : '#f5f6fa'};
  min-height: 100vh;
  transition: background-color 0.3s ease;
`

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  font-size: 1rem;
  transition: color 0.3s ease;
`

const Input = styled.input`
  padding: 1rem;
  background: ${props => props.isDarkMode ? '#2d3436' : '#f8f9fa'};
  border: 1px solid ${props => props.isDarkMode ? '#636e72' : '#dfe6e9'};
  border-radius: 4px;
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0984e3;
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  background: ${props => props.isDarkMode ? '#2d3436' : '#f8f9fa'};
  border: 1px solid ${props => props.isDarkMode ? '#636e72' : '#dfe6e9'};
  border-radius: 4px;
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0984e3;
  }
`

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: #0984e3;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0873c4;
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`

const SocialLink = styled(motion.a)`
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0984e3;
  }
`

const Contact = () => {
  const { isDarkMode } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  return (
    <ContactSection
      id="contact"
      isDarkMode={isDarkMode}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ContactContent>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: '#0984e3', textAlign: 'center' }}
        >
          Get In Touch
        </motion.h2>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label isDarkMode={isDarkMode} htmlFor="name">Name</Label>
            <Input isDarkMode={isDarkMode} type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label isDarkMode={isDarkMode} htmlFor="email">Email</Label>
            <Input isDarkMode={isDarkMode} type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label isDarkMode={isDarkMode} htmlFor="message">Message</Label>
            <TextArea isDarkMode={isDarkMode} id="message" name="message" required />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
        <SocialLinks>
          <SocialLink
            isDarkMode={isDarkMode}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            isDarkMode={isDarkMode}
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            isDarkMode={isDarkMode}
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaTwitter />
          </SocialLink>
          <SocialLink
            isDarkMode={isDarkMode}
            href="mailto:your.email@example.com"
            whileHover={{ y: -5 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </ContactContent>
    </ContactSection>
  )
}

export default Contact 