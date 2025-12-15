'use client'

import React from 'react'
import { MonitorIcon, TrendingUpIcon, UsersIcon, ArrowRightIcon } from 'lucide-react'

const features = [
  {
    icon: MonitorIcon,
    title: 'Online Course Materials',
    description: 'Access lectures, readings, and resources anytime',
  },
  {
    icon: TrendingUpIcon,
    title: 'Progress Tracking & Assessments',
    description: 'Monitor your learning journey and complete assignments',
  },
  {
    icon: UsersIcon,
    title: 'Interaction with Faculty',
    description: 'Connect with instructors and get personalized support',
  },
]

export function MasomoPortal() {
  return (
    <section className="py-20 px-4 bg-violet-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn Anytime, Anywhere
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access accredited courses online through Masomo Portal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Portal Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-violet-600 to-orange-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-violet-200 transition-all duration-300 group-hover:shadow-3xl group-hover:-translate-y-2">
              <div className="bg-linear-to-br from-violet-600 to-violet-700 p-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-violet-800 rounded px-3 py-1 text-sm text-violet-200">
                  masomoportal.acop.co.ke
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div className="h-8 bg-linear-to-r from-violet-200 to-orange-200 rounded w-3/4"></div>
                  <div className="h-4 bg-violet-100 rounded w-full"></div>
                  <div className="h-4 bg-violet-100 rounded w-5/6"></div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="h-24 bg-linear-to-br from-violet-100 to-violet-200 rounded-lg"></div>
                    <div className="h-24 bg-linear-to-br from-orange-100 to-orange-200 rounded-lg"></div>
                    <div className="h-24 bg-linear-to-br from-violet-100 to-orange-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-linear-to-br from-violet-600 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://moodle-200882-0.cloudclusters.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Explore Masomo Portal
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
