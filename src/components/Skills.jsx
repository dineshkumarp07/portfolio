import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'HTML/CSS' },
        { name: 'Tailwind CSS' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Python' },
        { name: 'MongoDB' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git' },
      ]
    }
  ]

  const getDeviconClass = (name) => {
    switch (name) {
      case 'React':
        return 'devicon-react-original colored'
      case 'JavaScript':
        return 'devicon-javascript-plain colored'
      case 'TypeScript':
        return 'devicon-typescript-plain colored'
      case 'HTML/CSS':
        return 'devicon-html5-plain colored'
      case 'Tailwind CSS':
        return 'devicon-tailwindcss-plain colored'
      case 'Node.js':
        return 'devicon-nodejs-plain colored'
      case 'Express.js':
        return 'devicon-express-original'
      case 'Python':
        return 'devicon-python-plain colored'
      case 'MongoDB':
        return 'devicon-mongodb-plain colored'
      case 'Git':
        return 'devicon-git-plain colored'
      default:
        return ''
    }
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <i className={`skill-icon ${getDeviconClass(skill.name)}`}></i>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
