import React from 'react'
import {
  PhoneIcon,
  MailIcon,
  UserIcon,
  UsersIcon,
  LaptopIcon,
} from 'lucide-react'
export const TopHeader = () => {
  return (
    <div className="bg-linear-to-r from-primary/10 to-lavender">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <a
            href="tel:+254756234165"
            className="flex items-center hover:text-primary transition-colors"
          >
            <PhoneIcon size={14} className="mr-1" />
            <span>+254 756 234165</span>
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="mailto:info@acop.co.ke"
            className="hidden sm:flex items-center hover:text-primary transition-colors"
          >
            <MailIcon size={14} className="mr-1" />
            <span>info@acop.co.ke</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#scholarship"
            className="flex items-center hover:text-primary transition-colors"
          >
            <UserIcon size={14} className="mr-1" />
            <span className="hidden sm:inline">Scholarship</span>
          </a>
          <a
            href="#alumni"
            className="flex items-center hover:text-primary transition-colors"
          >
            <UsersIcon size={14} className="mr-1" />
            <span className="hidden sm:inline">Alumni</span>
          </a>
          <a
            href="#portal"
            className="flex items-center hover:text-primary transition-colors"
          >
            <LaptopIcon size={14} className="mr-1" />
            <span className="hidden sm:inline">Masomo Portal</span>
          </a>
        </div>
      </div>
      <div className="h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
    </div>
  )
}
