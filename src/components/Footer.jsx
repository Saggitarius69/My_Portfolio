import { Code2 } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <Code2 />
              <span>Siddhartha Raj Thapa</span>
            </div>
            <p>Building digital experiences with passion and precision.</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Projects</h4>
              <ul>
                <li>
                  <a href="https://github.com/Saggitarius69/Stokify_IMS.git" target="_blank" rel="noopener noreferrer">
                    Stockify
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Saggitarius69/LandRentalSystemPython.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Property Management
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Saphal29/Kitab-Zone.git" target="_blank" rel="noopener noreferrer">
                    KitabZone
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="https://github.com/Saggitarius69" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:siddarthapa2061@gmail.com">Email</a>
                </li>
                <li>
                  <a href="tel:+9779825005565">Phone</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Siddhartha Raj Thapa.
            </p>
          </div>
          <div className="footer-tech">
            <p>Built with React & Vite</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
