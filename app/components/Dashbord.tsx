"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const updates = [
  {
    title: "New Art Collection Released",
    date: "February 25, 2026",
    description:
      "Our latest digital and canvas art collection is now available in the shop. Explore modern abstract and cinematic designs.",
  },
  {
    title: "Website Performance Optimized",
    date: "February 20, 2026",
    description:
      "Improved loading speed and mobile responsiveness for a smoother user experience across all devices.",
  },
  {
    title: "Gallery Updated",
    date: "February 15, 2026",
    description:
      "Added new high-resolution artwork pieces to the gallery section with improved layout structure.",
  },
];

export default function LatestUpdate() {
  const container3D = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item3D = {
    hidden: { opacity: 0, x: -50, rotateY: 30, scale: 0.9 },
    show: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 20 }
    }
  };

  return (
    <section className={`${playfair.variable} relative min-h-screen bg-[#050505] py-32 overflow-hidden perspective-1000`}>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-md text-secondary font-medium text-sm tracking-widest uppercase">
            What's New
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-[var(--font-playfair)]">
            Latest <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Updates</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Stay informed with our newest releases, improvements, and announcements.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative border-l-4 border-primary/30 pl-8 space-y-16 ml-4 md:ml-0"
          variants={container3D}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {updates.map((update, index) => (
            <motion.div
              key={index}
              variants={item3D}
              whileHover={{ scale: 1.02, rotateY: -2, x: 10 }}
              className="relative group cursor-default"
            >
              {/* Dot */}
              <div className="absolute -left-[42px] top-4 w-6 h-6 bg-primary rounded-full border-4 border-[#050505] shadow-[0_0_15px_rgba(157,78,221,0.8)] group-hover:bg-secondary group-hover:shadow-[0_0_20px_rgba(255,0,127,1)] transition-colors duration-300 z-10" />

              <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center text-sm text-primary mb-4 font-medium uppercase tracking-wider relative z-10">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  {update.date}
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 font-[var(--font-playfair)] relative z-10">
                  {update.title}
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                  {update.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}