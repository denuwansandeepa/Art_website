"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlyingButterfly from "./ButterflySwarm";

export default function Hero() {
  const images = [
    "/images/malee/paint.jpeg",
    "/images/malee/paint2.jpeg",
    "/images/malee/paint3.jpeg",
    "/images/malee/paint4.jpeg",
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden">
      {/* Butterflies */}
      <FlyingButterfly />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug">
              Discover Creative Art
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-100">
              Explore a curated collection of modern digital and visual artworks from talented artists worldwide.
            </p>

            <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              >
                View Shop
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT SLIDESHOW */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative h-[400px] w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Creative Art"
                className="absolute w-full h-full object-cover rounded-xl shadow-2xl"
                
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50%" cy="50%" r="300" fill="white" opacity="0.05" />
          <circle cx="80%" cy="20%" r="200" fill="white" opacity="0.05" />
        </svg>
      </div>
    </section>
  );
}