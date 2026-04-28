/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useMemo } from 'react';
import { CourseCard } from './CourseCard';
import { Course } from '@/lib/wordpress';

interface CoursesGridProps {
  courses: Course[];
  filter: { category: string; search: string };
}

export function CoursesGrid({ courses, filter }: CoursesGridProps) {
  // Filter courses based on category and search
  const filteredCourses = useMemo(() => {
    let filtered = [...courses];
    
    // Filter by category
    if (filter.category !== 'all') {
      filtered = filtered.filter((course) => 
        course.courseDetails?.courseType?.includes(filter.category)
      );
    }
    
    // Filter by search
    if (filter.search.trim()) {
      const searchLower = filter.search.toLowerCase();
      filtered = filtered.filter((course) => 
        course.title.toLowerCase().includes(searchLower) ||
        (course.excerpt && course.excerpt.toLowerCase().includes(searchLower)) ||
        (course.courseDetails?.careerPathways && course.courseDetails.careerPathways.toLowerCase().includes(searchLower))
      );
    }
    
    return filtered;
  }, [courses, filter.category, filter.search]);

  // Handle clearing filters
  const clearFilters = () => {
    window.dispatchEvent(new CustomEvent('categoryChange', { 
      detail: { category: 'all', search: '' } 
    }));
  };

  return (
    <section id="courses-section" className="bg-[#F8F6FF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#4B0082] text-center mb-12">
          Our Courses
        </h2>

        {/* Active Filters Display */}
        {(filter.category !== 'all' || filter.search) && (
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
              {filter.category !== 'all' && (
                <span>Showing: {filter.category.charAt(0).toUpperCase() + filter.category.slice(1).replace('-', ' ')}</span>
              )}
              {filter.search && (
                <span>
                  {filter.category !== 'all' ? ' & ' : 'Searching for: '}
                  &ldquo;{filter.search}&rdquo;
                </span>
              )}
              <button
                onClick={clearFilters}
                className="ml-2 text-xs hover:text-orange-900 font-semibold"
                aria-label="Clear filters"
              >
                ✕
              </button>
            </span>
          </div>
        )}

        {/* Results Count */}
        <div className="text-right mb-4 text-sm text-gray-500">
          Showing {filteredCourses.length} of {courses.length} courses
        </div>

        {/* Courses Grid or Empty State */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 text-lg mb-4">
              No courses found matching your criteria.
            </p>
            <button
              onClick={clearFilters}
              className="text-orange-600 hover:text-orange-700 font-medium underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}