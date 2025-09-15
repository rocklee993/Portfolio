import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next';

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
        img: "/images/plane.png",
        technologies: ["Java", "Swing","MySQL", "JDBC"],
        github: "https://github.com/rocklee993/Projetbdd"
    },
    {
        id: "treeview",
        img: "/images/treeviw.png",
        technologies: ["DotNet", "C#","Blazor", "SQL Server"],
        github: "https://github.com/rocklee993/TreeView"
    },
];

const ProjectsSection = () => {
    const { t, i18n } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);

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

    // Close modal when clicking outside or pressing Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        if (selectedProject !== null) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <section
            id="projects"
            className="min-h-[110vh] bg-[#0a0a0a] text-white py-20 px-10 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative">
                
                {/* FIX: Replaced the old title with the consistent, styled title block */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl text-yellow-300 font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                        {t('projectsSection.title')}
                    </h2>
                    <div className="inline-block w-32 h-1 bg-gradient-to-r from-yellow-300 to-[#00FF88]"></div>
                </div>

                <div className="relative">
                    {/* Main grid */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
                        selectedProject !== null ? 'scale-75 opacity-30 blur-sm pointer-events-none' : 'scale-100 opacity-100'
                    }`}>
                        {projects.map((project, index) => (
                            <div
                                key={project.id || index}
                                className="group relative bg-[#1a1a2e] rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-300 transition-all duration-500 cursor-pointer h-80"
                                onClick={() => setSelectedProject(index)}
                            >
                                {/* Project Image */}
                                <div className="relative h-full overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback for broken images */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-[#00FF88]/20 flex items-center justify-center hidden">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-yellow-300/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                                                <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                </svg>
                                            </div>
                                            <p className="text-yellow-300 text-sm">Project Image</p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                                    
                                    {/* Click indicator */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-300/20 rounded-full flex items-center justify-center border border-yellow-300/50 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    
                                    {/* Floating title on image */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl text-yellow-300 font-bold">
                                            {project.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Expanded card overlay */}
                    {selectedProject !== null && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
                            <div className="pointer-events-auto w-full max-w-5xl">
                                <div className="bg-[#16213e] rounded-2xl shadow-2xl shadow-yellow-300/20 border-2 border-yellow-300 w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-500">
                                    <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                                        {/* Left side - Image */}
                                        <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-auto lg:min-h-[500px]">
                                            <img
                                                src={projects[selectedProject].img}
                                                alt={projects[selectedProject].name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-[#00FF88]/30 flex items-center justify-center hidden">{/* Fallback */}</div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#16213e]/20" />
                                        </div>
                                        
                                        {/* Right side - Content */}
                                        <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto relative">
                                            {/* Close button remains the same */}
                                            <button
                                                onClick={() => setSelectedProject(null)}
                                                className="absolute top-3 right-3 w-8 h-8 bg-[#2a2a2a] hover:bg-[#ff4444] border-2 border-[#555] hover:border-[#ff6666] transition-all duration-200 z-10 group flex items-center justify-center"
                                                style={{ borderRadius: '2px', boxShadow: 'inset -2px -2px 0px rgba(0,0,0,0.5), inset 2px 2px 0px rgba(255,255,255,0.1)', imageRendering: 'pixelated' }}
                                            >
                                                <div className="grid grid-cols-3 gap-0 w-3 h-3">
                                                    <div className="w-1 h-1 bg-[#ff6666] group-hover:bg-white"></div><div className="w-1 h-1"></div><div className="w-1 h-1 bg-[#ff6666] group-hover:bg-white"></div>
                                                    <div className="w-1 h-1"></div><div className="w-1 h-1 bg-[#ff6666] group-hover:bg-white"></div><div className="w-1 h-1"></div>
                                                    <div className="w-1 h-1 bg-[#ff6666] group-hover:bg-white"></div><div className="w-1 h-1"></div><div className="w-1 h-1 bg-[#ff6666] group-hover:bg-white"></div>
                                                </div>
                                            </button>
                                            
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-2xl sm:text-3xl text-yellow-300 font-bold mb-2">{projects[selectedProject].name}</h3>
                                                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-[#00FF88]"></div>
                                                </div>
                                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{projects[selectedProject].description}</p>
                                                <div>
                                                    <h4 className="text-[#00FF88] text-lg font-semibold mb-4">{t('projectsSection.technologiesLabel')}</h4>
                                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                                        {projects[selectedProject].technologies.map((tech, i) => (
                                                            <span key={i} className="px-3 sm:px-4 py-2 bg-[#00FF88]/20 text-[#00FF88] text-xs sm:text-sm rounded-full border border-[#00FF88]/30 font-medium">{tech}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-6 border-t border-gray-600 mt-6">
                                                <a href={projects[selectedProject].github} className="inline-flex items-center gap-2 bg-yellow-300 text-black px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                    {t('projectsSection.viewOnGithub')}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Background overlay when expanded */}
                    {selectedProject !== null && (
                        <div 
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            onClick={() => setSelectedProject(null)}
                        />
                    )}
                </div>

                {/* This decorative element was already here, so no change needed. */}
                <div className="mt-16 text-center">
                    <div className="inline-block w-32 h-1 bg-gradient-to-r from-yellow-300 to-[#00FF88]"></div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;