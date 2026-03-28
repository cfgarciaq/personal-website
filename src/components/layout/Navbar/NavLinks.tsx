import React from 'react';
import { useTranslation } from 'react-i18next';

interface NavLinksProps {
  onLinkClick?: () => void;
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick, className }) => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <ul className={className || "nav-links"}>
      {navLinks.map((link) => (
        <li key={link.name}>
          <a 
            href={link.href} 
            className="nav-link"
            onClick={onLinkClick}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;