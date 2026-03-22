"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

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
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Latest Updates
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay informed with our newest releases, improvements, and announcements.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-4 border-purple-500 pl-8 space-y-12">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[38px] top-2 w-5 h-5 bg-purple-600 rounded-full border-4 border-white shadow"></span>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarDays className="w-4 h-4 mr-2 text-purple-600" />
                  {update.date}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {update.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {update.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}