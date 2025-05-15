// components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" },
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 1000 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: 2.5,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: "bounce",
          },
          links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-[-1]" // Lower z-index so it doesn't overlap content
    />
  );
};

export default ParticlesBackground;
