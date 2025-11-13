"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Sprout } from 'lucide-react'

const values = [
  {
    icon: <Heart className="h-10 w-10 text-purple-600" />,
    title: 'Faith & Integrity',
    description:
      'Christian values embedded in every program and aspect of our institution.',
  },
  {
    icon: <Award className="h-10 w-10 text-purple-600" />,
    title: 'Academic Excellence',
    description:
      'Accredited, practical, and transformative education that prepares students for success.',
  },
  {
    icon: <Users className="h-10 w-10 text-purple-600" />,
    title: 'Community Engagement',
    description:
      'Service, mentorship, and outreach programs that connect students with the wider community.',
  },
  {
    icon: <Sprout className="h-10 w-10 text-purple-600" />,
    title: 'Holistic Development',
    description:
      'Focus on skills, leadership, and personal growth for well-rounded professionals.',
  },
]

// Deterministic positions and rotations for background letters
const bgPositions = [
  { top: '5%', left: '10%', rotate: '10deg' },
  { top: '15%', left: '50%', rotate: '45deg' },
  { top: '25%', left: '30%', rotate: '90deg' },
  { top: '35%', left: '70%', rotate: '135deg' },
  { top: '45%', left: '20%', rotate: '180deg' },
  { top: '55%', left: '60%', rotate: '225deg' },
  { top: '65%', left: '40%', rotate: '270deg' },
  { top: '75%', left: '80%', rotate: '315deg' },
  { top: '85%', left: '10%', rotate: '30deg' },
  { top: '95%', left: '50%', rotate: '60deg' },
  { top: '5%', left: '30%', rotate: '120deg' },
  { top: '15%', left: '70%', rotate: '150deg' },
  { top: '25%', left: '20%', rotate: '210deg' },
  { top: '35%', left: '60%', rotate: '240deg' },
  { top: '45%', left: '40%', rotate: '300deg' },
  { top: '55%', left: '80%', rotate: '330deg' },
  { top: '65%', left: '10%', rotate: '15deg' },
  { top: '75%', left: '50%', rotate: '75deg' },
  { top: '85%', left: '30%', rotate: '135deg' },
  { top: '95%', left: '70%', rotate: '195deg' },
]

const ValuesSection = () => {
  return (
    <section className="py-16 bg-purple-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        {bgPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute text-7xl text-purple-900 font-bold opacity-10"
            style={{
              top: pos.top,
              left: pos.left,
              transform: `rotate(${pos.rotate})`,
            }}
          >
            A
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">
            What We Stand For
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Faith, Excellence, and Community at the Core
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-3 group-hover:text-orange-500 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center bg-purple-900 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Learn More About Our Programs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ValuesSection
