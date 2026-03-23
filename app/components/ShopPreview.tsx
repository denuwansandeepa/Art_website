"use client";

import Shop from "./Shop";
import Link from "next/link";

const artworksPreview = [
  {
    id: 1,
    title: "Sunset Dream",
    imgSrc: "/images/art1.jpg",
    price: "12,500",
    size: "24 x 36 inches",
  },
  {
    id: 2,
    title: "Ocean Waves",
    imgSrc: "/images/art2.jpg",
    price: "9,800",
    size: "18 x 24 inches",
  },
  {
    id: 3,
    title: "Golden Forest",
    imgSrc: "/images/art3.jpg",
    price: "15,000",
    size: "30 x 40 inches",
  },
  {
    id: 4,
    title: "Abstract Light",
    imgSrc: "/images/art4.jpg",
    price: "11,200",
    size: "20 x 30 inches",
  },
];

export default function ShopPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Featured Artworks
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Discover a curated selection of our latest and most popular artworks,
          crafted with passion and creativity.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mb-16">
          {artworksPreview.map((art) => (
            <Shop
              key={art.id}
              id={art.id} // ✅ IMPORTANT (for cart)
              title={art.title}
              imgSrc={art.imgSrc}
              price={art.price}
              size={art.size}
            />
          ))}
        </div>

        {/* Button */}
        <Link href="/shop">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            View Full Collection
          </button>
        </Link>

      </div>
    </section>
  );
}