"use client"

import { ArrowDown, Download, Github, Mail, MapPin } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Hero = ({ scrollToSection }) => {
  const { t } = useTranslation()
  // Refs for animation
  const heroTextRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    // Fade-in and slide-up for hero text
    gsap.from(heroTextRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
    // Staggered animation for stats
    gsap.from(statsRef.current, {
      opacity: 1,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.7
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text" ref={heroTextRef}>
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>{t('hero.greeting')}</span>
            </div>
            <h1 className="hero-name">Siddhartha Raj Thapa</h1>
            <h2 className="hero-title">
              <span className="gradient-text">{t('hero.title')}</span>
            </h2>
            <p className="hero-description">
              {t('hero.description')}
            </p>

            <div className="hero-stats">
              <div className="stat" ref={el => statsRef.current[0] = el}>
                <span className="stat-number">3+</span>
                <span className="stat-label">{t('hero.stats.projects')}</span>
              </div>
              <div className="stat" ref={el => statsRef.current[1] = el}>
                <span className="stat-number">2+</span>
                <span className="stat-label">{t('hero.stats.years')}</span>
              </div>
              <div className="stat" ref={el => statsRef.current[2] = el}>
                <span className="stat-number">5+</span>
                <span className="stat-label">{t('hero.stats.technologies')}</span>
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
                {t('hero.downloadCV')}
              </a>
              <button className="btn btn-secondary" onClick={() => scrollToSection("contact")}> 
                <Mail size={20} />
                {t('hero.getInTouch')}
              </button>
            </div>

            <div className="hero-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>siddarthapa2061@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>{t('hero.location')}</span>
              </div>
              <div className="contact-item">
                <Github size={16} />
                <a href="https://github.com/Saggitarius69" target="_blank" rel="noopener noreferrer">
                  {t('hero.githubProfile')}
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar">
              <div className="avatar-ring"></div>
              <div className="avatar-image">
                <img src="/me.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
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
          aria-label={t('hero.scrollToAbout')}
        >
          <ArrowDown />
        </button>
      </div>
    </section>
  )
}

export default Hero
