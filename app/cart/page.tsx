"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const getPrice = (price: string | number) => {
    return Number(String(price).replace(/,/g, "")) || 0;
  };

  const total = cart.reduce((sum, item) => {
    return sum + getPrice(item.price);
  }, 0);

  const deliveryFee = cart.length > 0 ? 0 : 0;
  const grandTotal = total + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Cart
          </h1>
          <p className="text-gray-500 mt-2">
            Review your selected items before checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center border">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">No items added yet.</p>

            <Link
              href="/"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-2xl p-4 md:p-5 shadow-sm flex flex-col md:flex-row gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                      <h2 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        Size:{" "}
                        <span className="font-medium text-gray-700">
                          {item.size}
                        </span>
                      </p>

                      <p className="text-purple-600 font-bold text-lg mt-3">
                        Rs. {getPrice(item.price).toLocaleString()}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        Item #{index + 1}
                      </span>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="bg-red-50 text-red-600 px-5 py-2 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Checkout Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border rounded-2xl shadow-sm p-6 sticky top-6 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 border-b pb-5">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Items</span>
                    <span className="font-semibold text-gray-900">
                      {cart.length}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">
                      Rs. {total.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="font-semibold text-green-600">
                      To be confirmed
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6">
                  <span className="text-xl font-bold text-gray-900">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-purple-600">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full text-center bg-purple-600 text-white py-4 rounded-xl font-bold hover:bg-purple-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/"
                  className="block w-full text-center mt-3 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Continue Shopping
                </Link>

                <p className="text-xs text-gray-400 mt-5 text-center">
                  Your order details will be sent through WhatsApp at checkout.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}