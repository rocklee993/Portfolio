import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const skillsData = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Django", "Dotnet", "MySQL","MongoDB"],
  languages: ["C++", "Java", "Python", "C#", "JavaScript", "PHP", "Bash"],
  other: ["Premiere Pro", "After Effects", "Photoshop", "Figma", "Godot", "Unity", "Blender"],
};

// Icon components for each category
const CategoryIcon = ({ category }) => {
  const icons = {
    frontend: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2M12 4.14L19.25 8L12 11.86L4.75 8L12 4.14M4 15.5L11 19.5V12.64L4 8.64V15.5M13 19.5L20 15.5V8.64L13 12.64V19.5Z"/>
      </svg>
    ),
    backend: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M5,2V6H19V2H5M5,10V14H19V10H5M5,18V22H19V18H5Z"/>
      </svg>
    ),
    languages: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6Z"/>
      </svg>
    ),
    other: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V8H7.5C7.5,8.83 8.17,9.5 9,9.5H10V11.5H9C7.07,11.5 5.5,9.93 5.5,8H4V6H11M18,10V12H16.5C16.5,12.83 15.83,13.5 15,13.5H14V15.5H15C16.93,15.5 18.5,13.93 18.5,12H20V10H18Z"/>
      </svg>
    ),
  };
  return icons[category] || icons.other;
};

const SkillCard = ({ titleKey, list, category, index }) => {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const cardColors = {
    frontend: {
      border: "border-blue-400",
      titleColor: "text-blue-400",
      iconColor: "text-blue-300",
      bgHover: "hover:border-blue-300",
      skillHover: "hover:bg-blue-400",
      accent: "from-blue-400/20 to-blue-600/20"
    },
    backend: {
      border: "border-green-400",
      titleColor: "text-green-400",
      iconColor: "text-green-300",
      bgHover: "hover:border-green-300",
      skillHover: "hover:bg-green-400",
      accent: "from-green-400/20 to-green-600/20"
    },
    languages: {
      border: "border-purple-400",
      titleColor: "text-purple-400",
      iconColor: "text-purple-300",
      bgHover: "hover:border-purple-300",
      skillHover: "hover:bg-purple-400",
      accent: "from-purple-400/20 to-purple-600/20"
    },
    other: {
      border: "border-orange-400",
      titleColor: "text-orange-400",
      iconColor: "text-orange-300",
      bgHover: "hover:border-orange-300",
      skillHover: "hover:bg-orange-400",
      accent: "from-orange-400/20 to-orange-600/20"
    }
  };

  const colors = cardColors[category] || cardColors.other;

  return (
    <div 
      className={`bg-[#1a1a2e] border-2 ${colors.border} ${colors.bgHover} rounded-2xl p-6 w-full h-full shadow-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 relative overflow-hidden group`}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with icon */}
        <div className="flex items-center justify-center mb-8">
          <div className={`${colors.iconColor} mr-3`}>
            <CategoryIcon category={category} />
          </div>
          <h3 className={`text-xl md:text-2xl ${colors.titleColor} text-center font-bold drop-shadow-lg`}>
            {t(titleKey).toUpperCase()}
          </h3>
        </div>

        {/* Skills list */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 gap-3">
            {list.map((item, skillIndex) => (
              <div
                key={skillIndex}
                className={`bg-[#2a2a4a]/90 border border-gray-500 ${colors.skillHover} hover:text-[#1B1B38] text-gray-100 text-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer relative overflow-hidden group/skill hover:shadow-md`}
                onMouseEnter={() => setHoveredSkill(skillIndex)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700"></div>
                
                <div className="relative z-10 flex items-center justify-center">
                  <span className="font-medium text-sm md:text-base">{item}</span>
                  {hoveredSkill === skillIndex && (
                    <div className="ml-2 w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
            {/* Empty placeholders for consistent height */}
            {list.length < 7 && [...Array(7 - list.length)].map((_, i) => (
              <div key={`placeholder-${i}`} className="py-3 px-4 opacity-0">
                <span className="text-sm md:text-base">&nbsp;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1B1B38] to-[#0a0a0a] text-white py-20 px-6 flex flex-col items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Title section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-yellow-200 font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
            {t('skillsSection.title')}
          </h2>
          <div className="inline-block w-32 h-1 bg-gradient-to-r from-yellow-200 to-[#00FF88] mb-4"></div>
          
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 auto-rows-fr">
          <div className="animate-fadeInUp">
            <SkillCard titleKey="skillsSection.cardTitleLanguages" list={skillsData.languages} category="languages" index={0} />
          </div>
          <div className="animate-fadeInUp" style={{animationDelay: '150ms'}}>
            <SkillCard titleKey="skillsSection.cardTitleFrontend" list={skillsData.frontend} category="frontend" index={1} />
          </div>
          <div className="animate-fadeInUp" style={{animationDelay: '300ms'}}>
            <SkillCard titleKey="skillsSection.cardTitleBackend" list={skillsData.backend} category="backend" index={2} />
          </div>
          <div className="animate-fadeInUp" style={{animationDelay: '450ms'}}>
            <SkillCard titleKey="skillsSection.cardTitleOther" list={skillsData.other} category="other" index={3} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
