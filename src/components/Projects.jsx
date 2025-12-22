import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Restaurant Reservation System',
      description: 'A comprehensive restaurant management system that allows customers to make online reservations, view menu items, and manage their bookings. Features include real-time table availability, customer profiles, and admin dashboard.',
      image: '/Screenshot 2025-11-21 111511.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/dineshkumarp07/restaurant-reservation',
      featured: true 
    },
    
    {
      id: 2,
      title: 'Student Complaint Portal',
      description: 'A secure platform for students to submit complaints and feedback anonymously. Features include anonymous reporting, complaint tracking, admin response system, and analytics dashboard for administrators.',
      image: '/Screenshot 2025-11-11 200855.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/dineshkumarp07/complaint_portal',
      featured: false
    },
   
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>
                
                <p className="project-description">{project.description}</p>

                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                    title="View Live Demo"
                  >
                    <ExternalLink size={18} />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                    title="View Source Code"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
