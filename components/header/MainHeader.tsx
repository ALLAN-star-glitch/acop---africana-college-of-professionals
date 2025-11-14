'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { desktopMenuItems } from '@/lib/constants/MenuItems';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-0 w-full z-40
        top-8
        bg-white
        shadow-md
        transition-all duration-300
        ${isScrolled ? 'py-2' : 'py-4'}
      `}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo + Animated Title */}
          <Link
            href="/"
            className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-300 ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}
          >
            <Image
              src="/acoplogo.jpg"
              alt="Africana College of Professionals Logo"
              width={40}
              height={40}
              className="object-contain rounded-md sm:w-12 sm:h-12"
              priority
              unoptimized
            />

            <motion.span
              className="hidden md:block text-lg md:text-xl lg:text-2xl font-bold text-primary font-playfair whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: [0, -2, 0, 2, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Africana College of Professionals
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {desktopMenuItems.map((item) => {
              const isActive = pathname === item.href;

              // External link opens in new tab
              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative"
                  >
                    <motion.span
                      className="font-medium text-sm lg:text-base transition-colors text-gray-700 hover:text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.label}
                    </motion.span>
                  </a>
                );
              }

              return (
                <Link key={item.label} href={item.href} className="relative">
                  <motion.span
                    className={`
                      font-medium text-sm lg:text-base transition-colors
                      ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}
                    `}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.label}
                  </motion.span>

                  {/* Elegant animated underline */}
                  {isActive && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Register button */}
          <div className="flex items-center ml-2 md:ml-4">
            <Link
              href="https://form.jotform.com/253171134791556"
              target='_blank'
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all"
            >
              Register
            </Link>
          </div>

          {/* Mobile/Medium toggle */}
          <div className="flex items-center gap-2 lg:hidden ml-2">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Medium Slide-In Menu */}
      <div
        className={`
          lg:hidden fixed top-8 left-0 h-full 
          w-[80%] max-w-xs bg-primary text-white shadow-xl
          transform transition-transform duration-300 ease-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-semibold">Menu</span>
            <button className="text-white" onClick={() => setMobileMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col space-y-5">
            {desktopMenuItems.map((item) => {
              const isActive = pathname === item.href;

              // Mobile external link
              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative"
                  >
                    <motion.span
                      className={`text-lg font-medium transition-colors hover:text-accent`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.label}
                    </motion.span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative"
                >
                  <motion.span
                    className={`text-lg font-medium transition-colors ${
                      isActive ? 'text-yellow-300' : 'hover:text-accent'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.label}
                  </motion.span>

                  {isActive && (
                    <motion.div
                      layoutId="active-underline-mobile"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-300 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Register button */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link
              href="https://form.jotform.com/253171134791556"
              target='_blank'
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-white text-primary w-full text-center py-3 rounded-full font-semibold text-base"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
