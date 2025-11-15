import React from 'react'
import { CourseCard } from './CourseCard'
import { courses } from '@/lib/constants/courses'



interface CoursesGridProps {
  activeCategory: string
}

export function CoursesGrid({ activeCategory }: CoursesGridProps) {
  const filteredCourses =
    activeCategory === 'all'
      ? courses
      : courses.filter((course) => course.category === activeCategory)
  return (
    <section className="bg-[#F8F6FF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#4B0082] text-center mb-12">
          Our Courses
        </h2>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No courses found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
