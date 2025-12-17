import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Users, Award } from 'lucide-react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'I write maintainable, scalable code following best practices and design patterns.'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces that provide exceptional user experiences.'
    },
    {
      icon: <Users size={32} />,
      title: 'Team Collaboration',
      description: 'Experienced in working with cross-functional teams and agile development methodologies.'
    },
    {
      icon: <Award size={32} />,
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and industry best practices.'
    }
  ]

  const [lcStats, setLcStats] = useState({ total: null, easy: null, medium: null, hard: null })
  useEffect(() => {
    const u = 'dineshkumarp_'
    fetch(`https://leetcode-stats-api.herokuapp.com/${u}`)
      .then(r => r.json())
      .then(d => setLcStats({ total: d.totalSolved ?? null, easy: d.easySolved ?? null, medium: d.mediumSolved ?? null, hard: d.hardSolved ?? null }))
      .catch(() => {})
  }, [])

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a love for creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm a IT Student & Developer</h3>
            <p>
              IT student and developer at KEC, building full‑stack apps with React, Node.js, and MongoDB. I love learning by building and solving real problems.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="profile-card">
              <div className="avatar-badge">DK</div>
              <h4 className="role">Frontend Developer</h4>
              <p className="stack">MERN Stack</p>
              <ul className="info-list">
                <li><span>Location:</span> Erode</li>
                <li><span>Education:</span> B.Tech IT (3rd Year, KEC)</li>
                <li><span>Projects Completed:</span> 3</li>
                <li><span>Status:</span> Available for internships</li>
                <li><span>Experience:</span> Project-based</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="coding-section">
          <h3 className="coding-title">Live Coding Profiles & Stats</h3>
          <div className="platforms">
            <a
              className="platform-card lc"
              href="https://leetcode.com/u/dineshkumarp_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="platform-header">
                <div className="badge">LC</div>
                <div className="handle">dineshkumarp_</div>
              </div>
              <div className="platform-body">
                <div className="stat-item">
                  <div className="stat-value">{lcStats.total ?? '-'}</div>
                  <div className="stat-label">Total</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{lcStats.easy ?? '-'}</div>
                  <div className="stat-label">Easy</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{lcStats.medium ?? '-'}</div>
                  <div className="stat-label">Medium</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{lcStats.hard ?? '-'}</div>
                  <div className="stat-label">Hard</div>
                </div>
              </div>
              <div className="platform-footer">Click to view profile →</div>
            </a>

            <a
              className="platform-card gfg"
              href="https://auth.geeksforgeeks.org/user/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="platform-header">
                <div className="badge">GFG</div>
                <div className="handle">@your_gfg_id</div>
              </div>
              <div className="platform-body">
                <div className="stat-item">
                  <div className="stat-value">—</div>
                  <div className="stat-label">Problems</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">—</div>
                  <div className="stat-label">Score</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">—</div>
                  <div className="stat-label">Rank</div>
                </div>
              </div>
              <div className="platform-footer">Click to view profile →</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
