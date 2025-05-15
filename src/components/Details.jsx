import React from "react";
import ParticlesBackground from "./Particles";

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Python", "Django", "Dotnet", "MySQL"],
  languages: ["C++", "Java", "Python", "C#", "JavaScript", "PHP", "Bash"],
  other: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Figma","Godot", "Unity" ,"Blender", ],
};

const SkillCard = ({ title, list }) => (
  <div className="bg-[#1B1B38] border-4 border-yellow-400 rounded-2xl p-6 w-full max-w-sm shadow-2xl hover:scale-105 transition-transform duration-300 font-pixel">
    <h3 className="text-2xl text-green-400 text-center mb-4 drop-shadow">{title.toUpperCase()}</h3>
    <ul className="space-y-3">
      {list.map((item, index) => (
        <li
          key={index}
          className="bg-[#2F2F4F] border border-green-400 text-green-200 text-center py-2 rounded-lg hover:bg-green-400 hover:text-[#1B1B38] transition duration-300"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#1B1B38] text-white py-20 px-6 flex flex-col items-center font-pixel"
    >
      <h2 className="text-4xl sm:text-5xl text-yellow-300 font-bold text-center mb-16 drop-shadow">
        MY SKILLS
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl w-full">
        <SkillCard title="Frontend" list={skills.frontend} />
        <SkillCard title="Backend" list={skills.backend} />
        <SkillCard title="Languages" list={skills.languages} />
        <SkillCard title="Other" list={skills.other} />
      </div>
    </section>
  );
};

export default SkillsSection;
