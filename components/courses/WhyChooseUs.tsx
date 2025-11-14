import React from 'react'
import {
  HeartIcon,
  AwardIcon,
  BriefcaseIcon,
  UsersIcon,
  TrendingUpIcon,
} from 'lucide-react'
const benefits = [
  {
    icon: HeartIcon,
    title: 'Faith & Integrity',
    description:
      'Christian values embedded in learning, nurturing character alongside competence.',
  },
  {
    icon: AwardIcon,
    title: 'Accredited Excellence',
    description:
      'Certified by TVETA, KCPA, and KASNEB for recognized, quality education.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Practical Skills',
    description:
      'Hands-on experience and real-world projects for immediate career readiness.',
  },
  {
    icon: UsersIcon,
    title: 'Supportive Community',
    description:
      'Mentorship, scholarships, and student support throughout your journey.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Career Growth',
    description:
      'Guidance and resources for meaningful careers that make a difference.',
  },
]
export function WhyChoose() {
  return (
    <section className="bg-[#F8F6FF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#4B0082] mb-2">
            Why Study With Africana
          </h2>
          <p className="text-gray-600">
            Learn with purpose, excel with support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-[#4B0082] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF7F32] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#4B0082] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
