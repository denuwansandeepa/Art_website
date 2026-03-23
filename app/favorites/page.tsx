"use client";

import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite artworks yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow relative">
              <img src={item.imgSrc} className="h-40 w-full object-cover rounded" />
              <h2 className="mt-2 font-bold">{item.title}</h2>
              <p>{item.size}</p>
              <p className="text-purple-600">Rs. {item.price}</p>

              <button
                onClick={() => removeFavorite(item.id)}
                className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}