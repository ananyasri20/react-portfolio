import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";

import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
    id="home" 
    className="relative flex min-h-screen items-center overflow-hidden c-space">
      {/* Background */}
      <ParallaxBackground />

      {/* Hero Text */}
      <div className="relative z-30">
        <HeroText />
      </div>

      {/* 3D Model */}
      <figure
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          camera={{
            position: [0, 0.5, 6],
            fov: 35,
          }}
        >
          <Suspense fallback={<Loader />}>
            <Float
              speed={1.5}
              rotationIntensity={0.3}
              floatIntensity={0.6}
            >
              <Astronaut
                scale={isMobile ? 0.16 : 0.18}
                position={
                  isMobile
                    ? [0, -1.5, 0]
                    : [2.4, -1.2, -1]
                }
              />
            </Float>

            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        state.mouse.x * 0.2,
        0.5 + state.mouse.y * 0.1,
        6,
      ],
      0.4,
      delta
    );

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default Hero;