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
          </div>

          <div className="footer-links">
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
      </div>
    </footer>
  )
}

export default Footer