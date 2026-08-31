"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image, Environment, Float, Sparkles, Text, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import Link from "next/link";

const ARTWORKS = [
  "/images/malee/paint.jpeg",
  "/images/malee/paint2.jpeg",
  "/images/malee/paint3.jpeg",
  "/images/malee/paint4.jpeg",
];

function Scene() {
  const { viewport, mouse } = useThree();
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      // Smoothly rotate the group based on mouse position
      THREE.MathUtils.lerp(group.current.rotation.y, (mouse.x * Math.PI) / 10, 0.1);
      THREE.MathUtils.lerp(group.current.rotation.x, (mouse.y * Math.PI) / 10, 0.1);
      
      group.current.rotation.y += (mouse.x * 0.2 - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-mouse.y * 0.2 - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Center Main Art */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Image url={ARTWORKS[0]} transparent opacity={0.9} scale={[viewport.width / 4, viewport.width / 3]} position={[0, 0, 1]} />
      </Float>

      {/* Side floating artworks */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Image url={ARTWORKS[1]} transparent opacity={0.7} scale={[viewport.width / 5, viewport.width / 4]} position={[-viewport.width / 3.5, 1, -1]} rotation={[0, Math.PI / 8, 0]} />
      </Float>
      
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <Image url={ARTWORKS[2]} transparent opacity={0.7} scale={[viewport.width / 5, viewport.width / 4]} position={[viewport.width / 3.5, -1, -2]} rotation={[0, -Math.PI / 8, 0]} />
      </Float>

      <Float speed={1} rotationIntensity={2} floatIntensity={2}>
        <Image url={ARTWORKS[3]} transparent opacity={0.5} scale={[viewport.width / 6, viewport.width / 5]} position={[viewport.width / 2.5, 2, -3]} />
      </Float>

      <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.2} color="#ff007f" />
      <Sparkles count={100} scale={10} size={1.5} speed={0.2} opacity={0.3} color="#9d4edd" />
      
      <ContactShadows resolution={512} scale={20} blur={2} opacity={0.5} far={10} color="#000000" />
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white selection:bg-primary/30">
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <color attach="background" args={["#000000"]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <Scene />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-gradient-to-b from-black/20 via-transparent to-black/80 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass mb-6 inline-flex rounded-full px-5 py-2 text-sm font-medium tracking-wide text-white/80 shadow-2xl"
          >
            <span className="mr-2 text-secondary">✦</span> Immersive 3D Experience
          </motion.div>

          <h1 className="text-6xl font-black leading-tight tracking-tighter md:text-8xl">
            Art That <br />
            <span className="bg-gradient-to-r from-primary via-[#d87093] to-secondary bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,0,127,0.5)]">
              Comes Alive
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            Step into a world-class digital gallery. Experience premium art through a fully interactive 3D dimension.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex gap-6"
        >
          <Link
            href="/shop"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            Explore Collection
          </Link>
          <Link
            href="/gallery"
            className="glass group rounded-full px-8 py-4 font-bold text-white transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(157,78,221,0.3)]"
          >
            View Gallery
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/20 p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-2 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}