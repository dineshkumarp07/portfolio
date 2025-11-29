import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const skills = ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Git']
  const [idx, setIdx] = useState(0)
  const currentSkill = skills[idx]
  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % skills.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'auto' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Left: Photo */}
          <motion.div className="hero-image" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <div className="profile-image-container">
              <img
                src="/profile-pic.jpg"
                alt="Dinesh Kumar P"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <div className="placeholder-content">
                  <span className="placeholder-text">Profile Picture</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div className="hero-text" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <h1 className="hero-title-large">Dinesh Kumar</h1>
            <h2 className="role-line">{currentSkill}</h2>
            <p className="hero-description">
              I create exceptional digital experiences that combine beautiful design with powerful functionality. Let's build something amazing together.
            </p>
            <div className="cta-row">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
            <div className="social-row">
              <a href="/Dk-Resume.pdf" className="social-circle with-tooltip" data-label="Download Resume" download title="Download Resume">
                <Download size={22} />
              </a>
              <a href="https://github.com/dineshkumarp07" className="social-circle with-tooltip" data-label="GitHub" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/dinesh-kumar-9041602a5/" className="social-circle with-tooltip" data-label="LinkedIn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="https://instagram.com/" className="social-circle with-tooltip" data-label="Instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="currentColor"/><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
              <a href="mailto:dineshkumarp@example.com" className="social-circle with-tooltip" data-label="Email" title="Email">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
