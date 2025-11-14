'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mwangi',
    course: 'Business Administration',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    quote:
      'Masomo Portal allowed me to study at my own pace while receiving guidance from Africana faculty. The flexibility was perfect for my schedule.',
    type: 'Online Learner',
  },
  {
    name: 'David Ochieng',
    course: 'Computer Science',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    quote:
      'The on-campus experience at Africana has been transformative. The faculty truly care about student success and the community is incredibly supportive.',
    type: 'Campus Student',
  },
  {
    name: 'Grace Wanjiru',
    course: 'Education Studies',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    quote:
      'The scholarship I received made my dreams possible. Africana invests in students who are committed to making a difference in their communities.',
    type: 'Scholarship Recipient',
  },
  {
    name: 'James Kamau',
    course: 'Theology & Ministry',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    quote:
      'Studying through Masomo Portal while working full-time has been seamless. The platform is intuitive and the support from instructors is exceptional.',
    type: 'Online Learner',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hear From Our Students
          </h2>
          <p className="text-lg text-gray-600">
            Experiences from campus and Masomo Portal online learners
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="bg-linear-to-br from-violet-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Image */}
                      <div className="shrink-0 relative w-32 h-32">
                        <div className="absolute inset-0 bg-linear-to-br from-violet-600 to-orange-500 rounded-full blur-lg opacity-40"></div>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="relative rounded-full object-cover border-4 border-white shadow-lg"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <QuoteIcon className="w-10 h-10 text-violet-400 mb-4 mx-auto md:mx-0" />
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <div>
                          <div className="font-bold text-xl text-gray-900">{testimonial.name}</div>
                          <div className="text-violet-600 font-semibold">{testimonial.course}</div>
                          <div className="text-sm text-gray-500 mt-1">{testimonial.type}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-violet-600 text-violet-600 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-violet-600 text-violet-600 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-violet-600 w-8'
                    : 'bg-violet-200 hover:bg-violet-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
