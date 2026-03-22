import React from 'react';
import './Projects.css';
import { 
  React as ReactLogo, 
  TS as TSLogo, 
  CSS as CSSLogo, 
  CSharp as CSharpLogo,
  Unity as UnityLogo,
  Android as AndroidLogo,
  TailwindCSS,
  ShadcnUI,
  PostgreSQL,
  Supabase,
  Vercel,
  Render,
  DOTNET
} from '../../common/TechLogos/TechLogos';

interface Project {
  title: string;
  description: string;
  tags: string[];
  status: string;
  url?: string;
}

const projects: Project[] = [
  {
    title: 'SMART REPAIR',
    description: 'A full-stack repair management system with a premium "Obsidian" aesthetic. Features advanced search, sorting, and pagination, built with a robust .NET 8 API and a modern React 19 frontend.',
    tags: ['.NET', 'React 19', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'PostgreSQL', 'Supabase', 'Vercel', 'Render'],
    status: 'In Production',
    url: 'https://smart-repair-ui.vercel.app/'
  },
  {
    title: 'Liquid Crystal Portfolio',
    description: 'Personal portfolio and engineering showcase. An exploration of React 19 features, TypeScript type-safety, and high-performance UI patterns through dynamic CSS variable manipulation.',
    tags: ['React 19', 'TypeScript', 'Modern CSS'],
    status: 'In Production',
  },
  {
    title: 'Interactive Advergame (Kinect + Unity)',
    description: 'An immersive interactive system using computer vision and Kinect SDK to control a 3D charater in 3D environments. Developed with C# and Unity to bridge the gap between physical movement and digital interaction.',
    tags: ['Unity', 'C#', 'Kinect SDK', 'Computer Vision'],
    status: 'Legacy / Showcase',
  },
  {
    title: 'Accessible Mobile Game',
    description: 'Academic milestone focused on inclusive design. Developed an Android educational game in Unity tailored for children with partial visual impairment, featuring high-contrast visual cues and specialized UX.',
    tags: ['Android', 'Unity', 'Game Design'],
    status: 'Academic Milestone',
  },
];

const getTagIcon = (tag: string) => {
  const normalizedTag = tag.toLowerCase();
  if (normalizedTag.includes('react')) return <ReactLogo />;
  if (normalizedTag.includes('typescript')) return <TSLogo />;
  if (normalizedTag.includes('css')) return <CSSLogo />;
  if (normalizedTag.includes('c#')) return <CSharpLogo />;
  if (normalizedTag.includes('android')) return <AndroidLogo />;
  if (normalizedTag.includes('unity')) return <UnityLogo />;
  if (normalizedTag.includes('.net')) return <DOTNET />;
  if (normalizedTag.includes('tailwind')) return <TailwindCSS />;
  if (normalizedTag.includes('shadcn')) return <ShadcnUI />;
  if (normalizedTag.includes('postgresql')) return <PostgreSQL />;
  if (normalizedTag.includes('supabase')) return <Supabase />;
  if (normalizedTag.includes('vercel')) return <Vercel />;
  if (normalizedTag.includes('render')) return <Render />;
  
  // Generic code icon for Kotlin, Java, etc.
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <span className="project-status">{project.status}</span>
            <h3 className="project-title">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">
                  {getTagIcon(tag)}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
