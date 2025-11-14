import React from 'react'
import {
  AwardIcon,
  GraduationCapIcon,
  HeartIcon,
  TrophyIcon,
} from 'lucide-react'
const scholarships = [
  {
    icon: AwardIcon,
    title: 'Academic Excellence Scholarship',
    description:
      'Merit-based support for outstanding students with exceptional academic records.',
    eligibility: 'Minimum GPA of 3.5, strong academic portfolio',
    color: 'from-violet-600 to-violet-700',
  },
  {
    icon: HeartIcon,
    title: 'Community Leadership Award',
    description:
      'For students demonstrating commitment to community service and social impact.',
    eligibility: 'Documented community service, leadership roles',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: GraduationCapIcon,
    title: 'Masomo Online Learner Grant',
    description:
      'Financial assistance for distance learners pursuing courses through Masomo Portal.',
    eligibility: 'Enrolled in online programs, financial need',
    color: 'from-violet-500 to-orange-500',
  },
  {
    icon: TrophyIcon,
    title: 'First Generation Scholar Fund',
    description:
      'Supporting students who are the first in their family to attend college.',
    eligibility: 'First-generation college student status',
    color: 'from-violet-700 to-violet-800',
  },
]
export function Scholarships() {
  return (
    <section className="py-20 px-4 bg-linear-to-br from-violet-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Scholarships & Financial Support
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to making quality education accessible through
            various funding opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className={`bg-linear-to-r ${scholarship.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center">
                    <scholarship.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white flex-1">
                    {scholarship.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {scholarship.description}
                </p>

                <div className="bg-violet-50 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-violet-700 mb-1">
                    ELIGIBILITY
                  </div>
                  <p className="text-gray-700 text-sm">
                    {scholarship.eligibility}
                  </p>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
