"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items added</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {cart.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow">
              
              <img
                src={item.imgSrc}
                className="h-40 w-full object-cover rounded"
              />

              <h2 className="mt-2 font-bold">{item.title}</h2>
              <p>{item.size}</p>
              <p className="text-purple-600">Rs. {item.price}</p>

              <button
                onClick={() => removeFromCart(index)}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
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