import React, { useState, useEffect } from "react";
import avatar from "/images/me.jpg";
import ParticlesBackground from "./Particles";
const titles = ["CS Student", "Web Developer", "Software Developer", "Game Developer", "Pixel Tinkerer", "Code Alchemist", "Curious Learner"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section
      className="min-h-[calc(100vh-80px)] bg-cover bg-center flex flex-col justify-center items-center text-white font-pixel px-6 py-16 relative"
      style={{ backgroundImage: "url('/images/bg/bgfull.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <ParticlesBackground />
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl justify-between items-center gap-10">

        {/* LEFT SIDE */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl text-yellow-300 font-bold drop-shadow mb-4 leading-tight">
            LYES <br /> GUEBGHID
          </h1>
          <div className="text-2xl sm:text-3xl text-green-400 font-bold h-10">
            <span>{displayText}</span>
            <span className="animate-blink">|</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center md:text-right max-w-md">
          <p className="text-lg sm:text-xl text-gray-300 mb-6 italic">
            “Passionate about learning, coding, and bringing ideas to life through games."
          </p>

          {/* Download CV Button */}
          <a
            href="/GUEBGHIDLyes.pdf"
            download
            className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transform transition duration-300 animate-bounce border-4 border-white"
          >
            ⬇ Download CV
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
          src={avatar}
          alt="Avatar"
          className="w-40 h-40 object-cover rounded-full border-4 border-yellow-300 shadow-lg animate-bounce mt-10"
        />
      </a>
    </section>
  );
};

export default HeroSection;
