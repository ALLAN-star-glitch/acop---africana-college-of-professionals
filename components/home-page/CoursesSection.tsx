'use client';

import React from 'react';
import Image from 'next/image';

const courses = [
  {
    id: 1,
    title: 'Counselling & Psychology',
    description:
      'Develop therapeutic skills with a strong ethical foundation to support mental wellbeing.',
    image:
      'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'Business & Accounting',
    description:
      'Master financial principles and business management with a focus on integrity.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'Technical & Vocational Skills',
    description:
      'Hands-on training in high-demand technical fields with industry-standard equipment.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    title: 'Hair, Beauty & Fashion',
    description:
      'Creative training in beauty arts with professional techniques and business skills.',
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    title: 'Information Technology',
    description:
      'Modern computing skills with practical applications in software and systems.',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    title: 'Leadership & Management',
    description:
      'Develop ethical leadership skills to guide organizations with purpose and vision.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];

export const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 bg-lavender">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">
            Explore Our Courses
          </h2>
          <p className="text-gray-600">
            Accredited, hands-on, and values-based learning.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <a
                  href="#"
                  className="bg-accent text-white hover:bg-accent/90 px-6 py-2 rounded-full inline-block font-medium transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
