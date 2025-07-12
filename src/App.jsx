"use client"

import { useTranslation } from "react-i18next"
import { Route, Routes, useLocation } from "react-router-dom"
import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Blogs from "./components/Blogs"

function App() {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  // Determine active section based on route
  const getActiveSection = (pathname) => {
    if (pathname === "/") return "home"
    if (pathname.startsWith("/about")) return "about"
    if (pathname.startsWith("/skills")) return "skills"
    if (pathname.startsWith("/projects")) return "projects"
    if (pathname.startsWith("/blog")) return "blog"
    if (pathname.startsWith("/contact")) return "contact"
    return "home"
  }
  const activeSection = getActiveSection(location.pathname)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <main>
        <Routes>
          <Route path="/" element={<Hero scrollToSection={scrollToSection} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
