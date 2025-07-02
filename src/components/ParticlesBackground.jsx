import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";

const ParticlesBackground = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: darkMode ? "#000000" : "transparent",
        },
        particles: {
          number: { value: 60 },
          color: {
            value: darkMode
              ? ["#ff00ff", "#00ffff", "#ff8800"]
              : ["#ff69b4", "#ffb6c1", "#ffa07a"],
          },
          shape: { type: "circle" },
          opacity: {
            value: 0.25,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            distance: 150,
            color: darkMode ? "#ff69b4" : "#ff69b4",
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
