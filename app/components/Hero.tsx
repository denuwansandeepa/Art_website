"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlyingButterfly from "./ButterflySwarm";

const images = [
  "/images/malee/paint.jpeg",
  "/images/malee/paint2.jpeg",
  "/images/malee/paint3.jpeg",
  "/images/malee/paint4.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const centerX = card.width / 2;
    const centerY = card.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08040f] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed55,transparent_35%),radial-gradient(circle_at_bottom_right,#ec489955,transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-30" />

      <motion.div
        className="absolute left-10 top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 70, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <FlyingButterfly />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-8xl items-center px-6 py-24">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white/90 shadow-xl backdrop-blur-xl"
            >
              ✦ Premium Handmade & Digital Art
            </motion.div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Art That Feels{" "}
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200 bg-clip-text text-transparent">
                Alive
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Discover elegant, creative, and eye-catching artworks designed to
              bring beauty, emotion, and personality into your space.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <motion.div whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/shop"
                  className="block rounded-full bg-white px-9 py-4 font-bold text-purple-700 shadow-[0_20px_50px_rgba(255,255,255,0.18)] transition-all duration-300 hover:bg-purple-50"
                >
                  Explore Collection
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="block rounded-full border border-white/25 bg-white/10 px-9 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-purple-700"
                >
                  Contact Artist
                </Link>
              </motion.div>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 mx-auto lg:mx-0">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-black">4K</h3>
                <p className="mt-1 text-sm text-white/60">Quality</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-black">100+</h3>
                <p className="mt-1 text-sm text-white/60">Designs</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-black">New</h3>
                <p className="mt-1 text-sm text-white/60">Arrivals</p>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Gallery */}
          <motion.div
            className="relative mx-auto h-[540px] w-full max-w-[520px]"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Floating Back Cards */}
            <motion.div
              className="absolute left-3 top-10 h-[410px] w-[330px] rotate-[-12deg] rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl"
              animate={{ y: [0, -18, 0], rotate: [-12, -8, -12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute right-3 top-20 h-[410px] w-[330px] rotate-[12deg] rounded-[2rem] border border-white/10 bg-purple-500/20 shadow-2xl backdrop-blur-xl"
              animate={{ y: [0, 18, 0], rotate: [12, 8, 12] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main 3D Card */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px",
              }}
              className="absolute left-1/2 top-8 h-[450px] w-[360px] -translate-x-1/2 overflow-hidden rounded-[2.2rem] border border-white/20 bg-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  alt="Creative Artwork"
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.18 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-white/10" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-3xl border border-white/15 bg-black/30 p-5 backdrop-blur-xl">
                  <p className="text-sm text-white/60">Featured Artwork</p>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    Creative Visual Collection
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Elegant design for modern spaces.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute left-0 top-20 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-white/60">Style</p>
              <h4 className="text-lg font-black">Modern 3D</h4>
            </motion.div>

            <motion.div
              className="absolute bottom-24 right-0 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-white/60">Collection</p>
              <h4 className="text-lg font-black">Premium</h4>
            </motion.div>

            {/* Thumbnail Selector */}
            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-3 rounded-full border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              {images.map((img, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setIndex(dotIndex)}
                  className={`h-14 w-14 overflow-hidden rounded-full border transition-all duration-300 ${
                    index === dotIndex
                      ? "scale-110 border-white"
                      : "border-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Artwork ${dotIndex + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}