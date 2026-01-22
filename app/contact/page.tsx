import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Orbit Digital Agency',
  description: 'Get in touch with our team. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-slate-600">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </div>

        <ContactForm />

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-12">
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
        </div>
      </div>
    </div>
  );
}
