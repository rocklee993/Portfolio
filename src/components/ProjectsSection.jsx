import React, { useState, useRef, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projectStaticData = [
    {
        id: "castflow",
        img: "/images/cast.jpg",
        technologies: ["React", "ASP","Dotnet","Tailwind CSS","SQL Server"],
        github: "https://github.com/rocklee993/CastFlow-FrontEnd"
    },
    {
        id: "elekable",
        img: "/images/elek.png",
        technologies: ["Node.js", "Express", "Next.js", "Tailwind CSS","MySQL"],
        github: "https://github.com/rocklee993/projet-elektable"
    },
    {
        id: "flightReservation",
        img: "/images/vol.jpg",
        technologies: ["Java", "Swing","MySQL", "JDBC"],
        github: "https://github.com/rocklee993/Projetbdd"
    },
    {
        id: "treeview",
        img: "/images/tree.png",
        technologies: ["DotNet", "C#","Blazor", "SQL Server"],
        github: "https://github.com/rocklee993/TreeView"
    },
];


const ProjectsSection = () => {
    const { t, i18n } = useTranslation();

    const translatedProjectsArray = t('projectsSection.projectsList', { returnObjects: true }) || [];
    const projects = useMemo(() => projectStaticData.map(staticProject => {
        const translatedDetails = Array.isArray(translatedProjectsArray)
                                  ? translatedProjectsArray.find(p => p.id === staticProject.id)
                                  : null;
        return {
            ...staticProject,
            name: translatedDetails ? translatedDetails.name : staticProject.id,
            description: translatedDetails ? translatedDetails.description : "Description not available"
        };
    }), [i18n.language, translatedProjectsArray]);

    const [activeProject, setActiveProject] = useState(0);
    const containerRef = useRef(null);
    
    const flagSpacing = 320;
    const flagPositions = useMemo(() =>
        projects.map((_, index) => (index + 1) * flagSpacing),
    [projects.length]);
    
    const characterPosition = useMemo(() => {
        if (flagPositions.length === 0) return 200;
        return flagPositions[activeProject] - 15; 
    }, [activeProject, flagPositions]);


    const moveCharacter = (direction) => {
        let newActiveProject = activeProject + direction;
        newActiveProject = Math.max(0, Math.min(projects.length - 1, newActiveProject));
        if (newActiveProject !== activeProject) {
            setActiveProject(newActiveProject);
        }
    };
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") {
                moveCharacter(1);
            } else if (event.key === "ArrowLeft") {
                moveCharacter(-1);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeProject, projects.length]); 

    useEffect(() => {
        setActiveProject(0);
    }, [i18n.language]);


    return (
        <section
            id="projects"
            className="min-h-[110vh] bg-[#0a0a0a] text-white font-pixel py-20 relative overflow-hidden"
        >
            <h2 className="text-4xl text-yellow-300 text-center mb-2">
                {t('projectsSection.title')}
            </h2>
            <div className="text-center mb-8 flex items-center justify-center gap-4">
                <button 
                    onClick={() => moveCharacter(-1)} 
                    disabled={activeProject === 0}
                    className="text-green-300 hover:text-yellow-300 disabled:text-gray-600 disabled:cursor-not-allowed text-2xl p-2 transition"
                    aria-label={t('common.previous', { defaultValue: 'Previous Project' })}
                >
                    <FaArrowLeft />
                </button>
                <p className="text-gray-400 text-sm">
                    {t('projectsSection.instructions')}
                </p>
                <button 
                    onClick={() => moveCharacter(1)}
                    disabled={activeProject === projects.length - 1}
                    className="text-green-300 hover:text-yellow-300 disabled:text-gray-600 disabled:cursor-not-allowed text-2xl p-2 transition"
                    aria-label={t('common.next', { defaultValue: 'Next Project' })}
                >
                    <FaArrowRight />
                </button>
            </div>

            {projects.length > 0 && flagPositions.length > 0 && (
                <div className="relative" ref={containerRef} 
                     style={{ 
                        minWidth: `${flagPositions[flagPositions.length - 1] + 150 + 800}px`,
                     }}
                >
                    <div
                        style={{
                            position: "absolute",
                            left: `${characterPosition}px`,
                            top: 0,
                            width: 0,
                            height: 0,
                            borderLeft: "15px solid transparent",
                            borderRight: "15px solid transparent",
                            borderBottom: "20px solid #00FF88",
                            transition: "left 0.3s ease-out", 
                            zIndex: 10,
                            userSelect: "none",
                        }}
                        aria-label={t('projectsSection.currentProjectSelectorAriaLabel')} 
                    />

                    <div
                        className="absolute bg-yellow-300 h-1 top-1/2 transform -translate-y-1/2"
                        style={{
                            left: `${flagPositions[0] - 155}px`,
                            width: `${flagPositions[flagPositions.length - 1] - flagPositions[0] + 275}px`,
                        }}
                    ></div>

                    <div className="whitespace-nowrap">
                        <div className="inline-flex gap-[200px] relative items-start p-6">
                            <div className="flex">
                                {projects.map((project, index) => (
                                    <div
                                        key={`flag-${project.id || index}`}
                                        className={`transition-all duration-300 ease-in-out transform ${
                                            activeProject === index
                                                ? "text-[#00FF88] text-xl scale-150 animate-pulse"
                                                : "text-[#00FF88] text-lg scale-100"
                                        }`}
                                        style={{
                                            fontSize: "1.5rem",
                                            position: "absolute",
                                            left: `${flagPositions[index] - 10}px`, 
                                            top:"10px"
                                        }}
                                    >
                                        {activeProject === index ? "🚩" : "⚪"}
                                    </div>
                                ))}
                            </div>

                            <div className="absolute transition-all duration-500 ease-in-out">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id || index}
                                        className={`flex bg-[#1c1c3c] p-6 rounded-lg shadow-lg transition-all duration-1000 ease-in-out ${
                                            activeProject === index
                                                ? "opacity-100 scale-100 visible z-10"
                                                : "opacity-10 scale-0 pointer-events-none" 
                                        }`}
                                        style={{
                                            position: "absolute",
                                            left: `420px`,
                                            top: `50px`,
                                            width: "800px",
                                            minHeight: "450px",
                                            maxHeight: "500px",
                                        }}
                                    >
                                        {/* MODIFICATION ICI POUR LA TAILLE DE L'IMAGE */}
                                        <img
                                            src={project.img}
                                            alt={project.name}
                                            
                                            className="w-80 h-96 object-cover rounded-lg mr-6 self-center" 
                                            
                                        />
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-base text-yellow-300 font-bold mb-2">
                                                    {project.name}
                                                </h3>
                                                <p className="text-xs text-gray-300 mb-4 whitespace-normal">
                                                    {project.description}
                                                </p>
                                                <div>
                                                    <strong className="text-[#00FF88]">{t('projectsSection.technologiesLabel')}</strong>
                                                    <ul className="list-disc list-inside text-sm text-gray-300 ml-4">
                                                        {project.technologies.map((tech, i) => (
                                                            <li key={i}>{tech}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href={project.github}
                                                className="text-blue-400 underline text-sm hover:text-blue-200 transition mt-4 self-start" // Ajout de mt-4 et self-start
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {t('projectsSection.viewOnGithub')}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;