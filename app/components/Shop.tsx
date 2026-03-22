"use client";

interface ShopProps {
  title: string;
  imgSrc: string;
  price: string;
  size: string;
}

export default function Shop({ title, imgSrc, price, size }: ShopProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden w-full max-w-lg mx-auto">
      
      {/* Image Section */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-purple-600 font-bold text-lg mb-2">
          Rs. {price}
        </p>

        <p className="text-gray-500 text-sm mb-6">
          Size: {size}
        </p>

        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-3 rounded-lg transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}