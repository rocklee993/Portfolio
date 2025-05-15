import React, { useState, useRef, useEffect } from "react";

const projects = [
    {
        name: "CastFlow",
        img: "/images/cast.jpg",
        description: "CastFlow is a platform that connects aspiring talent with recruiters in the entertainment industry. It offers a user-friendly interface for talent to showcase their skills and for recruiters to find the right candidates.",
        technologies: ["React", "ASP","Dotnet","Tailwind CSS","SQL Server"],
        github: "https://github.com/rocklee993/CastFlow-FrontEnd"
    },
    {
        name: "Elekable",
        img: "/images/elek.png",
        description: "Elekable is a platform that allows users to buy and sell electricity in a transparent and secure market. It focuses on real-time pricing, renewable energy, and secure transactions, making it easier for users to manage their energy needs.",
        technologies: ["Node.js", "Express", "Next.js", "Tailwind CSS","MySQL"],
        github: "https://github.com/rocklee993/projet-elektable"
    },
    {
        name: "Flight Reservation App",
        img: "/images/vol.jpg",
        description: "Developed a desktop application using Java (Swing) for booking and managing flight reservations. Features include real-time flight search, passenger registration, and seat selection, with a user-friendly GUI and local database integration for data persistence..",
        technologies: ["Java", "Swing","MySQL", "JDBC"],
        github: "https://github.com/rocklee993/Projetbdd"
    },
    {
        name: "TreeView Component",
        img: "/images/tree.png",
        description: "Built with Blazor (.NET), this TreeView component loads data only when nodes are expanded, improving performance for large datasets. It supports asynchronous loading, nested structures, and is fully reusable..",
        technologies: ["DotNet", "C#","Blazor", "SQL Server"],
        github: "https://github.com/rocklee993/TreeView"
    },
];

const ProjectsSection = () => {
    const [characterPosition, setCharacterPosition] = useState(200);
    const [activeProject, setActiveProject] = useState(0);
    const characterRef = useRef(null);
    const containerRef = useRef(null);

    const flagSpacing = 320; // Space between flags (icons)
    const flagPositions = projects.map((_, index) => (index + 1) * flagSpacing);

    const moveCharacter = (direction) => {
        const container = containerRef.current;
        if (!container) return;

        const stepSize = 50;
        // Character width for boundary (arrow is 30px wide roughly)
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
            if (Math.abs(newPosition - flagPos) < stepSize) {
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
    }, [characterPosition]);

    return (
        <section
            id="projects"
            className="min-h-[110vh] bg-[#0a0a0a] text-white font-pixel py-20 relative overflow-hidden"
        >
            <h2 className="text-4xl text-yellow-300 text-center mb-2">My Projects</h2>
            <div className="text-center mb-8">
                <p className="text-gray-400 text-sm animate-pulse flex items-center justify-center gap-2">
                    <span className="text-lg">←</span> Use arrow keys to move{" "}
                    <span className="text-lg">→</span>
                </p>
            </div>

            <div className="relative" ref={containerRef}>
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
                        transition: "left 0.5s ease",
                        zIndex: 10,
                        userSelect: "none",
                    }}
                    aria-label="Current project selector"
                />

                {/* Yellow Line (Road) */}
                <div
                    className="absolute bg-yellow-300 h-1 top-1/2 transform -translate-y-1/2"
                    style={{
                        left: `${flagPositions[0] - 155}px`,
                        width: `${flagPositions[flagPositions.length - 1] - flagPositions[0] + 275}px`,
                    }}
                ></div>

                {/* Flags and Projects */}
                <div className="whitespace-nowrap">
                    <div className="inline-flex gap-[200px] relative items-start p-6">
                        <div className="flex">
                            {projects.map((_, index) => (
                                <div
                                    key={index}
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
                                    key={index}
                                    className={`flex bg-[#1c1c3c] p-6 rounded-lg shadow-lg transition-all duration-1000 ease-in-out ${
                                        activeProject === index
                                            ? "opacity-100 scale-100 visible z-10"
                                            : "opacity-10 scale-0 visible"
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
                                    {/* Image Section */}
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className="w-80 h-auto max-h-94 object-cover rounded-lg mr-6"
                                    />

                                    {/* Text Content */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-base text-yellow-300 font-bold mb-2">
                                                {project.name}
                                            </h3>
                                            <p className="text-xs text-gray-300 mb-4 whitespace-normal">
                                                {project.description}
                                            </p>
                                            <div>
                                                <strong className="text-[#00FF88]">Technologies:</strong>
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
                                            View on GitHub
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
