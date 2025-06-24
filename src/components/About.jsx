import { GraduationCap, Award, Target, Users } from "lucide-react"

const About = () => {
  const education = [
    {
      degree: "BSC. (Hons) Computing",
      institution: "London Metropolitan University",
      location: "Itahari International College",
      period: "2023 - Current",
      icon: <GraduationCap />,
    },
    {
      degree: "Higher Education in Computer Science",
      institution: "Eureka Higher Secondary School",
      location: "Dharan 04, Sunsari",
      period: "2020 - 2022",
      icon: <Award />,
    },
  ]

  const certifications = [
    {
      name: "AWS Academy Cloud Foundations",
      link: "https://drive.google.com/drive/folders/1wIHpy14lv866urMmko24lAQsneAZIn-n?usp=sharing",
    },
    {
      name: "AWS Academy Machine Learning Foundations",
      link: "https://drive.google.com/drive/folders/1P2EXlSN_Hjl-LNgnuESgAmR6GkOQB1FX?usp=sharing",
    },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <div className="card-icon">
                <Target />
              </div>
              <h3>Career Objective</h3>
              <p>
                Motivated and detail-oriented individual seeking an internship to gain hands-on experience in a dynamic,
                technology-focused environment. With a solid academic background in IT and a good understanding of
                modern tools and practices, I aim to contribute to real-world projects, develop practical skills, and
                grow professionally as part of a collaborative team.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight">
                <Users className="highlight-icon" />
                <div>
                  <h4>Collaborative Team Player</h4>
                  <p>Experience working in teams on college projects</p>
                </div>
              </div>
              <div className="highlight">
                <Target className="highlight-icon" />
                <div>
                  <h4>Problem Solver</h4>
                  <p>Strong critical thinking and problem-solving abilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="education-section">
              <h3>Education</h3>
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
              <h3>Certifications</h3>
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
