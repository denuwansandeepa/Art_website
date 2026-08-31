import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from "./context/CartContext";
import SmoothScrolling from "./components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArtStudio | Modern Art Gallery",
  description: "A modern digital art portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Wrap everything with Providers */}
        <SmoothScrolling>
          <CartProvider>
            <FavoritesProvider>
              <Navbar />
              {children}
              <Footer />
            </FavoritesProvider>
          </CartProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}