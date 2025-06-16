import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}> {/* Stylez comme vous le souhaitez */}
      <button 
        onClick={() => changeLanguage('en')} 
        disabled={i18n.language === 'en'}
        style={{ marginRight: '5px', padding: '5px 10px', cursor: i18n.language === 'en' ? 'default' : 'pointer' }}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('fr')} 
        disabled={i18n.language === 'fr'}
        style={{ padding: '5px 10px', cursor: i18n.language === 'fr' ? 'default' : 'pointer' }}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;