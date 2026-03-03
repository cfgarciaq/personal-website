import React from 'react';
import './Contact.css';
import { GitHubLogo, LinkedInLogo } from '../../common/TechLogos/TechLogos';

const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's build something together</h2>
        <p className="contact-description">
          I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="social-buttons">
          <a 
            href="https://linkedin.com/in/cfgarciaquiroga" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-button linkedin"
          >
            <LinkedInLogo width={40} height={40} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/cfgarciaq" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-button github"
          >
            <GitHubLogo width={40} height={40} />
            <span>GitHub</span>
          </a>
        </div>

        <footer className="footer">
          <p>&copy; {currentYear} Carlos García. All rights reserved.</p>
          <p>Built with React 19 & TypeScript</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
