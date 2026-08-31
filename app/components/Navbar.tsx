"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useFavorites } from "@/app/context/FavoritesContext";
import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const { favorites } = useFavorites();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md shadow-lg transition-colors duration-500">
      <div className="max-w-8xl mx-auto px-6 py-2.5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="Auralyn Maliora Logo"
            width={100}
            height={20}
            priority
            quality={100}
            className="object-contain transition-all duration-300 hover:scale-105 hover:opacity-90"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg text-white items-center">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative group hover:text-purple-400 transition-colors duration-300"
            >
              <Link href={item.href}>{item.name}</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* Favorites Icon */}
          <li className="relative text-2xl">
            <Link href="/favorites" className="hover:text-purple-500 transition-colors duration-300">
              <HiOutlineHeart />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {favorites.length}
                </span>
              )}
            </Link>
          </li>

          {/* Cart Icon */}
          <li className="relative text-2xl">
            <Link href="/cart" className="hover:text-purple-500 transition-colors duration-300">
              <HiOutlineShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/30 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 py-3" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 px-6 text-white">
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

          {/* Mobile Favorites */}
          <li className="pt-2 border-t border-white/20">
            <Link
              href="/favorites"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-lg font-medium hover:text-purple-400"
            >
              <HiOutlineHeart className="mr-2" /> Favorites
              {favorites.length > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {favorites.length}
                </span>
              )}
            </Link>
          </li>

          {/* Mobile Cart */}
          <li>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-lg font-medium hover:text-purple-400"
            >
              <HiOutlineShoppingCart className="mr-2" /> Cart
              {cart.length > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}