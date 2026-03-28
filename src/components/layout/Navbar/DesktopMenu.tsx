import React from 'react';
import NavLinks from './NavLinks';
import LanguageSelector from './LanguageSelector';

const DesktopMenu: React.FC = () => {
  return (
    <div className="nav-desktop-menu">
      <NavLinks className="nav-links-desktop" />
      <LanguageSelector className="language-selector-desktop" />
    </div>
  );
};

export default DesktopMenu;