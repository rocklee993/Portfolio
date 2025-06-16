import React, { useState, useEffect } from "react";
// import ParticlesBackground from "./Particles"; // Si vous l'utilisez et qu'il n'a pas de texte traduisible
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const HeroSection = () => {
  const { t, i18n } = useTranslation(); // Initialisez le hook
  
  // Charger les titres traduits dynamiquement en fonction de la langue
  const animatedTitles = t('heroSection.animatedTitles', { returnObjects: true }) || []; 

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (animatedTitles.length === 0) return; // S'assurer que les titres sont chargés

    const currentTitleIndex = index % animatedTitles.length;
    const fullText = animatedTitles[currentTitleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        // Passer au titre suivant dans la liste TRADUITE
        setIndex((prev) => (prev + 1)); // L'index continuera de s'incrémenter, le modulo est géré à la récupération
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, animatedTitles]); // Ajoutez animatedTitles aux dépendances

  // Réinitialiser l'animation si la langue change et donc les titres
  useEffect(() => {
    setIndex(0); // Réinitialise l'index pour commencer par le premier titre de la nouvelle langue
    setDisplayText(""); // Efface le texte affiché
    setIsDeleting(false); // S'assure que l'animation commence par taper et non par effacer
  }, [i18n.language]); // Se déclenche uniquement au changement de langue


  return (
    <section
      className="min-h-[calc(100vh-80px)] bg-cover bg-center flex flex-col justify-center items-center text-white font-pixel px-6 py-16 relative"
      style={{ backgroundImage: "url('/images/bg/bgfull.png')" }} // Assurez-vous que ce chemin est correct
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      {/* <ParticlesBackground /> */} {/* Décommentez si vous utilisez ce composant */}
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl justify-between items-center gap-10">

        {/* LEFT SIDE */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl text-yellow-300 font-bold drop-shadow mb-4 leading-tight">
            {/* Gère le saut de ligne si le nom traduit contient des espaces */}
            {t('heroSection.name').split(' ').map((word, idx, arr) => (
              <React.Fragment key={idx}>
                {word}
                {idx < arr.length - 1 && arr.length > 1 && <br />} 
              </React.Fragment>
            ))}
          </h1>
          <div className="text-2xl sm:text-3xl text-green-400 font-bold h-10">
            <span>{typeof displayText === 'string' ? displayText : ''}</span>
            <span className="animate-blink">|</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center md:text-right max-w-md">
          <p className="text-lg sm:text-xl text-gray-300 mb-6 italic">
            "{t('heroSection.quote')}" {/* Utilisez la traduction */}
          </p>

          {/* Download CV Button */}
          <a
            href="/GUEBGHID.pdf" // Assurez-vous que le nom du fichier CV est correct et dans le dossier public
            download
            className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transform transition duration-300 animate-bounce border-4 border-white"
          >
            {t('heroSection.downloadCVButton')} {/* Utilisez la traduction */}
          </a>
        </div>
      </div>

      {/* Avatar with clickable link to GitHub */}
      <a
        href="https://github.com/rocklee993"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={"/images/me.jpg"} // Assurez-vous que ce chemin est correct
          alt={t('heroSection.avatarAlt')} 
          className="w-40 h-40 object-cover rounded-full border-4 border-yellow-300 shadow-lg animate-bounce mt-10"
        />
      </a>
    </section>
  );
};

export default HeroSection;