"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Kamau',
    course: 'Counselling Psychology',
    quote:
      'Africana taught me not just a profession — but a purpose. The mentorship I received transformed my approach to helping others.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'John Ochieng',
    course: 'Business Administration',
    quote:
      "The values-based education at Africana prepared me to be an ethical business leader. I'm now running my own company with integrity.",
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'Faith Wanjiku',
    course: 'Information Technology',
    quote:
      'The hands-on approach at Africana gave me practical skills that employers value. I secured a job even before graduation.',
    image:
      'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
]

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-linear-to-br from-primary to-accent opacity-90">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Students background"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
          fill
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">
            Voices of Transformation
          </h2>
          <p className="text-white/90">
            Hear from those whose lives were transformed at Africana.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 flex flex-col items-center text-center ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white mb-4 relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover"
                    fill
                  />
                </div>
                <blockquote className="text-white text-xl mb-4">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="text-white font-medium">{testimonial.name}</div>
                <div className="text-white/80 text-sm">
                  {testimonial.course}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white scale-100'
                    : 'bg-white/50 scale-75'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-white text-2xl font-playfair mb-6">
            Begin your journey with Africana today.
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-primary hover:bg-lavender px-8 py-3 rounded-full font-medium transition-colors"
            >
              Register Now
            </a>
            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
