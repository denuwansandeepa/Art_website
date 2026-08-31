"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

// Dynamically import the 3D canvas — no SSR so three.js works in Next.js
const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white selection:bg-primary/30">
      
      {/* 3D Canvas Background - loaded client-side only */}
      <div className="absolute inset-0 z-0 opacity-80">
        <HeroCanvas />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-linear-to-b from-black/20 via-transparent to-black/80 px-6 text-center">
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
            <span className="bg-linear-to-r from-primary via-[#d87093] to-secondary bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,0,127,0.5)]">
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
          <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
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