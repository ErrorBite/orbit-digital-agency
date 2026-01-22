'use client';

import { Service } from '@/types';
import ServiceCard from './ServiceCard';
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  BarChart3,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesGridProps {
  services: Service[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  Code: <Code size={24} />,
  Palette: <Palette size={24} />,
  Smartphone: <Smartphone size={24} />,
  Zap: <Zap size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Users: <Users size={24} />,
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service._id} variants={itemVariants}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={iconMap[service.iconName] || <Code size={24} />}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
