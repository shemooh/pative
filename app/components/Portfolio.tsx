"use client";

import { motion } from "framer-motion";

export default function Systems() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="systems"
      className="py-32 bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex items-center justify-center"
    >
      <motion.div
        className="max-w-3xl text-center px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
          We Build Systems for Paid Media
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto leading-relaxed">
          Focused on creating tailored paid media systems that drive growth,
          engagement, and high-quality leads for your business.
        </p>
      </motion.div>
    </section>
  );
}
