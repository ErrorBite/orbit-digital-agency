'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
              Welcome to Orbit
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
          >
            We Craft Digital Experiences That Matter.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Orbit is a full-service agency transforming brands through code and design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#work"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors hover:-translate-y-1 transform duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors hover:-translate-y-1 transform duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
