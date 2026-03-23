"use client";

import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

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

  const sections = [
    {
      title: "About ArtStudio",
      text: `Auralyn Maliora is an artist devoted to transforming imagination into emotion through art.
      Working across different mediums such as ballpoint pen, pencil, and color pencil,
      each artwork is created with patience, precision, and deep feeling.`,
      image: "/images/about/about1.jpg",
      imageLeft: true,
    },
    {
      title: "Artistic Journey",
      text: `Every piece reflects a quiet story — moments of grace, beauty, and the unseen emotions
      that live beneath the surface. From detailed portraits to symbolic compositions,
      the art invites viewers to pause, feel, and connect.`,
      image: "/images/about/about2.jpg",
      imageLeft: false,
    },
    {
      title: "Experience Art",
      text: `Art is not just something to see here — it is something to experience.
      Limited commissions are available for those who wish to own a unique,
      meaningful piece created with dedication and care.`,
      image: "/images/about/about3.jpg",
      imageLeft: true,
    },
  ];

  return (
    <section
      className={`${inter.variable} ${playfair.variable} relative py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 overflow-hidden`}
    >
      {/* Soft Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              section.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <div className="md:w-1/2 flex-shrink-0">
              <Image
                src={section.image}
                alt={section.title}
                width={600}
                height={400}
                className="rounded-3xl object-cover shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 space-y-4 text-gray-800 font-[var(--font-inter)]">
              <h2 className="text-4xl font-extrabold text-purple-600 font-[var(--font-playfair)]">
                {section.title}
              </h2>
              <p className="leading-relaxed text-lg">{section.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}