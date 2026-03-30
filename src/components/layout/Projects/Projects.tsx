import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import { 
  React as ReactIcon, 
  TS as TSIcon, 
  CSS as CSSIcon, 
  CSharp as CSharpIcon,
  Unity as UnityIcon,
  Android as AndroidIcon,
  TailwindCSS,
  ShadcnUI,
  PostgreSQL,
  Supabase,
  Vercel,
  Render,
  DOTNET,
  KiloCode
} from '../../common/TechLogos/TechLogos';

interface Project {
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  statusKey: string;
  url?: string;
}

const projects: Project[] = [
  {
    titleKey: 'projects.items.smartRepair.title',
    descriptionKey: 'projects.items.smartRepair.description',
    tags: ['.NET', 'React 19', 'TypeScript', 'Tailwind', 'Shadcn/UI', 'PostgreSQL', 'Supabase', 'Vercel', 'Render', 'Kilo Code'],
    statusKey: 'projects.status.production',
    url: 'https://smart-repair-ui.vercel.app/'
  },
  {
    titleKey: 'projects.items.portfolio.title',
    descriptionKey: 'projects.items.portfolio.description',
    tags: ['React 19', 'TypeScript', 'Modern CSS', 'Vercel'],
    statusKey: 'projects.status.production',
  },
  {
    titleKey: 'projects.items.advergame.title',
    descriptionKey: 'projects.items.advergame.description',
    tags: ['Unity', 'C#', 'Kinect SDK', 'Computer Vision'],
    statusKey: 'projects.status.legacy',
    url: 'https://www.youtube.com/watch?v=RY2VnnNOhbw'
  },
  {
    titleKey: 'projects.items.mobileGame.title',
    descriptionKey: 'projects.items.mobileGame.description',
    tags: ['Android', 'Unity', 'Game Design'],
    statusKey: 'projects.status.academic',
  },
];

const getTagIcon = (tag: string) => {
  const normalizedTag = tag.toLowerCase();
  if (normalizedTag.includes('react')) return <ReactIcon />;
  if (normalizedTag.includes('typescript')) return <TSIcon />;
  if (normalizedTag.includes('css')) return <CSSIcon />;
  if (normalizedTag.includes('c#')) return <CSharpIcon />;
  if (normalizedTag.includes('android')) return <AndroidIcon />;
  if (normalizedTag.includes('unity')) return <UnityIcon />;
  if (normalizedTag.includes('.net')) return <DOTNET />;
  if (normalizedTag.includes('tailwind')) return <TailwindCSS />;
  if (normalizedTag.includes('shadcn/ui')) return <ShadcnUI />;
  if (normalizedTag.includes('postgresql')) return <PostgreSQL />;
  if (normalizedTag.includes('supabase')) return <Supabase />;
  if (normalizedTag.includes('vercel')) return <Vercel />;
  if (normalizedTag.includes('render')) return <Render />;
  if (normalizedTag.includes('kilo code')) return <KiloCode />;
  
  // Generic code icon for Kotlin, Java, etc.
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <span className="project-status">{t(project.statusKey)}</span>
            <h3 className="project-title">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                  {t(project.titleKey)}
                  <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ) : (
                t(project.titleKey)
              )}
            </h3>
            <p className="project-description">{t(project.descriptionKey)}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  <span className="tag-icon">{getTagIcon(tag)}</span>
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
