import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
