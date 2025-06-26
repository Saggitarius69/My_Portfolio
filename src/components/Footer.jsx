import { Code2 } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <Code2 />
              <span>Siddhartha Raj Thapa</span>
            </div>
            <p>{t('footer.tagline')}</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>{t('footer.quickLinks')}</h4>
              <ul>
                <li>
                  <Link to="/">{t('nav.home')}</Link>
                </li>
                <li>
                  <Link to="/about">{t('nav.about')}</Link>
                </li>
                <li>
                  <Link to="/skills">{t('nav.skills')}</Link>
                </li>
                <li>
                  <Link to="/projects">{t('nav.projects')}</Link>
                </li>
                <li>
                  <Link to="/contact">{t('nav.contact')}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>{t('footer.projects')}</h4>
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
              <h4>{t('footer.connect')}</h4>
              <ul>
                <li>
                  <a href="https://github.com/Saggitarius69" target="_blank" rel="noopener noreferrer">
                    {t('footer.github')}
                  </a>
                </li>
                <li>
                  <a href="mailto:siddarthapa2061@gmail.com">{t('footer.email')}</a>
                </li>
                <li>
                  <a href="tel:+9779825005565">{t('footer.phone')}</a>
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
            <p>{t('footer.builtWith')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
