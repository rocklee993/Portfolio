import React from "react";
import { useTranslation } from 'react-i18next'; // Importez useTranslation
import LanguageSwitcher from "./LanguageSwitcher";

const PixelHeader = () => {
  const { t } = useTranslation(); // Initialisez le hook

  return (
    <header className="bg-[#1C1C1C] border-b-4 border-yellow-400 py-4 px-6 text-center shadow-xl font-pixel">
      <h1 className="text-yellow-300 text-2xl sm:text-3xl drop-shadow tracking-widest mb-2">
        {t('pixelHeader.title')} {/* Utilisez la traduction pour le titre */}
      </h1>
      <nav className="space-x-6">
        <a
          href="#projects" // Cet ID doit correspondre à l'ID de votre section Projets
          className="text-green-300 hover:text-yellow-300 text-sm sm:text-base transition duration-200"
        >
          {t('navbar.projects')} {/* Réutilise la clé de la navbar générale */}
        </a>
        <a
          href="#profile" // Cet ID doit correspondre à l'ID de votre section Profil
          className="text-green-300 hover:text-yellow-300 text-sm sm:text-base transition duration-200"
        >
          {t('navbar.profile')} {/* Utilise la clé ajoutée précédemment à la navbar */}
        </a>
        <a
          href="#skills" // Cet ID doit correspondre à l'ID de votre section Compétences
          className="text-green-300 hover:text-yellow-300 text-sm sm:text-base transition duration-200"
        >
          {t('navbar.skills')} {/* Réutilise la clé de la navbar générale */}
        </a>
      </nav>
      <LanguageSwitcher/>
    </header>
  );
};

export default PixelHeader;