import React from "react";
import { useTranslation } from 'react-i18next';

const PlayerProfileRPG = () => {
  const { t } = useTranslation();

  return (
    <section id="profile" className="min-h-[100vh] bg-gradient-to-b from-[#1F1F1F] to-[#0F0F0F] text-white font-pixel py-20 px-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#00FF88] rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-[#00FF88] rounded-full opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="text-center mb-10 relative z-10">
        <h2 className="text-4xl md:text-5xl text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] font-pixel mb-2">
          {t('playerProfile.sectionTitle')}
        </h2>
        <div className="inline-block w-24 h-1 bg-gradient-to-r from-yellow-300 to-[#00FF88] mt-4"></div>
      </div>

      <div className="flex justify-center items-center px-6 relative z-10">
        <div className="w-full max-w-7xl bg-[#2A2D4A] p-6 md:p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border-4 border-gray-600 hover:border-yellow-400 transition duration-500 ease-in-out relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Character Portrait + Details + Languages */}
            <div className="lg:col-span-2 flex flex-col items-center space-y-6">
              {/* Avatar with enhanced styling */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-[#00FF88] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
                <img
                  src="/images/photo_id.png"
                  alt={t('playerProfile.avatarAlt')}
                  className="relative w-40 h-40 object-cover rounded-full border-4 border-yellow-500 shadow-[0_0_20px_rgba(255,255,0,0.6)] z-10 transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback avatar */}
                <div className="hidden w-40 h-40 rounded-full border-4 border-yellow-500 bg-gradient-to-br from-yellow-300/30 to-[#00FF88]/30 items-center justify-center shadow-[0_0_20px_rgba(255,255,0,0.6)]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-300/40 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-yellow-300 text-xs">Player</p>
                  </div>
                </div>
              </div>

              {/* Name and title */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl text-yellow-300 mb-2 drop-shadow-[0_0_8px_rgba(255,255,0,0.7)]">
                  {t('playerProfile.name')}
                </h3>
                <p className="text-sm md:text-base text-gray-300 bg-[#1a1a2e]/50 px-4 py-2 rounded-full border border-gray-600">
                  {t('playerProfile.subtitle')}
                </p>
              </div>

              {/* Stats section with better styling */}
              <div className="w-full bg-[#1a1a2e]/50 rounded-xl p-4 border border-gray-600">
                <h4 className="text-lg text-yellow-300 mb-3 text-center drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">
                  Player Stats
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('playerProfile.ageLabel')}</span>
                    <span className="text-[#00FF88] font-semibold">{t('playerProfile.ageValue')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('playerProfile.locationLabel')}</span>
                    <span className="text-[#00FF88] font-semibold">{t('playerProfile.locationValue')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('playerProfile.educationLabel')}</span>
                    <span className="text-[#00FF88] font-semibold text-right max-w-[60%]">{t('playerProfile.educationValue')}</span>
                  </div>
                </div>
              </div>
              
              {/* Languages with enhanced styling */}
              <div className="w-full bg-[#1a1a2e]/50 rounded-xl p-4 border border-gray-600">
                <h4 className="text-lg text-yellow-300 mb-3 text-center drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">
                  {t('playerProfile.languagesTitle')}
                </h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center space-x-3 p-2 bg-[#2A2D4A]/50 rounded-lg">
                    <div className="w-3 h-3 bg-[#00FF88] rounded-full"></div>
                    <span className="text-gray-300">{t('playerProfile.languageFrench')}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-[#2A2D4A]/50 rounded-lg">
                    <div className="w-3 h-3 bg-[#00FF88] rounded-full"></div>
                    <span className="text-gray-300">{t('playerProfile.languageEnglish')}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-[#2A2D4A]/50 rounded-lg">
                    <div className="w-3 h-3 bg-[#00FF88] rounded-full"></div>
                    <span className="text-gray-300">{t('playerProfile.languageGerman')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator - hidden on mobile */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <div className="w-1 bg-gradient-to-b from-transparent via-gray-600 to-transparent h-full rounded-full"></div>
            </div>

            {/* About Me + Hobbies */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Me section with enhanced styling */}
              <div className="bg-[#1a1a2e]/50 rounded-xl p-6 border border-gray-600">
                <h4 className="text-xl md:text-2xl text-yellow-300 mb-4 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)] flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#00FF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {t('playerProfile.aboutMeTitle')}
                </h4>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-300 to-[#00FF88] mb-4"></div>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  {t('playerProfile.aboutMeParagraph')}
                </p>
              </div>

              {/* Hobbies section with enhanced styling */}
              <div className="bg-[#1a1a2e]/50 rounded-xl p-6 border border-gray-600">
                <h4 className="text-xl md:text-2xl text-yellow-300 mb-4 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)] flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#00FF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-9V3a1 1 0 011-1h1a1 1 0 011 1v2M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  {t('playerProfile.hobbiesTitle')}
                </h4>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-300 to-[#00FF88] mb-4"></div>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center space-x-3 p-3 bg-[#2A2D4A]/50 rounded-lg hover:bg-[#2A2D4A]/70 transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full"></div>
                    <span className="text-gray-300">{t('playerProfile.hobbyTech')}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-[#2A2D4A]/50 rounded-lg hover:bg-[#2A2D4A]/70 transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full"></div>
                    <span className="text-gray-300">{t('playerProfile.hobbyGames')}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-[#2A2D4A]/50 rounded-lg hover:bg-[#2A2D4A]/70 transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full"></div>
                    <span className="text-gray-300">{t('playerProfile.hobbyMusic')}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-[#2A2D4A]/50 rounded-lg hover:bg-[#2A2D4A]/70 transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full"></div>
                    <span className="text-gray-300">{t('playerProfile.hobbyContent')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-300 opacity-30"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-300 opacity-30"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-yellow-300 opacity-30"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-300 opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default PlayerProfileRPG;