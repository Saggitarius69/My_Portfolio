"use client"

import { ArrowDown, Download, Github, Mail, MapPin } from "lucide-react"

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            <h1 className="hero-name">Siddhartha Raj Thapa</h1>
            <h2 className="hero-title">
              <span className="gradient-text">Web Developer</span>
            </h2>
            <p className="hero-description">
              Motivated and detail-oriented developer seeking opportunities to gain hands-on experience in dynamic,
              technology-focused environments. I create modern, responsive web applications with clean code and
              intuitive user experiences.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>

            <div className="hero-actions">
              <a
                href="https://drive.google.com/file/d/1mp7s6vbAEDuLhddy1mHajGvbChm1LYZ0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Download size={20} />
                Download CV
              </a>
              <button className="btn btn-secondary" onClick={() => scrollToSection("contact")}>
                <Mail size={20} />
                Get In Touch
              </button>
            </div>

            <div className="hero-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>siddarthapa2061@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Dharan 11, Sunsari</span>
              </div>
              <div className="contact-item">
                <Github size={16} />
                <a href="https://github.com/Saggitarius69" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar">
              <div className="avatar-ring"></div>
              <div className="avatar-image">
                <span className="avatar-text">ST</span>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">💻</div>
                <div className="floating-element element-2">🚀</div>
                <div className="floating-element element-3">⚡</div>
                <div className="floating-element element-4">🎯</div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to about section"
        >
          <ArrowDown />
        </button>
      </div>
    </section>
  )
}

export default Hero
