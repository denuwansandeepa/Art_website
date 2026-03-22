"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 overflow-hidden">
      
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
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            About ArtStudio
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
           Auralyn Maliora is an artist devoted to transforming imagination into emotion through art. Working across different mediums such as ballpoint pen, pencil, and color pencil, each artwork is created with patience, precision, and deep feeling.

Every piece reflects a quiet story — moments of grace, beauty, and the unseen emotions that live beneath the surface. From detailed portraits to symbolic compositions, the art invites viewers to pause, feel, and connect.

Art is not just something to see here — it is something to experience.

Limited commissions are available for those who wish to own a unique, meaningful piece created with dedication and care.
          </p>
        </motion.div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <PremiumCard
              title="Our Mission"
              text="We aim to build a creative ecosystem where artists and art lovers can discover, share, and celebrate innovation."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PremiumCard
              title="Our Vision"
              text="To become a global hub for discovering groundbreaking art while empowering artists to thrive in the digital era."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PremiumCard
              title="Our Values"
              text="Creativity, inclusivity, authenticity, and innovation define everything we do at ArtStudio."
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

/* Premium Reusable Card */
function PremiumCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/40">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        {title}
      </h2>
      <p className="text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}