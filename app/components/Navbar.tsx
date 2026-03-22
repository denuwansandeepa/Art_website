"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Menu items
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
     { name: "Shop", href: "/shop" },   // ✅ Added Shop
    { name: "Gallery", href: "/gallery" },
   
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md shadow-lg transition-colors duration-500">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-white hover:text-purple-400 transition-colors duration-300"
        >
          ArtStudio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg text-white">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative group hover:text-purple-400 transition-colors duration-300"
            >
              <Link href={item.href}>{item.name}</Link>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/30 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 text-white">
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              className={`transform transition-all duration-300 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              } hover:text-purple-400`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-lg font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}