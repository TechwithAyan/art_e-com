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
        background: { color: darkMode ? "#000" : "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: ["#ff007f", "#00ffee", "#ffaa00"] },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
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
      }}
    />
  );
};

export default ParticlesBackground;
