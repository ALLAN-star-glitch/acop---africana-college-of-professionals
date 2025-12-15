"use client"

import { CategoryFilter } from '@/components/courses/CategoryFilter'
import { CoursesGrid } from '@/components/courses/CoursesGrid'
import { FeaturedCourses } from '@/components/courses/FeaturedCourses'

import { WhyChoose } from '@/components/courses/WhyChooseUs'
import React, { useState } from 'react'
import Hero from './Hero'
export default function CourseClient() {
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
