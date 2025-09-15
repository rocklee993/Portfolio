import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const ModernHero = () => {
  const { t, i18n } = useTranslation();
  
  const animatedTitles = t('heroSection.animatedTitles', { returnObjects: true }) || []; 
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (animatedTitles.length === 0) return;

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

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-[#00FF88]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text */}
          <div className="text-center lg:text-left space-y-8">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mt-24 mb-12">
              <span className="block text-white">
                {t('heroSection.name').split(' ').map((word, idx, arr) => (
                  <React.Fragment key={idx}>
                    {word}
                    {idx < arr.length - 1 && arr.length > 1 && <br />} 
                  </React.Fragment>
                ))}
              </span>
            </h1>
            
            {/* Animated Subtitle */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-yellow-300 via-[#00FF88] to-yellow-300 bg-clip-text text-transparent">
                {typeof displayText === 'string' ? displayText : ''}
              </span>
              <span className="text-yellow-300 text-2xl sm:text-3xl lg:text-4xl animate-pulse ml-1">|</span>
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl text-gray-300 italic max-w-2xl mx-auto lg:mx-0 border-l-4 border-yellow-300 pl-6 py-4">
              "{t('heroSection.quote')}"
            </blockquote>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Download CV Button (icon removed) */}
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

              {/* Learn More Button */}
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

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-8">
              {/* GitHub */}
              <a
                href="https://github.com/rocklee993"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center hover:border-yellow-300 hover:bg-yellow-300/10 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lyes-guebghid/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Mail */}
              <a
                href="mailto:guebghidlyes@yahoo.com"
                className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Abstract Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 via-[#00FF88] to-blue-400 rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
              <div className="relative w-full h-full flex items-center justify-center rounded-3xl bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] shadow-2xl">
                <svg
                  className="w-32 h-32 text-yellow-300 opacity-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-yellow-300 to-[#00FF88] rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
