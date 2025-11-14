'use client'

import React from 'react'
import Image from 'next/image'
import { StarIcon } from 'lucide-react'

const featuredCourses = [
  {
    id: '1',
    title: 'CPA (Certified Public Accountant)',
    description:
      'Our most popular program for aspiring accounting professionals.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    students: '500+',
  },
  {
    id: '2',
    title: 'Diploma in Counselling Psychology',
    description:
      'Transform lives through professional counselling grounded in faith.',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
    students: '350+',
  },
  {
    id: '3',
    title: 'Diploma in Information Technology',
    description:
      'Launch your tech career with hands-on training and industry certifications.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    students: '400+',
  },
]

export function FeaturedCourses() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#4B0082] mb-2">
            Featured Courses
          </h2>
          <p className="text-gray-600">
            Courses chosen by our students and alumni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#4B0082]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-[#FF7F32] text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <StarIcon className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold">Featured</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#4B0082] mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {course.students} students enrolled
                  </span>
                  <a
                    href="/enroll"
                    className="bg-[#FF7F32] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#FF7F32]/90 transition-all hover:shadow-lg"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
