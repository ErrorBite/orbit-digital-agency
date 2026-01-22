'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-slate-900">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-slate-900 rounded-lg"></div>
            <span>Orbit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
