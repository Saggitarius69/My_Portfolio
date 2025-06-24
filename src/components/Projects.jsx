"use client"

import { useState } from "react"
import { ExternalLink, Github, Filter, Package, Home, BookOpen } from "lucide-react"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Stockify - Inventory Management System",
      description:
        "A comprehensive inventory management system built with HTML, CSS, and Bootstrap. Features include adding, updating, and tracking inventory with smooth navigation and secure data handling. Integrated role-based access and CRUD functionalities for efficient stock management.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      category: "web",
      github: "https://github.com/Saggitarius69/Stokify_IMS.git",
      demo: null,
      icon: <Package />,
    },
    {
      id: 2,
      title: "Property Management System",
      description:
        "A Python-based property management system designed to handle land records and bookings efficiently. Features include property viewing, booking management, and an intuitive interface ensuring accuracy, security, and smooth navigation for enhanced user experience.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "Tkinter", "SQLite"],
      category: "desktop",
      github: "https://github.com/Saggitarius69/LandRentalSystemPython.git",
      demo: null,
      icon: <Home />,
    },
    {
      id: 3,
      title: "KitabZone - Library Management",
      description:
        "A collaborative college project for library management handling book transactions, student reservations, and fine management. Built with JSP for frontend, Servlets for processing, and JDBC for database connectivity with MySQL.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["JSP", "Servlets", "JDBC", "MySQL"],
      category: "web",
      github: "https://github.com/Saphal29/Kitab-Zone.git",
      demo: null,
      icon: <BookOpen />,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web", label: "Web Apps", count: projects.filter((p) => p.category === "web").length },
    { id: "desktop", label: "Desktop Apps", count: projects.filter((p) => p.category === "desktop").length },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and contributions</p>
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
                    View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                      <ExternalLink size={18} />
                      Live Demo
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
