import { Brain, Clock, Code, Database, GitBranch, Globe, MessageCircle, Palette, Target, Users } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Skills = () => {
  const { t } = useTranslation()
  const technicalSkills = [
    { name: "HTML/CSS", level: 90, icon: <Code />, color: "#e34c26" },
    { name: "Python & Django", level: 85, icon: <Code />, color: "#3776ab" },
    { name: "UI/UX Design", level: 80, icon: <Palette />, color: "#ff6b6b" },
    { name: "Git & GitHub", level: 85, icon: <GitBranch />, color: "#f05032" },
    { name: "Database Management", level: 75, icon: <Database />, color: "#336791" },
    { name: "Web Development", level: 88, icon: <Globe />, color: "#61dafb" },
  ]

  const softSkills = [
    { name: t('skills.soft.timeManagement.title'), icon: <Clock />, description: t('skills.soft.timeManagement.desc') },
    { name: t('skills.soft.criticalThinking.title'), icon: <Brain />, description: t('skills.soft.criticalThinking.desc') },
    { name: t('skills.soft.problemSolving.title'), icon: <Target />, description: t('skills.soft.problemSolving.desc') },
    { name: t('skills.soft.teamwork.title'), icon: <Users />, description: t('skills.soft.teamwork.desc') },
    { name: t('skills.soft.communication.title'), icon: <MessageCircle />, description: t('skills.soft.communication.desc') },
  ]

  const skillCardsRef = useRef([]);

  useEffect(() => {
    gsap.from(skillCardsRef.current, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out"
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </div>

        <div className="skills-content">
          <div className="technical-skills">
            <h3>{t('skills.technical')}</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card"
                  ref={el => skillCardsRef.current[index] = el}
                >
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3>{t('skills.softTitle')}</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-card">
                  <div className="soft-skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Project(s) section */}
        <div className="featured-projects" style={{ marginTop: 32 }}>
          <h3>Featured Project(s)</h3>
          <ul>
            <li><strong>Stokify IMS</strong> (Inventory Management System)</li>
            <li><strong>Land Rental System (Python)</strong></li>
            <li><strong>Kitab Zone (JSP/Servlets)</strong></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
