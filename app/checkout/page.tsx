"use client";

import Link from "next/link";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useCart } from "../context/CartContext";

type CheckoutFormData = {
  name: string;
  phone: string;
  address: string;
  note: string;
};

export default function CheckoutPage() {
  const { cart } = useCart();

  const whatsappNumber = "947XXXXXXXX";
  // Example: 94771234567
  // Do not use + sign

  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const getPrice = (price: string | number) => {
    return Number(String(price).replace(/,/g, "")) || 0;
  };

  const total = cart.reduce((sum, item) => {
    return sum + getPrice(item.price);
  }, 0);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name as keyof CheckoutFormData]: value,
    }));
  };

  const sendToWhatsapp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const orderItems = cart
      .map((item, index) => {
        return `${index + 1}. ${item.title}
Size: ${item.size}
Price: Rs. ${getPrice(item.price).toLocaleString()}`;
      })
      .join("\n\n");

    const message = `
*New Order*

*Customer Details*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}

*Order Details*
${orderItems}

*Total Amount:* Rs. ${total.toLocaleString()}

*Note:* ${formData.note || "No special note"}
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-10">
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

      <div className="max-w-7xl mx-auto">
        <div className="mb-8 fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Checkout
          </h1>
          <p className="text-gray-500 mt-2">
            Fill your delivery details and send your order through WhatsApp
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border p-10 text-center fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mb-6">
              Please add items before checkout.
            </p>

            <Link
              href="/"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side Form */}
            <form
              onSubmit={sendToWhatsapp}
              className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-6 md:p-8 space-y-5 fade-up transition-all duration-300 hover:shadow-xl"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Delivery Details
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  These details will be included in your WhatsApp order message.
                </p>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-black">
  Full Name
</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
               <label className="block mb-2 font-semibold text-black">
  Phone Number
</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
               <label className="block mb-2 font-semibold !text-black">
  Address
</label>
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 resize-none"
                  rows={5}
                  placeholder="Enter your delivery address"
                ></textarea>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Special Note
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 resize-none"
                  rows={3}
                  placeholder="Any special request?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 shadow-md"
              >
                Send Order to WhatsApp
              </button>

              <Link
                href="/cart"
                className="block text-center w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Back to Cart
              </Link>
            </form>

            {/* Right Side Order Summary */}
            <div className="lg:col-span-1 fade-up">
              <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  Order Summary
                </h2>

                <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 border-b pb-4 last:border-b-0 transition-all duration-300 hover:bg-gray-50 rounded-xl p-2"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={item.imgSrc}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          Size: {item.size}
                        </p>

                        <p className="text-purple-600 font-bold mt-1">
                          Rs. {getPrice(item.price).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t mt-5 pt-5 space-y-3">
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

                <div className="flex justify-between items-center border-t mt-5 pt-5">
                  <span className="text-xl font-bold text-gray-900">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-purple-600">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>

                <p className="text-xs text-gray-400 text-center mt-5">
                  After clicking the button, WhatsApp will open with your full
                  order details.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}