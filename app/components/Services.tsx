"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Paid Media", desc: "Get qualified leads instantly through targeted ads", icon: "💰" },
  ];

  // Animation variants for sliding from the top with fade-in
  const topSlideVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="services"
      className="py-32 bg-white"
      initial="hidden"
      animate="visible"
      variants={topSlideVariants}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Complete Digital Marketing Solutions
          </h2>
          <div className="max-w-4xl mx-auto leading-relaxed text-gray-700 py-12 px-20 text-2xl md:text-3xl">
            <p className="mb-6">
              We specialize exclusively in Paid Media, focusing our expertise on building your brand with precision-targeted ads that deliver results faster and more effectively.
            </p>
            <p className="text-xl md:text-2xl">
              Paid Media amplifies your brand’s visibility, creates consistent engagement, and drives qualified leads — all essential for sustained growth in competitive markets.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12 max-w-xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 p-12 rounded-3xl hover:shadow-2xl hover:-translate-y-3 border border-gray-200 transition-transform duration-500 cursor-pointer"
            >
              <div className="text-7xl mb-8 select-none">{service.icon}</div>
              <h3 className="text-5xl font-extrabold text-gray-900 mb-6 group-hover:text-indigo-700 leading-tight transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-2xl text-gray-600 mb-10 leading-relaxed">
                {service.desc}
              </p>
              <button className="text-2xl font-bold text-indigo-700 hover:underline flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Get Free Audit →
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
