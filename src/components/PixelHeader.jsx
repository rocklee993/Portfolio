import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

const PixelHeader = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const sections = ['projects', 'profile', 'skills']; // Match the new order for better accuracy
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the screen is more reliable

      let currentSection = '';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to set initial section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };
  
  // FIX 3: Reordered the navigation items
  const navItems = [
    { id: 'projects', label: t('navbar.projects') },
    { id: 'profile', label: t('navbar.profile') },
    { id: 'skills', label: t('navbar.skills') }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-2xl shadow-black/20' 
        : 'bg-[#1C1C1C] border-b border-gray-700/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* FIX 1: Restructured flexbox for true centering */}
        <div className="flex items-center justify-between">
          
          {/* Left Side: Logo */}
          <div className="flex-1 flex justify-start">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-[#00FF88] rounded-lg flex items-center justify-center shadow-lg shadow-yellow-300/20">
                <div className="w-4 h-4 bg-[#1C1C1C] rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                </div>
              </div>
              <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                {t('pixelHeader.title')}
              </h1>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                // FIX 2: Increased font size from text-sm to text-base
                className={`relative text-base font-medium transition-all duration-300 hover:text-yellow-300 group ${
                  activeSection === item.id ? 'text-yellow-300' : 'text-gray-300'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-300 to-[#00FF88] transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                {activeSection === item.id && (
                  <span className="absolute -inset-2 bg-yellow-300/10 rounded-lg blur-sm -z-10"></span>
                )}
              </button>
            ))}
          </nav>
          
          {/* Right Side: Language Switcher */}
          <div className="hidden md:flex flex-1 justify-end">
             
              <LanguageSwitcher />
            
          </div>


          {/* Mobile Menu Button & Language Switcher */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center border border-gray-600 bg-gray-800/50 rounded-lg p-1">
              <LanguageSwitcher />
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-yellow-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-700/50 animate-in fade-in duration-300">
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-base font-medium transition-all duration-300 hover:text-yellow-300 ${
                    activeSection === item.id ? 'text-yellow-300' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-yellow-300 to-[#00FF88] transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0'
                  }`}></span>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Decorative bottom border */}
      <div className={`h-0.5 bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
    </header>
  );
};

export default PixelHeader;