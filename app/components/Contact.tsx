"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-20 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-purple-300/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl"
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-2xl text-lg">
            Have a question or want to collaborate? Send us a message or reach out
            through our contact details.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form className="space-y-6">
              {["Name", "Email"].map((field, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <label className="block text-gray-800 font-semibold mb-2">
                    {field}
                  </label>
                  <input
                    type={field === "Email" ? "email" : "text"}
                    placeholder={`Your ${field}`}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  />
                </motion.div>
              ))}

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-gray-800 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none resize-none transition"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-2xl shadow-xl p-8 md:p-10 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <h2 className="text-2xl font-bold mb-3 relative z-10">
              Contact Details
            </h2>

            <p className="text-white/90 mb-8 relative z-10 leading-relaxed">
              We are always excited to connect with creative individuals,
              brands, and collaborators. Feel free to reach out using the
              information below.
            </p>

            <div className="space-y-6 relative z-10">
              {[
                { icon: <Phone size={22} />, title: "Phone", lines: ["+94 77 123 4567", "+94 71 987 6543"] },
                { icon: <Mail size={22} />, title: "Email", lines: ["contact@yourdomain.com"] },
                { icon: <MapPin size={22} />, title: "Address", lines: ["Colombo, Sri Lanka"] },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-white/20 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-white/90">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}