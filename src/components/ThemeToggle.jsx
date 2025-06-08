import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

const ToggleButton = styled(motion.button)`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.isDarkMode ? '#2d3436' : '#ffffff'};
  border: 2px solid ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const IconWrapper = styled(motion.div)`
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  font-size: 1.5rem;
`

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <ToggleButton
      isDarkMode={isDarkMode}
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <IconWrapper
        isDarkMode={isDarkMode}
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </IconWrapper>
    </ToggleButton>
  )
}

export default ThemeToggle 