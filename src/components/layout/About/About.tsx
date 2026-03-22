import React from 'react';
import './About.css';
import { 
  React as ReactIcon, 
  CSS as CSSIcon, 
  TS as TSIcon, 
  DOTNET as DOTNETIcon,
  TailwindCSS,
  PostgreSQL,
  Supabase,
  Vercel,
  Render,
  KiloCode,
  GitHubCopilot
} from '../../common/TechLogos/TechLogos';

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
                <ReactIcon className="tech-icon react-icon" width={24} height={24} />
                React 19
              </li>
              <li className="stack-item ts">
                <TSIcon className="tech-icon ts-icon" width={24} height={24} />
                TypeScript
              </li>
              <li className="stack-item css">
                <CSSIcon className="tech-icon css-icon" width={24} height={24} />
                Modern CSS
              </li>
              <li className="stack-item dotnet">
                <DOTNETIcon className="tech-icon dotnet-icon" width={24} height={24} />
                .NET / C#
              </li>
            </ul>
            
            <h3 style={{ marginTop: '2rem' }}>Tools & Infrastructure</h3>
            <ul className="stack-list">
              <li className="stack-item tailwind">
                <TailwindCSS className="tech-icon tailwind-icon" width={24} height={24} />
                Tailwind CSS
              </li>
              <li className="stack-item postgres">
                <PostgreSQL className="tech-icon postgres-icon" width={24} height={24} />
                PostgreSQL
              </li>
              <li className="stack-item supabase">
                <Supabase className="tech-icon supabase-icon" width={24} height={24} />
                Supabase
              </li>
              <li className="stack-item vercel">
                <div className="tech-icon-group">
                  <Vercel className="tech-icon vercel-icon" width={24} height={24} />
                  <Render className="tech-icon render-icon" width={24} height={24} />
                </div>
                Vercel / Render
              </li>
            </ul>

            <h3 style={{ marginTop: '2rem' }}>AI & Agentic Development</h3>
            <ul className="stack-list">
              <li className="stack-item kilocode">
                <KiloCode className="tech-icon kilocode-icon" width={24} height={24} />
                Kilo Code
              </li>
              <li className="stack-item copilot">
                <GitHubCopilot className="tech-icon copilot-icon" width={24} height={24} />
                GitHub Copilot
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
