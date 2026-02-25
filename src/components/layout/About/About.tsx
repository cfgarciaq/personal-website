import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a software developer focused on building high-quality, 
              performant digital experiences. My approach combines technical 
              precision with a modern aesthetic, ensuring that every project 
              not only works flawlessly but also provides a fluid user experience.
            </p>
            <p>
              With a background in .NET and a passion for frontend development, 
              I strive to bridge the gap between robust backend logic and 
              elegant user interfaces.
            </p>
          </div>
          <div className="about-stack">
            <h3>Core Stack</h3>
            <ul className="stack-list">
              <li className="stack-item react">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-icon">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M12 12c-4.418 0-8-1.79-8-4s3.582-4 8-4 8 1.79 8 4-3.582 4-8 4z"></path>
                  <path d="M12 12c0 4.418-1.79 8-4 8s-4-3.582-4-8 1.79-8 4-8 4 3.582 4 8z" transform="rotate(60 12 12)"></path>
                  <path d="M12 12c0 4.418-1.79 8-4 8s-4-3.582-4-8 1.79-8 4-8 4 3.582 4 8z" transform="rotate(120 12 12)"></path>
                </svg>
                React 19
              </li>
              <li className="stack-item ts">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-icon">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"></path>
                  <path d="M7 15V9"></path>
                  <path d="M4 9h6"></path>
                  <path d="M14 15c.5-1 1.5-1 2-1s1.5 0 2 1"></path>
                  <path d="M14 11c.5 1 1.5 1 2 1s1.5 0 2-1"></path>
                </svg>
                TypeScript
              </li>
              <li className="stack-item css">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-icon">
                  <path d="M20 4L18.5 20L12 22L5.5 20L4 4H20Z"></path>
                  <path d="M12 8H8.5L9 11.5H12V14.5L9.5 13.5L9.3 12"></path>
                  <path d="M12 8H15.5L15 14.5L12 15.5V8Z"></path>
                </svg>
                Modern CSS
              </li>
              <li className="stack-item dotnet">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-icon">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
                .NET / C#
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
