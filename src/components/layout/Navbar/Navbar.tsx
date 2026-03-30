import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

// --- Sub-components (Internal to Navbar for better maintainability) ---

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

interface LanguageSelectorProps {
  onLanguageChange?: () => void;
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange, className }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <div className={className || "language-selector"}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-selector-btn ${i18n.language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

// --- Main Navbar Component ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Name */}
        <div className="nav-logo">
          <a href="#" className="nav-logo-link" onClick={closeMenu}>
            Carlos <span className="nav-logo-accent">García</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop-menu">
          <NavLinks className="nav-links-desktop" />
          <LanguageSelector className="language-selector-desktop" />
        </div>

        {/* Mobile Menu Button */}
        <div className="nav-mobile-toggle">
          <button 
            type="button"
            className="mobile-menu-btn" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isOpen ? 'Close Menu' : 'Open Menu'}
            </span>
            <svg
              className={`icon-md ${isOpen ? 'open' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`nav-mobile-menu ${isOpen ? 'active' : ''}`}>
          <NavLinks onLinkClick={closeMenu} className="nav-links-mobile" />
          <LanguageSelector onLanguageChange={closeMenu} className="language-selector-mobile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
