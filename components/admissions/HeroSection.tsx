import React from 'react'
import { ArrowRightIcon } from 'lucide-react'
export function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-violet-600 to-violet-800 text-white py-24 px-4 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Admission Journey
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-violet-100 max-w-3xl mx-auto">
          A simple, clear process to join Africana
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
          Start Application
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
