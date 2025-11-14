import React from 'react'
interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}
const categories = [
  {
    id: 'all',
    label: 'All Courses',
  },
  {
    id: 'counselling',
    label: 'Counselling & Psychology',
  },
  {
    id: 'business',
    label: 'Business & Accounting',
  },
  {
    id: 'technical',
    label: 'Technical & Vocational Skills',
  },
  {
    id: 'beauty',
    label: 'Hair, Beauty & Fashion',
  },
]
export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#4B0082] mb-2">
            Find Your Course
          </h2>
          <p className="text-gray-600">
            Browse courses by field and specialization
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === category.id ? 'bg-[#4B0082] text-white shadow-lg' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#FF7F32] hover:text-[#FF7F32]'}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
