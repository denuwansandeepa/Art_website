"use client";

import { motion } from "framer-motion";

const artworks = [
  { id: 1, title: "Sunset Dream", img: "/images/art1.jpg" },
  { id: 2, title: "Ocean Waves", img: "/images/ocean.jpg" },
  { id: 3, title: "Golden Forest", img: "/images/art3.jpg" },
  { id: 4, title: "Abstract Light", img: "/images/art4.jpg" },
  { id: 5, title: "Purple Sky", img: "/images/art5.jpg" },
  { id: 6, title: "Modern Shapes", img: "/images/art6.jpg" },
];

export default function GalleryPage() {
  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      
      {/* Decorative Background Blur Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Art Gallery
          </h1>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our curated premium collection of artistic masterpieces,
            crafted with imagination and passion.
          </p>
        </motion.div>

        {/* Premium Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/40 backdrop-blur-xl border border-white/40"
            >
              
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={art.img}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">
                  {art.title}
                </h3>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}