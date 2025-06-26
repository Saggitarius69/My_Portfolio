"use client"

import { BookOpen, ExternalLink, Filter, Github, Home, Package } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const Projects = () => {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      category: "web",
      github: "https://github.com/Saggitarius69/Stokify_IMS.git",
      demo: null,
      icon: <Package />,
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "Tkinter", "SQLite"],
      category: "desktop",
      github: "https://github.com/Saggitarius69/LandRentalSystemPython.git",
      demo: null,
      icon: <Home />,
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["JSP", "Servlets", "JDBC", "MySQL"],
      category: "web",
      github: "https://github.com/Saphal29/Kitab-Zone.git",
      demo: null,
      icon: <BookOpen />,
    },
  ]

  const filters = [
    { id: "all", label: t('projects.filters.all'), count: projects.length },
    { id: "web", label: t('projects.filters.web'), count: projects.filter((p) => p.category === "web").length },
    { id: "desktop", label: t('projects.filters.desktop'), count: projects.filter((p) => p.category === "desktop").length },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('section.featuredProjects')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>

        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <Filter size={16} />
              {filter.label}
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-icon">{project.icon}</div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} />
                    {t('projects.viewCode')}
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                      <ExternalLink size={18} />
                      {t('projects.liveDemo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
