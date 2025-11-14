"use client"

import { CategoryFilter } from '@/components/courses/CategoryFilter'
import { CoursesGrid } from '@/components/courses/CoursesGrid'
import { FeaturedCourses } from '@/components/courses/FeaturedCourses'
import { Hero } from '@/components/courses/Hero'
import { WhyChoose } from '@/components/courses/WhyChooseUs'
import React, { useState } from 'react'
export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <CoursesGrid activeCategory={activeCategory} />
        <FeaturedCourses />
        <WhyChoose />
      </main>
    </div>
  )
}
