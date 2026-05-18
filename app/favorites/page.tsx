"use client";

import Link from "next/link";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  const getPrice = (price: string | number) => {
    return Number(String(price).replace(/,/g, "")) || 0;
  };

  const total = favorites.reduce((sum, item) => {
    return sum + getPrice(item.price);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 md:px-10">
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.5s ease-out both;
        }
      `}</style>

      <div className="max-w-8xl mx-auto">
        <div className="mb-8 fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            My Favorites
          </h1>
          <p className="text-gray-500 mt-2">
            Your saved favorite items are listed here.
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="bg-white border rounded-2xl shadow-sm p-10 text-center fade-up">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-50 flex items-center justify-center">
              <span className="text-4xl">♡</span>
            </div>

            <h2 className="text-2xl font-bold text-black mb-3">
              No favorite items yet
            </h2>

            <p className="text-gray-500 mb-6">
              Add your favorite artworks to see them here.
            </p>

            <Link
              href="/"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Left Side Favorite List */}
            <div className="lg:col-span-2 space-y-5">
              {favorites.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-2xl p-4 md:p-5 shadow-sm flex flex-col md:flex-row gap-5 fade-up transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="w-full md:w-40 h-40 overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-black">
                        {item.title}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        Size:{" "}
                        <span className="font-medium text-black">
                          {item.size}
                        </span>
                      </p>

                      <p className="text-purple-600 font-bold text-lg mt-3">
                        Rs. {getPrice(item.price).toLocaleString()}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        Favorite #{index + 1}
                      </span>

                      <button
                        onClick={() => removeFavorite(item.id)}
                        className="bg-red-50 text-red-600 px-5 py-2 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Summary */}
            <div className="lg:col-span-1 fade-up">
              <div className="bg-white border rounded-2xl shadow-sm p-6 sticky top-6 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Favorites Summary
                </h2>

                <div className="space-y-4 border-b pb-5">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Favorites</span>
                    <span className="font-semibold text-black">
                      {favorites.length}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Total Value</span>
                    <span className="font-semibold text-black">
                      Rs. {total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <Link
                    href="/cart"
                    className="block w-full text-center bg-purple-600 text-white py-4 rounded-xl font-bold hover:bg-purple-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
                  >
                    Go to Cart
                  </Link>

                  <Link
                    href="/"
                    className="block w-full text-center border border-gray-300 text-black py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    Continue Shopping
                  </Link>
                </div>

                <p className="text-xs text-gray-400 text-center mt-5">
                  Your favorite products are saved in this browser.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}