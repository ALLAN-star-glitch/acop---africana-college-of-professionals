'use client';

import React, { useEffect, useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { desktopMenuItems } from '@/lib/constants/MenuItems';
import Image from 'next/image';

export const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-sm transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className={`flex items-center transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`}
            >
              <Image
                src="/acoplogo.jpg"
                alt="Africana College of Professionals Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              {/* Text visible only on desktop */}
              <span className="ml-2 text-xl sm:text-2xl font-bold text-primary font-playfair hidden sm:block">
                Africana College of Professionals
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {desktopMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons (only show Register, hide login) */}
          <div className="hidden md:flex items-center">
            <a
              href="/register"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold text-lg transition-colors"
            >
              Register
            </a>
          </div>

          {/* Mobile Register Button */}
          <div className="md:hidden">
            <a
              href="/register"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold text-lg transition-colors"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary text-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {desktopMenuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
