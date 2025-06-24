import { Code, Palette, Database, GitBranch, Globe, Brain, Clock, Users, MessageCircle, Target } from "lucide-react"

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", level: 90, icon: <Code />, color: "#e34c26" },
    { name: "Python & Django", level: 85, icon: <Code />, color: "#3776ab" },
    { name: "UI/UX Design", level: 80, icon: <Palette />, color: "#ff6b6b" },
    { name: "Git & GitHub", level: 85, icon: <GitBranch />, color: "#f05032" },
    { name: "Database Management", level: 75, icon: <Database />, color: "#336791" },
    { name: "Web Development", level: 88, icon: <Globe />, color: "#61dafb" },
  ]

  const softSkills = [
    { name: "Time Management", icon: <Clock />, description: "Efficient project planning and deadline management" },
    { name: "Critical Thinking", icon: <Brain />, description: "Analytical approach to problem-solving" },
    { name: "Problem Solving", icon: <Target />, description: "Creative solutions to technical challenges" },
    { name: "Teamwork", icon: <Users />, description: "Collaborative development and communication" },
    { name: "Communication", icon: <MessageCircle />, description: "Clear technical and client communication" },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and abilities I work with</p>
        </div>

        <div className="skills-content">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3>Soft Skills</h3>
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
      </div>
    </section>
  )
}

export default Skills
