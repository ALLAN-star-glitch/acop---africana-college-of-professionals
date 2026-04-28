'use client';

import React, { useState, useEffect } from 'react';
import { CategoryFilter } from './CategoryFilter';

interface CategoryFilterWrapperProps {
  categories: { id: string; label: string }[];
  onCategoryChange?: (categoryId: string) => void;
}

export function CategoryFilterWrapper({ categories, onCategoryChange }: CategoryFilterWrapperProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Dispatch event for SidebarFilter and CoursesGrid
    window.dispatchEvent(new CustomEvent('categoryChange', { 
      detail: { category: categoryId, search: '' } 
    }));
    onCategoryChange?.(categoryId);
  };

  return (
    <CategoryFilter
      categories={categories}
      activeCategory={activeCategory}
      onCategoryChange={handleCategoryChange}
    />
  );
}