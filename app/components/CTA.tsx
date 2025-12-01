"use client";

import { useEffect, useState } from "react";

export default function CTA() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimate(true);
  }, []);

  return (
    <section
      id="contact"
      className={`py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white transition-opacity duration-1000 ease-out ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      } transform`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Ready to Scale Your Business?
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
          Book a free strategy call and get your personalized growth roadmap in
          48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-8 py-5 rounded-2xl text-lg w-full sm:w-auto bg-black/30 backdrop-blur-sm border-2 border-gray-700 focus:border-gray-400 focus:outline-none text-white placeholder-gray-400 transition"
          />
          <button
            className="bg-gradient-to-r from-gray-700 to-black px-12 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl 
            transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Get Free Audit
          </button>
        </div>
        <p className="mt-8 text-lg opacity-60 text-gray-400">
          No spam. No commitment. Just results.
        </p>
      </div>
    </section>
  );
}
