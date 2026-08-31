"use client";

import { motion, Variants } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function About() {
  const fadeUp3D = {
    hidden: { opacity: 0, y: 100, rotateX: 45, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
     transition: { duration: 1, ease: "easeOut" as const },
    },
  };

 const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className={`${inter.variable} ${playfair.variable} relative py-32 bg-black overflow-hidden perspective-1000`}>
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          variants={fadeUp3D}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-md text-primary font-medium text-sm">
            ✦ Behind the Canvas
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 ff-playfair tracking-tight">
            About <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">ArtStudio</span>
          </h2>
          
          <div className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed ff-inter space-y-8 glass-card p-10 rounded-3xl">
            <p>
              Auralyn Maliora is an artist devoted to transforming imagination into emotion through art. Working across different mediums such as ballpoint pen, pencil, and color pencil, each artwork is created with patience, precision, and deep feeling.
            </p>
            <p>
              Every piece reflects a quiet story — moments of grace, beauty, and the unseen emotions that live beneath the surface. From detailed portraits to symbolic compositions, the art invites viewers to pause, feel, and connect.
            </p>
            <p className="italic text-white">
              "Art is not just something to see here — it is something to experience."
            </p>
            <p className="font-semibold text-secondary">
              Limited commissions are available for those who wish to own a unique, meaningful piece created with dedication and care.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* We can add 3D cards here representing values or mediums */}
          {[
            { title: "Precision", desc: "Ballpoint & pencil mastery" },
            { title: "Emotion", desc: "Unseen stories brought to life" },
            { title: "Exclusivity", desc: "Limited custom commissions" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeUp3D}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center transform transition-transform duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-secondary mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(157,78,221,0.5)]">
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 ff-playfair">{item.title}</h3>
              <p className="text-gray-400 ff-inter">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
