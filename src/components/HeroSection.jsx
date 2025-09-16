import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

// --- Terminal Simulation Component ---
const TerminalSimulation = () => {
  const commands = [
    "npm install my-portfolio",
    "cd my-portfolio",
    "code .",
    "git commit -m '✨ Initial commit'",
    "yarn dev",
    "🚀 Portfolio running at http://localhost:3000",
    "git push origin main",
    "echo 'Hello, world!'",
    "ls -la"
  ];

  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= commands.length) {
      // After finishing all commands, pause then restart
      const restart = setTimeout(() => {
        setDisplayed([]);
        setCurrentLine("");
        setLineIndex(0);
        setCharIndex(0);
      }, 2000); // pause before looping
      return () => clearTimeout(restart);
    }

    const currentCommand = commands[lineIndex];

    if (charIndex < currentCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + currentCommand[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => [...prev, currentCommand]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, commands]);

  return (
    <div className="w-full max-w-md bg-black rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-4 text-gray-400 text-sm">portfolio-terminal</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 font-mono text-sm text-green-400 h-80 overflow-y-auto">
        {displayed.map((line, idx) => (
          <div key={idx} className="mb-1">
            <span className="text-yellow-300">$</span> {line}
          </div>
        ))}
        {lineIndex < commands.length && (
          <div>
            <span className="text-yellow-300">$</span> {currentLine}
            <span className="animate-pulse">▋</span>
          </div>
        )}
        {lineIndex >= commands.length && (
          <div className="mt-2 text-gray-400">Process finished ✔ Restarting...</div>
        )}
      </div>
    </div>
  );
};

// --- Main ModernHero Component ---
const ModernHero = () => {
  const { t, i18n } = useTranslation();
  
  const animatedTitles = t('heroSection.animatedTitles', { returnObjects: true }) || []; 
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for hero title
  useEffect(() => {
    if (!Array.isArray(animatedTitles) || animatedTitles.length === 0) return;

    const currentTitleIndex = index % animatedTitles.length;
    const fullText = animatedTitles[currentTitleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, animatedTitles]);

  // Reset animation on language change
  useEffect(() => {
    setIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [i18n.language]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#00FF88]/5 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="block text-white">
                {t('heroSection.name').split(' ').map((word, idx, arr) => (
                  <React.Fragment key={idx}>
                    {word}
                    {idx < arr.length - 1 && arr.length > 1 && <br />} 
                  </React.Fragment>
                ))}
              </span>
            </h1>
            
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-yellow-300 via-[#00FF88] to-yellow-300 bg-clip-text text-transparent">
                {typeof displayText === 'string' ? displayText : ''}
              </span>
              <span className="text-yellow-300 text-2xl sm:text-3xl lg:text-4xl animate-pulse ml-1">|</span>
            </div>

            <blockquote className="text-lg sm:text-xl text-gray-300 italic max-w-2xl mx-auto lg:mx-0 border-l-4 border-yellow-300 pl-6 py-3">
              "{t('heroSection.quote')}"
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/GUEBGHID.pdf"
                download
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-yellow-300 to-[#00FF88] rounded-xl shadow-2xl shadow-yellow-300/25 hover:shadow-yellow-300/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00FF88] to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative flex items-center">
                  <span>{t('heroSection.downloadCVButton')}</span>
                </div>
              </a>

              <a
                href="#profile"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-yellow-300 border-2 border-yellow-300 rounded-xl hover:bg-yellow-300 hover:text-black transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Terminal Simulation */}
          <div className="flex justify-center lg:justify-end">
            <TerminalSimulation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
