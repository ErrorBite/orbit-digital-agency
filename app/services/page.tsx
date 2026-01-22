import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Orbit Digital Agency',
  description: 'Explore our comprehensive digital services and find the perfect solution for your business.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Web Development</h2>
            <p className="text-slate-600 mb-4">
              We build custom web applications using modern technologies like Next.js, React, and Node.js. Our team specializes in creating high-performance, scalable applications that drive business growth.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• Full-stack development</li>
              <li>• API design and implementation</li>
              <li>• Database architecture</li>
              <li>• Performance optimization</li>
            </ul>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">UI/UX Design</h2>
            <p className="text-slate-600 mb-4">
              Our design team creates beautiful, intuitive interfaces that users love. We focus on user-centered design principles to ensure your application is both functional and delightful.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• User research and testing</li>
              <li>• Wireframing and prototyping</li>
              <li>• Visual design systems</li>
              <li>• Responsive design</li>
            </ul>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Digital Strategy</h2>
            <p className="text-slate-600 mb-4">
              We work with you to develop a comprehensive digital strategy that aligns with your business goals and market opportunities.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• Market analysis</li>
              <li>• Digital transformation</li>
              <li>• Technology planning</li>
              <li>• ROI optimization</li>
            </ul>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Web Performance</h2>
            <p className="text-slate-600 mb-4">
              Speed and reliability matter. We optimize your web presence for performance, security, and user experience.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• Speed optimization</li>
              <li>• Security hardening</li>
              <li>• Infrastructure setup</li>
              <li>• Monitoring and analytics</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to get started?</h2>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
