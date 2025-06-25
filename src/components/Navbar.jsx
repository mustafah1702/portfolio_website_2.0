import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.isDarkMode ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(5px);
  padding: 1rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
`

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0984e3;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: center;
`

const NavLink = styled(motion.a)`
  color: ${props => props.isDarkMode ? '#ffffff' : '#2d3436'};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #0984e3;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`

const Navbar = () => {
  const { isDarkMode } = useTheme()

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      // Use GSAP ScrollSmoother to scroll
      const smoother = window.ScrollSmoother.get()
      if (smoother) {
        smoother.scrollTo(element, true, 'center center')
      }
    }
  }

  return (
    <Header
      isDarkMode={isDarkMode}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        {/* <Logo>MH</Logo> */}
        <NavLinks>
          <NavLink 
            isDarkMode={isDarkMode}
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            whileHover={{ y: -2 }}
          >
            About
          </NavLink>
          <NavLink 
            isDarkMode={isDarkMode}
            href="#education" 
            onClick={(e) => scrollToSection(e, 'education')}
            whileHover={{ y: -2 }}
          >
            Education
          </NavLink>
          <NavLink 
            isDarkMode={isDarkMode}
            href="#experience" 
            onClick={(e) => scrollToSection(e, 'experience')}
            whileHover={{ y: -2 }}
          >
            Experience
          </NavLink>
          <NavLink 
            isDarkMode={isDarkMode}
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            whileHover={{ y: -2 }}
          >
            Projects
          </NavLink>
          <NavLink 
            isDarkMode={isDarkMode}
            href="#tech-stack" 
            onClick={(e) => scrollToSection(e, 'tech-stack')}
            whileHover={{ y: -2 }}
          >
            Tech Stack
          </NavLink>
          <NavLink 
            isDarkMode={isDarkMode}
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            whileHover={{ y: -2 }}
          >
            Contact
          </NavLink>
        </NavLinks>
        <ThemeToggle />
      </Nav>
    </Header>
  )
}

export default Navbar 