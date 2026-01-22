'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-12"
        >
          <div className="text-center">
            <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
            <a href="mailto:hello@orbit.agency" className="text-blue-600 hover:text-blue-700">
              hello@orbit.agency
            </a>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
            <a href="tel:+14155552671" className="text-blue-600 hover:text-blue-700">
              +1 (415) 555-2671
            </a>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600">San Francisco, CA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
