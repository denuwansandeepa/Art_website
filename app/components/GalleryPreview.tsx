"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const artworks = [
  { id: 1, img: "/images/malee/paint.jpeg" },
  { id: 2, img: "/images/malee/paint2.jpeg" },
  { id: 3, img: "/images/malee/paint3.jpeg" },
  { id: 4, img: "/images/malee/paint4.jpeg" },
];

export default function GalleryPreview() {
  return (
    <section className={`${playfair.variable} relative py-32 bg-black overflow-hidden perspective-1000`}>
      
      {/* Deep Space Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-24"
        >
          <div className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-md text-primary font-medium text-sm uppercase tracking-widest">
            Immersive Experience
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white font-[var(--font-playfair)]">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A glimpse into our premium curated artworks collection, floating in the digital space.
          </p>
        </motion.div>

        {/* 3D Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 perspective-1000">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, z: -100, rotateY: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, z: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 10 : -10, rotateX: 5 }}
              className="rounded-2xl overflow-hidden glass-card p-2 group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={art.img}
                  alt="Artwork"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/gallery">
            <button className="group relative overflow-hidden rounded-full bg-white px-10 py-4 font-bold text-black transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              Explore the Gallery
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}