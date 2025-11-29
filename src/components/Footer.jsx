import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/dineshkumarp07',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/dinesh-kumar-9041602a5/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      url: 'mailto:dineshperiyasamy0102@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-description">
              A passionate developer creating digital experiences that make a difference.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#projects">Web Development</a></li>
                <li><a href="#projects">UI/UX Design</a></li>
                <li><a href="#projects">Mobile Apps</a></li>
                <li><a href="#projects">Consulting</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>dineshperiyasamy0102@gmail.com</li>
                <li>dineshkumarp.23it@kongu.edu</li>
                <li>+91 93456 60829</li>
                <li>Nambiyur, Erode, Tamil Nadu, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Portfolio. Made with <Heart size={16} className="heart-icon" /> Dinesh Kumar 
            </p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
