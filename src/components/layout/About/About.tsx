import React from 'react';
import './About.css';
import { ReactLogo, CSSLogo, TSLogo, DOTNETLogo } from '../../common/TechLogos/TechLogos';

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
                <ReactLogo className="tech-icon react-icon" width={24} height={24} />
                React 19
              </li>
              <li className="stack-item ts">
                <TSLogo className="tech-icon ts-icon" width={24} height={24} />
                TypeScript
              </li>
              <li className="stack-item css">
                <CSSLogo className="tech-icon css-icon" width={24} height={24} />
                Modern CSS
              </li>
              <li className="stack-item dotnet">
                <DOTNETLogo className="tech-icon dotnet-icon" width={24} height={24} />
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


