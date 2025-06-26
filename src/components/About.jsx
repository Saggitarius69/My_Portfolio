import { Award, GraduationCap, Target, Users } from "lucide-react"
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()
  const education = [
    {
      degree: t('about.education.degree1'),
      institution: t('about.education.institution1'),
      location: t('about.education.location1'),
      period: t('about.education.period1'),
      icon: <GraduationCap />,
    },
    {
      degree: t('about.education.degree2'),
      institution: t('about.education.institution2'),
      location: t('about.education.location2'),
      period: t('about.education.period2'),
      icon: <Award />,
    },
  ]

  const certifications = [
    {
      name: t('about.certifications.cert1'),
      link: "https://drive.google.com/drive/folders/1wIHpy14lv866urMmko24lAQsneAZIn-n?usp=sharing",
    },
    {
      name: t('about.certifications.cert2'),
      link: "https://drive.google.com/drive/folders/1P2EXlSN_Hjl-LNgnuESgAmR6GkOQB1FX?usp=sharing",
    },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <div className="card-icon">
                <Target />
              </div>
              <h3>{t('about.careerObjective.title')}</h3>
              <p>{t('about.careerObjective.text')}</p>
            </div>

            <div className="about-highlights">
              <div className="highlight">
                <Users className="highlight-icon" />
                <div>
                  <h4>{t('about.highlights.teamPlayer.title')}</h4>
                  <p>{t('about.highlights.teamPlayer.text')}</p>
                </div>
              </div>
              <div className="highlight">
                <Target className="highlight-icon" />
                <div>
                  <h4>{t('about.highlights.problemSolver.title')}</h4>
                  <p>{t('about.highlights.problemSolver.text')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="education-section">
              <h3>{t('section.education')}</h3>
              <div className="timeline">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-icon">{edu.icon}</div>
                    <div className="timeline-content">
                      <h4>{edu.degree}</h4>
                      <p className="institution">{edu.institution}</p>
                      <p className="location">{edu.location}</p>
                      <span className="period">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="certifications-section">
              <h3>{t('section.certifications')}</h3>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-item"
                  >
                    <Award className="cert-icon" />
                    <span>{cert.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
