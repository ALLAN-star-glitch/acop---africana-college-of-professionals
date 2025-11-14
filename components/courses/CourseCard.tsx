'use client'

import React from 'react'
import Image from 'next/image'
import { CheckCircleIcon } from 'lucide-react'

interface CourseCardProps {
  title: string
  description: string
  image: string
  accreditations: string[]
  category: string
}

export function CourseCard({
  title,
  description,
  image,
  accreditations,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#4B0082] mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {accreditations.map((acc) => (
            <span
              key={acc}
              className="inline-flex items-center gap-1 text-xs bg-[#F8F6FF] text-[#4B0082] px-3 py-1 rounded-full"
            >
              <CheckCircleIcon className="w-3 h-3" />
              {acc}
            </span>
          ))}
        </div>

        <a
          href="/course-details"
          className="inline-block w-full text-center bg-[#FF7F32] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF7F32]/90 transition-all hover:shadow-lg"
        >
          View Details
        </a>
      </div>
    </div>
  )
}
