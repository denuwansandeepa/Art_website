"use client";

import Shop from "../components/Shop";

const allArtworks = [
  { id: 1, title: "Sunset Dream", imgSrc: "/images/art1.jpg", price: "12,500", size: "24 x 36 inches" },
  { id: 2, title: "Ocean Waves", imgSrc: "/images/art2.jpg", price: "9,800", size: "18 x 24 inches" },
  { id: 3, title: "Golden Forest", imgSrc: "/images/art3.jpg", price: "15,000", size: "30 x 40 inches" },
  { id: 4, title: "Abstract Light", imgSrc: "/images/art4.jpg", price: "11,200", size: "20 x 30 inches" },
  { id: 5, title: "Mystic Mountain", imgSrc: "/images/art5.jpg", price: "13,500", size: "28 x 36 inches" },
  { id: 6, title: "Silent Forest", imgSrc: "/images/art6.jpg", price: "10,800", size: "22 x 30 inches" },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center">
          Art Shop
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allArtworks.map((art) => (
            <Shop
              key={art.id}
              title={art.title}
              imgSrc={art.imgSrc}
              price={art.price}
              size={art.size}
            />
          ))}
        </div>
      </div>
    </main>
  );
}