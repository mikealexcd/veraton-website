'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">VERATON.</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-primary-light hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-primary-light hover:text-primary transition-colors">
              About us
            </Link>
            <Link href="#clients" className="text-primary-light hover:text-primary transition-colors">
              Who we&apos;ve worked with
            </Link>
            <Link href="#contact" className="text-primary-light hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-light hover:text-primary hover:bg-accent-lavender focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-pink"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#services"
            className="block px-3 py-2 rounded-md text-base font-medium text-primary-light hover:text-primary hover:bg-accent-lavender"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-primary-light hover:text-primary hover:bg-accent-lavender"
          >
            About us
          </Link>
          <Link
            href="#clients"
            className="block px-3 py-2 rounded-md text-base font-medium text-primary-light hover:text-primary hover:bg-accent-lavender"
          >
            Who we&apos;ve worked with
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-primary-light hover:text-primary hover:bg-accent-lavender"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 