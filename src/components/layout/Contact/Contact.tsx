import React from 'react';
import './Contact.css';
import { GitHub, LinkedIn } from '../../common/TechLogos/TechLogos';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          I'm always open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="contact-links">
          <a 
            href="https://linkedin.com/in/cfgarcia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link linkedin"
          >
            <LinkedIn width={40} height={40} />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/cfgarcia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link github"
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
