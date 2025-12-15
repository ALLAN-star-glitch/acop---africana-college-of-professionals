'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      heroRef.current.style.backgroundPositionY = `${window.scrollY * 0.5}px`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-[70vh] min-h-[500px] bg-cover bg-center flex items-center"
    >
      <Image
        src="/admission-background.jpg"
        alt="Africana College admissions background"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-900/70 to-orange-500/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Africana College of Professionals Admissions
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
           Start your admission journey with Africana College. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="https://form.jotform.com/253171134791556"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg"
            >
              Join Africana Today
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection


