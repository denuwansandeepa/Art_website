"use client";

import { useCart } from "@/app/context/CartContext";
import { useFavorites } from "@/app/context/FavoritesContext";

interface ShopProps {
  id: number;
  title: string;
  imgSrc: string;
  price: string;
  size: string;
}

export default function Shop({ id, title, imgSrc, price, size }: ShopProps) {
  const { addToCart } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleAddToCart = () => {
    addToCart({ id, title, imgSrc, price, size });
  };

  const handleFavorite = () => {
    if (isFavorite(id)) removeFavorite(id);
    else addFavorite({ id, title, imgSrc, price, size });
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden w-full max-w-lg mx-auto">
      
      {/* Favorite Button Top-Right */}
      <button
        onClick={handleFavorite}
        className="absolute top-3 right-3 z-10 text-xl text-red-500 hover:scale-110 transition"
      >
        {isFavorite(id) ? "❤️" : "🤍"}
      </button>

      {/* Image */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-purple-600 font-bold text-lg mb-2">Rs. {price}</p>
        <p className="text-gray-500 text-sm mb-6">Size: {size}</p>

        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3 rounded-lg transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}