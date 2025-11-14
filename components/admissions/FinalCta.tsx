'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon, PhoneIcon } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=800&fit=crop"
          alt="Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-violet-900/95 to-orange-600/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Start Your Purpose-Driven Journey Today
        </h2>
        <p className="text-xl mb-10 text-violet-100">
          Join a community committed to educating in truth and light
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-2">
            Apply Now
            <ArrowRightIcon className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-violet-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-2">
            <PhoneIcon className="w-5 h-5" />
            Contact Admissions
          </button>
        </div>
      </div>
    </section>
  )
}
