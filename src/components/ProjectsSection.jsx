import React, { useState, useRef, useEffect, useMemo } from "react"; // Ajout de useMemo
import { useTranslation } from 'react-i18next'; // Importez useTranslation

// Les données statiques des projets (ID, image, technologies, lien GitHub)
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
    const { t, i18n } = useTranslation(); // Initialisez le hook

    // Fusionner les données statiques avec les traductions
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


    const [characterPosition, setCharacterPosition] = useState(200);
    const [activeProject, setActiveProject] = useState(0);
    // const characterRef = useRef(null); // Non utilisé
    const containerRef = useRef(null);

    const flagSpacing = 320;
    const flagPositions = useMemo(() =>
        projects.map((_, index) => (index + 1) * flagSpacing),
    [projects.length]);

    const moveCharacter = (direction) => {
        const container = containerRef.current;
        if (!container || flagPositions.length === 0) return;

        const stepSize = 50;
        const characterWidth = 30;

        const roadStart = flagPositions[0] - 100;
        const roadEnd = flagPositions[flagPositions.length - 1] + 100;

        let newPosition = characterPosition + direction * stepSize;
        newPosition = Math.max(
            roadStart,
            Math.min(roadEnd - characterWidth, newPosition)
        );
        setCharacterPosition(newPosition);

        for (let i = 0; i < flagPositions.length; i++) {
            const flagPos = flagPositions[i];
            // Ajuster la sensibilité si nécessaire
            if (Math.abs(newPosition - flagPos) < stepSize / 1.5) { 
                setActiveProject(i);
                break;
            }
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
    }, [characterPosition, flagPositions]); // Inclure flagPositions si moveCharacter en dépend implicitement

    useEffect(() => {
        const initialPos = flagPositions.length > 0 ? flagPositions[0] - 100 + 50 : 200;
        setCharacterPosition(initialPos);
        setActiveProject(0);
    }, [i18n.language, flagPositions.length]);


    return (
        <section
            id="projects"
            className="min-h-[110vh] bg-[#0a0a0a] text-white font-pixel py-20 relative overflow-hidden"
        >
            <h2 className="text-4xl text-yellow-300 text-center mb-2">
                {t('projectsSection.title')} {/* Traduction */}
            </h2>
            <div className="text-center mb-8">
                <p className="text-gray-400 text-sm animate-pulse flex items-center justify-center gap-2">
                    <span className="text-lg">←</span> {t('projectsSection.instructions')}{" "} {/* Traduction */}
                    <span className="text-lg">→</span>
                </p>
            </div>

            {/* S'assurer que flagPositions a des éléments avant de calculer les styles */}
            {projects.length > 0 && flagPositions.length > 0 && (
                <div className="relative" ref={containerRef} 
                     style={{ minWidth: `${flagPositions[flagPositions.length - 1] + 150 + 800}px`}} // Assurer une largeur minimale pour le défilement
                >
                    {/* Arrow indicator replacing character */}
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
                            transition: "left 0.5s ease", // Gardé la transition originale
                            zIndex: 10,
                            userSelect: "none",
                        }}
                        aria-label={t('projectsSection.currentProjectSelectorAriaLabel')} 
                    />

                    {/* Yellow Line (Road) */}
                    <div
                        className="absolute bg-yellow-300 h-1 top-1/2 transform -translate-y-1/2"
                        style={{
                            left: `${flagPositions[0] - 155}px`,
                            width: `${flagPositions[flagPositions.length - 1] - flagPositions[0] + 275}px`,
                            // zIndex: 1, // Optionnel, si besoin de contrôler la superposition
                        }}
                    ></div>

                    {/* Flags and Projects */}
                    <div className="whitespace-nowrap">
                        <div className="inline-flex gap-[200px] relative items-start p-6"> {/* p-6 original */}
                            {/* Flags */}
                            <div className="flex"> {/* Conteneur original pour les drapeaux */}
                                {projects.map((project, index) => ( // Utiliser project.id pour la clé si possible
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
                                            top:"10px" // Position originale
                                        }}
                                    >
                                        {activeProject === index ? "🚩" : "⚪"}
                                    </div>
                                ))}
                            </div>

                            {/* Project Cards */}
                            <div className="absolute transition-all duration-500 ease-in-out"> {/* Conteneur original des cartes */}
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id || index} // Utiliser project.id ici aussi
                                        className={`flex bg-[#1c1c3c] p-6 rounded-lg shadow-lg transition-all duration-1000 ease-in-out ${
                                            activeProject === index
                                                ? "opacity-100 scale-100 visible z-10" // Classes originales
                                                : "opacity-10 scale-0 visible"    // Classes originales
                                        }`}
                                        style={{
                                            position: "absolute", // Positionnement original
                                            left: `420px`,        // Positionnement original
                                            top: `50px`,         // Positionnement original
                                            width: "800px",        // Dimensions originales
                                            minHeight: "450px",    // Dimensions originales
                                            maxHeight: "500px",    // Dimensions originales
                                        }}
                                    >
                                        {/* Image Section */}
                                        <img
                                            src={project.img} // Assurez-vous que les chemins sont corrects
                                            alt={project.name} // Nom traduit pour alt
                                            className="w-80 h-auto max-h-94 object-cover rounded-lg mr-6" // Classes originales
                                        />

                                        {/* Text Content */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-base text-yellow-300 font-bold mb-2">
                                                    {project.name} {/* Nom traduit */}
                                                </h3>
                                                <p className="text-xs text-gray-300 mb-4 whitespace-normal">
                                                    {project.description} {/* Description traduite */}
                                                </p>
                                                <div>
                                                    <strong className="text-[#00FF88]">{t('projectsSection.technologiesLabel')}</strong> {/* Traduction */}
                                                    <ul className="list-disc list-inside text-sm text-gray-300 ml-4">
                                                        {project.technologies.map((tech, i) => (
                                                            <li key={i}>{tech}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* GitHub Link */}
                                            <a
                                                href={project.github}
                                                className="text-blue-400 underline text-sm mb-15 hover:text-blue-200 transition"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {t('projectsSection.viewOnGithub')} {/* Traduction */}
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