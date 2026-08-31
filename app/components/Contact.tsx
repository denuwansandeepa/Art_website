"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function Contact() {
  const container3D = {
    hidden: { opacity: 0, perspective: 1000 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const leftCard = {
    hidden: { opacity: 0, x: -100, rotateY: 20 },
    show: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  const rightCard = {
    hidden: { opacity: 0, x: 100, rotateY: -20 },
    show: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <main className={`${playfair.variable} relative min-h-screen bg-[#020202] py-32 overflow-hidden perspective-1000`}>
      
      {/* 3D Space Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-md text-primary font-medium text-sm tracking-widest uppercase">
            Get in touch
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-[var(--font-playfair)]">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question or want to collaborate? Send us a message or reach out
            through our contact details.
          </p>
        </motion.div>

        {/* 3D Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          variants={container3D}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* LEFT CARD - Form */}
          <motion.div
            variants={leftCard}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full" />
            
            <h2 className="text-3xl font-bold text-white mb-8 font-[var(--font-playfair)]">
              Send a Message
            </h2>

            <form className="space-y-6 relative z-10">
              {["Name", "Email"].map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-400 font-medium mb-2 text-sm uppercase tracking-wider">
                    {field}
                  </label>
                  <input
                    type={field === "Email" ? "email" : "text"}
                    placeholder={`Your ${field}`}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 backdrop-blur-md"
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-400 font-medium mb-2 text-sm uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none transition-all duration-300 backdrop-blur-md"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full group relative overflow-hidden bg-white text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 transition-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                <span className="relative z-10">Send Message</span>
                <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT CARD - Details */}
          <motion.div
            variants={rightCard}
            whileHover={{ scale: 1.02, rotateY: -5, rotateX: 2 }}
            className="relative overflow-hidden rounded-3xl p-8 md:p-12 border border-white/10 bg-[#0a0a0a]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-50" />
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/30 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 -left-20 w-72 h-72 bg-secondary/30 rounded-full blur-[80px]" />

            <h2 className="text-3xl font-bold mb-4 relative z-10 text-white font-[var(--font-playfair)]">
              Contact Details
            </h2>

            <p className="text-gray-400 mb-12 relative z-10 leading-relaxed text-lg">
              We are always excited to connect with creative individuals,
              brands, and collaborators. Feel free to reach out using the
              information below.
            </p>

            <div className="space-y-8 relative z-10">
              {[
                { icon: <Phone size={24} className="text-primary" />, title: "Phone", lines: ["+94 77 123 4567", "+94 71 987 6543"] },
                { icon: <Mail size={24} className="text-secondary" />, title: "Email", lines: ["contact@yourdomain.com"] },
                { icon: <MapPin size={24} className="text-white" />, title: "Address", lines: ["Colombo, Sri Lanka"] },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="flex items-start gap-6 group cursor-default"
                >
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1 text-lg">{item.title}</p>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-gray-400 group-hover:text-gray-300 transition-colors">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}