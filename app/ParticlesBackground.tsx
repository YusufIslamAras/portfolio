"use client";

import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent", // Arka plan rengini ana sayfadan alacak
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push", // Tıklayınca yeni parçacıklar ekler
            },
            onHover: {
              enable: true,
              mode: "grab", // Mouse üzerine gelince çizgiler tutar
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
                distance: 140,
                links: {
                    opacity: 0.5
                }
            }
          },
        },
        particles: {
          color: {
            value: "#06b6d4", // Cyan (Camgöbeği) rengi
          },
          links: {
            color: "#06b6d4",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1, // Hızını buradan artırabilirsin
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Parçacık sayısı
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;