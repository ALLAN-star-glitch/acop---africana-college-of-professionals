/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import { CoursesGrid } from './CoursesGrid';
import { Course } from '@/lib/wordpress';

interface CoursesGridWrapperProps {
  allCourses: Course[];
  activeCategory: string;
}

export function CoursesGridWrapper({ allCourses, activeCategory }: CoursesGridWrapperProps) {
  // Use activeCategory only for initial state
  const [filter, setFilter] = useState({ category: activeCategory, search: '' });

  // Listen for filter changes from SidebarFilter only
  useEffect(() => {
    const handleFilterChange = (e: CustomEvent<{ category: string; search: string }>) => {
      console.log('CoursesGridWrapper received filter change:', e.detail);
      setFilter(e.detail);
    };
    
    window.addEventListener('categoryChange' as any, handleFilterChange);
    
    return () => {
      window.removeEventListener('categoryChange' as any, handleFilterChange);
    };
  }, []);

  return <CoursesGrid courses={allCourses} filter={filter} />;
}