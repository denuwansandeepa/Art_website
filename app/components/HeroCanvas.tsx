"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image, Environment, Float, Sparkles, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const ARTWORKS = [
  "/images/malee/paint.jpeg",
  "/images/malee/paint2.jpeg",
  "/images/malee/paint3.jpeg",
  "/images/malee/paint4.jpeg",
];

function Scene() {
  const { viewport, mouse } = useThree();
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += (mouse.x * 0.2 - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-mouse.y * 0.2 - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Center Main Art */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Image
          url={ARTWORKS[0]}
          transparent
          opacity={0.9}
          scale={[viewport.width / 4, viewport.width / 3]}
          position={[0, 0, 1]}
        />
      </Float>

      {/* Side floating artworks */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Image
          url={ARTWORKS[1]}
          transparent
          opacity={0.7}
          scale={[viewport.width / 5, viewport.width / 4]}
          position={[-viewport.width / 3.5, 1, -1]}
          rotation={[0, Math.PI / 8, 0]}
        />
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <Image
          url={ARTWORKS[2]}
          transparent
          opacity={0.7}
          scale={[viewport.width / 5, viewport.width / 4]}
          position={[viewport.width / 3.5, -1, -2]}
          rotation={[0, -Math.PI / 8, 0]}
        />
      </Float>

      <Float speed={1} rotationIntensity={2} floatIntensity={2}>
        <Image
          url={ARTWORKS[3]}
          transparent
          opacity={0.5}
          scale={[viewport.width / 6, viewport.width / 5]}
          position={[viewport.width / 2.5, 2, -3]}
        />
      </Float>

      <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.2} color="#ff007f" />
      <Sparkles count={100} scale={10} size={1.5} speed={0.2} opacity={0.3} color="#9d4edd" />

      <ContactShadows
        resolution={512}
        scale={20}
        blur={2}
        opacity={0.5}
        far={10}
        color="#000000"
      />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ width: "100%", height: "100%" }}>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <Scene />
      <Environment preset="city" />
    </Canvas>
  );
}
