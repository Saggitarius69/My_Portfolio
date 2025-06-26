"use client"

import { Github, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with a form service like Formspree, Netlify Forms, etc.
    alert(t('contact.alert'))
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: <Mail />,
      label: t('contact.info.email'),
      value: "siddarthapa2061@gmail.com",
      link: "mailto:siddarthapa2061@gmail.com",
    },
    {
      icon: <Phone />,
      label: t('contact.info.phone'),
      value: "+977 9825005565",
      link: "tel:+9779825005565",
    },
    {
      icon: <MapPin />,
      label: t('contact.info.location'),
      value: t('contact.info.locationValue'),
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Github />,
      label: t('contact.social.github'),
      url: "https://github.com/Saggitarius69",
      color: "#333",
    },
    {
      icon: <Mail />,
      label: t('contact.social.email'),
      url: "mailto:siddarthapa2061@gmail.com",
      color: "#ea4335",
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('section.getInTouch')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>{t('contact.introTitle')}</h3>
              <p>{t('contact.introText')}</p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>{t('contact.followMe')}</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ "--social-color": social.color }}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={20} />
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
