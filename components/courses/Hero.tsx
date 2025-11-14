'use client'

import React from 'react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop"
          alt="Students learning"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#4B0082]/90 via-[#4B0082]/70 to-[#FF7F32]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Empower Your Career with Purpose-Driven Learning
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in-delay">
          Explore our accredited courses designed for real-world impact.
        </p>
        <a
          href="/apply"
          className="inline-block bg-[#FF7F32] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FF7F32]/90 transition-all hover:shadow-2xl hover:scale-105 animate-fade-in-delay-2"
        >
          Apply Now
        </a>
      </div>
    </section>
  )
}
