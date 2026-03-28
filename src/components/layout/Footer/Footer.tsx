import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import LanguageSwitcher from '../../common/LanguageSwitcher/LanguageSwitcher';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          &copy; {currentYear} Carlos García. {t('footer.rights')}
        </p>
        <LanguageSwitcher />
      </div>
    </footer>
  );
};

export default Footer;
