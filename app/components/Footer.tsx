"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/1B1LAnkFKn/",
      bg: "bg-[#1877F2]",
      hover: "hover:shadow-[0_0_20px_#1877F2]",
    },
    {
      icon: FaInstagram,
      href: "#",
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      hover: "hover:shadow-[0_0_20px_#E1306C]",
    },
    {
      icon: FaYoutube,
      href: "#",
      bg: "bg-[#FF0000]",
      hover: "hover:shadow-[0_0_20px_#FF0000]",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 mt-24 overflow-hidden">
      {/* Animated Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-8xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-wide">
            ArtStudio
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Discover modern digital and visual artworks from talented creators
            worldwide. Inspire creativity and connect with art lovers.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Navigation
          </h4>
          <ul className="space-y-3">
            {["Home", "Gallery", "About", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                  className="relative group"
                >
                  <span className="hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Follow Us
          </h4>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.bg} ${social.hover} p-4 rounded-full text-white transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {year} Auralyn Maliora. All rights reserved.
      </div>
    </footer>
  );
}