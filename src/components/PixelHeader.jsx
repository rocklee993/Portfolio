import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

const PixelHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-[#1C1C1C] border-b-4 border-yellow-400 py-4 px-6 text-center shadow-xl font-pixel">
      <h1 className="text-yellow-300 text-2xl sm:text-3xl drop-shadow tracking-widest mb-2">
        {t('pixelHeader.title')}
      </h1>
      <nav className="space-x-6 mb-3">
        <a
          href="#projects"
          className="text-green-300 hover:text-yellow-300 text-sm sm:text-base transition duration-200 underline decoration-2 underline-offset-4 decoration-green-300/50 hover:decoration-yellow-300"
        >
          {t('navbar.projects')}
        </a>
        <a
          href="#profile"
          className="text-green-300 hover:text-yellow-300 text-sm sm:text-base transition duration-200 underline decoration-2 underline-offset-4 decoration-green-300/50 hover:decoration-yellow-300"
        >
          {t('navbar.profile')}
        </a>
        <a
          href="#skills"
          className="text-green-300 hover:text-yellow-300 text-sm sm:text-base transition duration-200 underline decoration-2 underline-offset-4 decoration-green-300/50 hover:decoration-yellow-300"
        >
          {t('navbar.skills')}
        </a>
      </nav>
      <LanguageSwitcher/>
    </header>
  );
};

export default PixelHeader;