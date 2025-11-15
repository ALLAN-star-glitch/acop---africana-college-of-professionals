import React from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from 'lucide-react'
import Link from 'next/link'
export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">
              Africana College
            </h3>
            <p className="text-white/80 mb-4">
              Transforming lives through faith-based education and professional
              excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="https://form.jotform.com/253172041859559"
                  target='_blank'
                  rel='noreferrer noopener'
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Student Portal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={18} className="mr-2 mt-1 shrink-0" />
                <span className="text-white/80">
                  Kianjau House 4th Floor, Thika
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="tel:+254756234165"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  +254 756 234165
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@acop.co.ke"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  info@acop.co.ke
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to receive updates on new courses and events.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-medium transition-colors w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/70 text-sm">
          <p>
            © 2025 Africana College of Professionals – Educating in Truth and
            Light.
          </p>
        </div>
      </div>
    </footer>
  )
}
