import React from 'react'
import { CrossIcon, AwardIcon, HeartIcon } from 'lucide-react'
const features = [
  {
    id: 1,
    icon: (
      <CrossIcon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
    ),
    title: 'Faith & Integrity',
    description: 'Christian foundation for purposeful learning',
  },
  {
    id: 2,
    icon: (
      <AwardIcon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
    ),
    title: 'Accredited Excellence',
    description: 'Certified by TVETA, KCPA, KASNEB',
  },
  {
    id: 3,
    icon: (
      <div className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
    ),
    title: 'Hands-On Skills',
    description: 'Real-world practicals & mentorship',
  },
  {
    id: 4,
    icon: (
      <HeartIcon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
    ),
    title: 'Supportive Community',
    description: 'Scholarships & student welfare programs',
  },
]
export const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">
            Why Choose Us
          </h2>
          <p className="text-gray-600">We don&apos;t just teach — we transform.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-md p-6 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
