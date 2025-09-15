import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const ModernProfile = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      id="profile" 
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-yellow-300/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-[#00FF88]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-yellow-300 font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
            {t('playerProfile.sectionTitle')}
          </h2>
          <div className="inline-block w-32 h-1 bg-gradient-to-r from-yellow-300 to-[#00FF88]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1 flex flex-col items-center space-y-6">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-[#00FF88] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                <img
                  src="/images/photo_id.png"
                  alt={t('playerProfile.avatarAlt')}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-[#00FF88]/30 hidden items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-300/40 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">
                {t('playerProfile.name')}
              </h3>
              <p className="text-yellow-300 text-lg font-medium mb-4">
                {t('playerProfile.subtitle')}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-[#00FF88] mx-auto"></div>
            </div>

            {/* Quick Info */}
            <div className="w-full max-w-sm space-y-3">
              {[
                { label: t('playerProfile.ageLabel'), value: t('playerProfile.ageValue'), icon: "👨‍💻" },
                { label: t('playerProfile.locationLabel'), value: t('playerProfile.locationValue'), icon: "📍" },
                
              ].map((item, index) => (
                <div key={index} className="bg-[#1a1a2e]/80 backdrop-blur-sm border border-gray-600 rounded-lg p-4 hover:border-yellow-300/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="text-yellow-300 text-sm font-medium">{item.label}</span>
                      <p className="text-gray-300 text-sm">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me */}
            <div className="bg-[#1a1a2e]/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-yellow-300/30 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-[#00FF88] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-yellow-300">
                  {t('playerProfile.aboutMeTitle')}
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t('playerProfile.aboutMeParagraph')}
              </p>
            </div>

            {/* Hobbies + Soft Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hobbies */}
              <div className="bg-[#1a1a2e]/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-purple-400">
                    {t('playerProfile.hobbiesTitle')}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {[
                    t('playerProfile.hobbyTech'),
                    t('playerProfile.hobbyGames'),
                    t('playerProfile.hobbyContent')
                  ].map((hobby, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>{hobby}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="bg-[#1a1a2e]/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-green-400/30 transition-all duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-400">
                    {t('playerProfile.softSkillsTitle')}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {[
                    t('playerProfile.softSkillProblemSolving'),
                    t('playerProfile.softSkillTeamwork'),
                    t('playerProfile.softSkillAdaptability'),
                    t('playerProfile.softSkillCreativity')
                  ].map((skill, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-block w-32 h-1 bg-gradient-to-r from-yellow-300 to-[#00FF88]"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernProfile;
