import Link from "next/link";
import FlyingButterfly from "./ButterflySwarm";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden">
      {/* Flying Butterflies */}
      <FlyingButterfly />

      <div className="container mx-auto px-6 py-32 relative z-10">
        {/* Flex container for text and image */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left: Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug">
              Discover Creative Art
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-100">
              Explore a curated collection of modern digital and visual artworks from talented artists worldwide.
            </p>
            <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              >
                View Shop
              </Link>
              <a
                href="/contact"
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/hero.png" // replace with your image path
              alt="Creative Art"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative shapes or background animation */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="300" fill="white" opacity="0.05" />
          <circle cx="80%" cy="20%" r="200" fill="white" opacity="0.05" />
        </svg>
      </div>
    </section>
  );
}
