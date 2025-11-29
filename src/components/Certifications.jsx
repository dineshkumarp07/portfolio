import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2024',
      description: 'Comprehensive course covering React, Node.js, MongoDB, and modern web development practices.',
      credentialUrl: '#',
      featured: false
    },
    {
      id: 2,
      title: 'MongoDB Associate Developer Exam',
      issuer: 'MongoDB',
      date: '2024',
      description: 'Mastered JavaScript fundamentals, algorithms, and data structures through hands-on projects.',
      credentialUrl: '#',
      featured: false  
    },
    {
      id: 3,
      title: 'Angular',
      issuer: 'Coursera',
      date: '2023',
      description: 'Advanced React concepts including hooks, context, state management, and component architecture.',
      credentialUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Git hub Foundation',
      issuer: 'Github',
      date: '2023',
      description: 'Learned server-side development with Node.js, Express, and database integration.',
      credentialUrl: '#',
      featured: false
    }
  ]

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <motion.div
          className="certifications-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Certifications & Learning</h2>
          <p className="section-subtitle">
            Continuous learning through online courses and certifications to stay updated with latest technologies
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={`certification-card ${cert.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="certification-header">
                <div className="certification-icon">
                  <Award size={32} />
                </div>
                <div className="certification-badge">
                  {cert.featured && <span className="featured-badge">Featured</span>}
                </div>
              </div>
              
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">{cert.date}</p>
                <p className="certification-description">{cert.description}</p>
                
                <a 
                  href={cert.credentialUrl} 
                  className="btn btn-outline btn-neutral certification-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
