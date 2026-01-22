'use client';

import Image from 'next/image';
import { Project } from '@/types';
import { motion } from 'framer-motion';

interface FeaturedWorkProps {
  projects: Project[];
}

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
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

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Work</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we transform ideas into reality.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project._id}
              variants={itemVariants}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-xl bg-slate-900 transition-all duration-300 hover:shadow-xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-slate-800">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-200 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <span className="text-blue-400 font-semibold text-sm">View Project →</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
