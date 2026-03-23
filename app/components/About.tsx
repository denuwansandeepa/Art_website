"use client";

import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className={`${inter.variable} ${playfair.variable} relative py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 overflow-hidden`}
    >
      {/* Soft Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* About Intro */}
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 font-[var(--font-playfair)] tracking-tight">
            About ArtStudio
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-loose tracking-wide font-[var(--font-inter)] space-y-4">
            <span className="block">
              Auralyn Maliora is an artist devoted to transforming imagination into emotion through art. Working across different mediums such as ballpoint pen, pencil, and color pencil, each artwork is created with patience, precision, and deep feeling.
            </span>

            <span className="block">
              Every piece reflects a quiet story — moments of grace, beauty, and the unseen emotions that live beneath the surface. From detailed portraits to symbolic compositions, the art invites viewers to pause, feel, and connect.
            </span>

            <span className="block italic text-gray-800">
              Art is not just something to see here — it is something to experience.
            </span>

            <span className="block font-medium text-purple-600">
              Limited commissions are available for those who wish to own a unique, meaningful piece created with dedication and care.
            </span>
          </p>
        </motion.div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">





          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

          </motion.div>
        </div>
      </div>
    </section>
  );
}

