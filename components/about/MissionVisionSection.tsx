
"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Sunrise } from 'lucide-react'
const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">
            Our Mission & Vision
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-purple-600"
          >
            <div className="flex items-center mb-4">
              <Compass size={36} className="text-purple-600 mr-4" />
              <h3 className="text-2xl font-semibold text-purple-900">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide high-quality, accredited education rooted in Christian
              values, fostering skilled, ethical, and purpose-driven
              professionals who will make a positive impact in their fields and
              communities.
            </p>
          </motion.div>
          {/* Vision */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-500"
          >
            <div className="flex items-center mb-4">
              <Sunrise size={36} className="text-orange-500 mr-4" />
              <h3 className="text-2xl font-semibold text-purple-900">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a leading institution of holistic education, inspiring
              graduates to impact communities and nations positively through
              excellence, innovation, and service, guided by Christian
              principles and values.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default MissionVisionSection
