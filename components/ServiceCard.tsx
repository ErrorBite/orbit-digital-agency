'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group p-8 bg-white border border-slate-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all duration-300"
    >
      {/* Icon Container */}
      <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed">{description}</p>

      {/* Footer Line */}
      <div className="mt-6 pt-6 border-t border-slate-100">
        <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
          Learn More →
        </a>
      </div>
    </motion.div>
  );
}
