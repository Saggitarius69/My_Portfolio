"use client"

import { Code2, Menu, X } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const navItems = [
    { id: "home", label: t('nav.home'), path: "/" },
    { id: "about", label: t('nav.about'), path: "/about" },
    { id: "skills", label: t('nav.skills'), path: "/skills" },
    { id: "projects", label: t('nav.projects'), path: "/projects" },
    { id: "contact", label: t('nav.contact'), path: "/contact" },
  ]

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Code2 className="brand-icon" />
          <span className="brand-text">Siddhartha</span>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-link${activeSection === item.id ? " active" : ""}`}
              style={
                activeSection === item.id
                  ? {
                      color: "#8b5cf6",
                      background: "rgba(139, 92, 246, 0.15)",
                      fontWeight: 700,
                      borderBottom: "2px solid #8b5cf6",
                      borderRadius: "0.5rem 0.5rem 0 0"
                    }
                  : {}
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            style={{ padding: "0.4rem 1rem", borderRadius: "0.5rem", border: "1px solid #8b5cf6", background: "#1e293b", color: "#8b5cf6", fontWeight: 600 }}
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="ne">नेपाली</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Header
