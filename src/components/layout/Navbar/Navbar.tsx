import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import LanguageSwitcher from '../../common/LanguageSwitcher/LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Name */}
        <div className="nav-logo">
          <a href="#" className="nav-logo-link">
            Carlos <span className="nav-logo-accent">García</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="nav-mobile-toggle">
          <button 
            type="button"
            className="mobile-menu-btn" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
