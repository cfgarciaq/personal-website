import React from 'react';
import { useTranslation } from 'react-i18next';

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

export default LanguageSelector;