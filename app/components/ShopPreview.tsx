"use client";

import Shop from "./Shop";
import Link from "next/link";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const artworksPreview = [
  {
    id: 1,
    title: "Sunset Dream",
    imgSrc: "/images/malee/paint.jpeg",
    price: "12,500",
    size: "24 x 36 inches",
  },
  {
    id: 2,
    title: "Ocean Waves",
    imgSrc: "/images/malee/paint2.jpeg",
    price: "9,800",
    size: "18 x 24 inches",
  },
  {
    id: 3,
    title: "Golden Forest",
    imgSrc: "/images/malee/paint3.jpeg",
    price: "15,000",
    size: "30 x 40 inches",
  },
  {
    id: 4,
    title: "Abstract Light",
    imgSrc: "/images/malee/paint4.jpeg",
    price: "11,200",
    size: "20 x 30 inches",
  },
];

export default function ShopPreview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item3D = {
    hidden: { opacity: 0, y: 100, rotateY: -30, rotateX: 20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 20, duration: 1.2 }
    }
  };

  return (
    <section className={`${playfair.variable} py-32 bg-[#050505] relative overflow-hidden perspective-1000`}>
      {/* Abstract glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-md text-secondary font-medium text-sm tracking-widest uppercase">
            Curated Collection
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-[var(--font-playfair)] tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Artworks</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
            Discover a curated selection of our latest and most popular artworks,
            crafted with passion and creativity.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 perspective-1000"
        >
          {artworksPreview.map((art) => (
            <motion.div key={art.id} variants={item3D} className="h-full">
              <Shop
                id={art.id}
                title={art.title}
                imgSrc={art.imgSrc}
                price={art.price}
                size={art.size}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/shop">
            <button className="group relative overflow-hidden rounded-full bg-white px-10 py-4 font-bold text-black transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              View Full Collection
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}