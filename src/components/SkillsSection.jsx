import React from "react";
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const PlayerProfileRPG = () => {
  const { t } = useTranslation(); // Initialisez le hook

  return (
    <section id="profile" className="min-h-[100vh] bg-gradient-to-b from-[#1F1F1F] to-[#0F0F0F] text-white font-pixel py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-[#FFD700] drop-shadow-[0_0_5px_rgba(255,215,0,0.8)] font-pixel">
          {t('playerProfile.sectionTitle')}
        </h2>
      </div>

      <div className="flex justify-center items-center px-6">
        <div className="w-[1200px] bg-[#2A2D4A] p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.7)] border-4 border-gray-600 hover:border-yellow-400 transition duration-300 ease-in-out relative grid grid-cols-5 gap-8">

          {/* Character Portrait + Details + Languages */}
          <div className="col-span-2 flex flex-col items-center">
            <img
              src="/images/photo_id.png" // Assurez-vous que ce chemin est correct dans votre dossier public
              alt={t('playerProfile.avatarAlt')}
              className="w-40 h-40 object-cover rounded-full border-4 border-yellow-500 shadow-[0_0_15px_rgba(255,255,0,0.6)] z-10"
            />

            <div className="text-center mt-6">
              <h3 className="text-3xl text-yellow-300 mb-1 drop-shadow-[0_0_4px_rgba(255,255,0,0.7)]">
                {t('playerProfile.name')}
              </h3>
              <p className="text-sm text-gray-300">{t('playerProfile.subtitle')}</p>
            </div>

            <div className="text-left mt-5 text-gray-300 text-sm space-y-1 w-full px-4"> {/* Ajout de w-full et px-4 pour un meilleur alignement */}
              <p><span className="text-yellow-300">{t('playerProfile.ageLabel')}</span> {t('playerProfile.ageValue')}</p>
              <p><span className="text-yellow-300">{t('playerProfile.locationLabel')}</span> {t('playerProfile.locationValue')}</p>
              <p><span className="text-yellow-300">{t('playerProfile.educationLabel')}</span> {t('playerProfile.educationValue')}</p>
            </div>
            
            <div className="text-left mt-5 text-gray-300 text-sm space-y-1 w-full px-4"> {/* Ajout de w-full et px-4 */}
              <h4 className="text-xl text-yellow-300 mb-3 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">
                {t('playerProfile.languagesTitle')}
              </h4>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>{t('playerProfile.languageFrench')}</li>
                <li>{t('playerProfile.languageEnglish')}</li>
                <li>{t('playerProfile.languageGerman')}</li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="col-span-1 flex items-center justify-center">
            <div className="w-1 bg-gray-600 h-full mx-auto rounded-full"></div> {/* Centrage du séparateur */}
          </div>

          {/* About Me + Hobbies */}
          <div className="col-span-2 space-y-8">
            <div className="text-left text-gray-300">
              <h4 className="text-xl text-yellow-300 mb-3 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">
                {t('playerProfile.aboutMeTitle')}
              </h4>
              <p className="text-sm leading-relaxed">
                {t('playerProfile.aboutMeParagraph')}
              </p>
            </div>
            <div className="text-left mt-5 text-gray-300 text-sm"> {/* Suppression de space-y-1 ici pour un meilleur contrôle avec mb sur le titre */}
              <h4 className="text-xl text-yellow-300 mb-3 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">
                {t('playerProfile.hobbiesTitle')}
              </h4>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>{t('playerProfile.hobbyTech')}</li>
                <li>{t('playerProfile.hobbyGames')}</li>
                <li>{t('playerProfile.hobbyMusic')}</li>
                <li>{t('playerProfile.hobbyContent')}</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PlayerProfileRPG;