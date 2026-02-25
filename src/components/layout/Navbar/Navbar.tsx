import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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
        <div className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button (Placeholder for now) */}
        <div className="nav-mobile-toggle">
          <button className="mobile-menu-btn">
            <svg
              className="icon-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
