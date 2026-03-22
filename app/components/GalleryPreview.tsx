"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const artworks = [
  { id: 1, img: "/images/art1.jpg" },
  { id: 2, img: "/images/art2.jpg" },
  { id: 3, img: "/images/art3.jpg" },
  { id: 4, img: "/images/art4.jpg" },
];

export default function GalleryPreview() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-16 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Featured Gallery
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            A glimpse into our premium curated artworks collection.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={art.img}
                  alt="Artwork"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
          transition={{ duration: 0.6 }}
        >
          <Link href="/gallery">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              Explore Gallery
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}