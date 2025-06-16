import React from "react";
// import ParticlesBackground from "./Particles"; // Si vous l'utilisez et qu'il n'a pas de texte traduisible
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const skillsData = { // Renommé pour éviter la confusion avec la clé 'skills' de la navbar
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Python", "Django", "Dotnet", "MySQL"],
  languages: ["C++", "Java", "Python", "C#", "JavaScript", "PHP", "Bash"],
  other: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Figma","Godot", "Unity" ,"Blender", ],
};

// Le composant SkillCard reçoit maintenant une 'titleKey' au lieu d'un 'title' direct
const SkillCard = ({ titleKey, list }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#1B1B38] border-4 border-yellow-400 rounded-2xl p-6 w-full max-w-sm shadow-2xl hover:scale-105 transition-transform duration-300 font-pixel">
      <h3 className="text-2xl text-green-400 text-center mb-4 drop-shadow">
        {t(titleKey).toUpperCase()} {/* Utilise la clé de traduction pour le titre de la carte */}
      </h3>
      <ul className="space-y-3">
        {list.map((item, index) => (
          <li
            key={index}
            className="bg-[#2F2F4F] border border-green-400 text-green-200 text-center py-2 rounded-lg hover:bg-green-400 hover:text-[#1B1B38] transition duration-300"
          >
            {item} {/* Les items de la liste (noms des technos) ne sont pas traduits ici */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const { t } = useTranslation(); // Initialisez le hook de traduction

  return (
    <section
      id="skills" // Cet id est utilisé dans la navbar, assurez-vous que la clé 'navbar.skills' correspond
      className="min-h-screen bg-[#1B1B38] text-white py-20 px-6 flex flex-col items-center font-pixel"
    >
      <h2 className="text-4xl sm:text-5xl text-yellow-300 font-bold text-center mb-16 drop-shadow">
        {t('skillsSection.title')} {/* Utilisez la traduction pour le titre de la section */}
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl w-full">
        <SkillCard titleKey="skillsSection.cardTitleFrontend" list={skillsData.frontend} />
        <SkillCard titleKey="skillsSection.cardTitleBackend" list={skillsData.backend} />
        <SkillCard titleKey="skillsSection.cardTitleLanguages" list={skillsData.languages} />
        <SkillCard titleKey="skillsSection.cardTitleOther" list={skillsData.other} />
      </div>
    </section>
  );
};

export default SkillsSection;