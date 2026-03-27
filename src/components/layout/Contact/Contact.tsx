import React from 'react';
import './Contact.css';
import { GitHub, LinkedIn } from '../../common/TechLogos/TechLogos';
import { SOCIAL_LINKS } from '../../../constants/Links.ts';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          I'm always open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="social-buttons">
          <a 
            href={ SOCIAL_LINKS.linkedin }
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button linkedin"
          >
            <LinkedIn width={40} height={40} />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href={ SOCIAL_LINKS.github } 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button github"
          >
            <GitHub width={40} height={40} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
