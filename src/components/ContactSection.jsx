import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const FooterRPG = () => {
  const { t } = useTranslation(); // Initialisez le hook de traduction
  const currentYear = new Date().getFullYear(); // Obtenez l'année actuelle

  return (
    <footer className="bg-[#1C1C1C] border-t-4 border-gray-700 text-white  py-10">
      <div className="flex flex-col items-center justify-center space-y-6">

        {/* Footer Title */}
        <h4 className="text-xl text-yellow-300 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">
          {t('footerRPG.connectWithMe')} {/* Utilisez la traduction */}
        </h4>

        {/* Links */}
        <div className="flex space-x-8 text-2xl">
          <a
            href="https://github.com/rocklee993"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out"
            aria-label={t('common.ariaLabels.github', {defaultValue: 'GitHub Profile'})} 
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/lyes-guebghid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out"
            aria-label={t('common.ariaLabels.linkedin', {defaultValue: 'LinkedIn Profile'})} 
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:guebghidlyes@yahoo.com" // Correction de l'email
            className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out"
            aria-label={t('common.ariaLabels.email', {defaultValue: 'Send Email'})} 
          >
            <FaEnvelope />
          </a>

          <a
            href="/GUEBGHID.pdf" // Assurez-vous que ce chemin est correct et que le fichier est dans /public
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out"
            aria-label={t('common.ariaLabels.resume', {defaultValue: 'View Resume/CV'})} 
          >
            <FaFileAlt />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-sm text-gray-500 mt-4">
          {t('footer.copyright', { year: currentYear })} {/* Utilisez la traduction avec interpolation */}
        </p>
      </div>
    </footer>
  );
};

export default FooterRPG;