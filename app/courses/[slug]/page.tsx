import { getAllCourses } from '@/lib/wordpress';
import { CoursesGridWrapper } from '@/components/courses/CoursesGridWrapper';
import { CategoryFilterWrapper } from '@/components/courses/CategoryFilterWrapper';

import { SidebarFilter } from '@/components/SidebarFilter';
import Hero from '@/components/courses/Hero';

// Generate static paths at build time
export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course) => ({ slug: course.slug }));
}

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

export default async function CoursesPage() {
  const courses = await getAllCourses();
  
  // Get unique course types for filter options
  const courseLevels = Array.from(
    new Map(
      courses
        .filter(course => course.courseDetails?.courseType?.length > 0)
        .flatMap(course => course.courseDetails?.courseType || [])
        .map(type => [type, {
          id: type,
          label: type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' '),
          count: courses.filter(c => c.courseDetails?.courseType?.includes(type)).length
        }])
    ).values()
  );

  // Get unique categories for CategoryFilter
  const categories = Array.from(
    new Map(
      courses
        .filter(course => course.courseCategories?.nodes?.length > 0)
        .flatMap(course => course.courseCategories.nodes)
        .map(cat => [cat.slug, { id: cat.slug, label: cat.name }])
    ).values()
  );

  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Category Filter */}
      <CategoryFilterWrapper categories={categories} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="lg:w-1/4">
            <SidebarFilter courseLevels={courseLevels} />
          </div>
          
          {/* Courses Grid */}
          <div className="lg:w-3/4">
            <CoursesGridWrapper allCourses={courses} activeCategory="all" />
          </div>
        </div>
      </div>
    </main>
  );
}