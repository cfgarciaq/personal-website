import React from 'react';
import NavLinks from './NavLinks';
import LanguageSelector from './LanguageSelector';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`nav-mobile-menu ${isOpen ? 'active' : ''}`}>
      <NavLinks onLinkClick={onClose} className="nav-links-mobile" />
      <LanguageSelector onLanguageChange={onClose} className="language-selector-mobile" />
    </div>
  );
};

export default MobileMenu;