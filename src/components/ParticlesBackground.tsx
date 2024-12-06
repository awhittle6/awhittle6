'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Particles,  {initParticlesEngine} from '@tsparticles/react'
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
  } from "@tsparticles/engine";
import {loadSlim} from '@tsparticles/slim'
const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          //await loadFull(engine);
          await loadSlim(engine);
          //await loadBasic(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);
      const particlesLoaded = async (container?: Container) :  Promise<void> => {
        console.log(container);
      };

      const options : ISourceOptions= useMemo(
        () => ({
          background: {
            color: {
              value: "#242a33",
            },
          },
          backgroundMask: {
            cover: "#0000ff",
            enable: false
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: true,
                    force: 40,
                    smooth: 30
                },
              },
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 100,
                duration: 0.2,
              },
            },
          },
          particles: {
            color: {
              value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"]
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [],
      );

      if (init) {
        return (
            <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className='-z-10'
        />
    )
    } 
    return <></>;
}

export default ParticlesBackground