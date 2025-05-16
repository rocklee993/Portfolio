import { useState } from 'react'
import HeroSection from "./components/HeroSection";
import PixelHeader from './components/PixelHeader';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';
import Details from './components/Details';
import './App.css'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <PixelHeader />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      
      <Details />
      <ContactSection />
      {/* Other sections */}
    </div>
    
  );
}



export default App
