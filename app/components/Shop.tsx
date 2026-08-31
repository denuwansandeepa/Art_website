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
    <div className="group relative glass-card rounded-2xl transition-all duration-500 transform hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(157,78,221,0.2)] overflow-hidden w-full max-w-lg mx-auto h-full flex flex-col">
      
      {/* Favorite Button Top-Right */}
      <button
        onClick={handleFavorite}
        className="absolute top-4 right-4 z-20 text-2xl text-red-500 hover:scale-125 transition-transform drop-shadow-md bg-black/40 rounded-full p-2 backdrop-blur-sm"
      >
        {isFavorite(id) ? "❤️" : "🤍"}
      </button>

      {/* Image */}
      <div className="w-full aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-60" />
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center flex flex-col flex-grow bg-[#050505]/50">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-primary font-black text-xl mb-2 filter drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]">Rs. {price}</p>
        <p className="text-gray-400 text-sm mb-6 font-medium">Size: {size}</p>

        <div className="mt-auto">
          <button
            onClick={handleAddToCart}
            className="w-full relative overflow-hidden bg-white/10 border border-white/20 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,255,255,0.1)] group/btn"
          >
            <span className="relative z-10">Add to Cart</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover/btn:opacity-20" />
          </button>
        </div>
      </div>
    </div>
  );
}