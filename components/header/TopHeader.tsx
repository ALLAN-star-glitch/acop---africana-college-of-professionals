'use client';

import React from 'react';
import {
  PhoneIcon,
  MailIcon,
  UserIcon,
  UsersIcon,
  LaptopIcon,
} from 'lucide-react';

export const TopHeader = () => {
  return (
    <div
      className="
        fixed top-0 left-0 w-full z-50
        bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100
        border-b border-primary/20
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs sm:text-sm">
        <div className="flex items-center space-x-4">
          <a href="tel:+254756234165" className="flex items-center hover:text-primary">
            <PhoneIcon size={14} className="mr-1" />
            <span>+254 756 234165</span>
          </a>

          <span className="hidden sm:inline">|</span>

          <a href="mailto:info@acop.co.ke" className="hidden sm:flex items-center hover:text-primary">
            <MailIcon size={14} className="mr-1" />
            <span>info@acop.co.ke</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#scholarship" className="flex items-center hover:text-primary">
            <UserIcon size={14} className="mr-1" />
            <span className="hidden sm:inline">Scholarship</span>
          </a>

          <a href="#alumni" className="flex items-center hover:text-primary">
            <UsersIcon size={14} className="mr-1" />
            <span className="hidden sm:inline">Alumni</span>
          </a>

          <a
            href="https://moodle-200882-0.cloudclusters.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary"
          >
            <LaptopIcon size={14} className="mr-1" />
            <span className="hidden sm:inline">Masomo Portal</span>
          </a>
        </div>
      </div>
    </div>
  );
};
