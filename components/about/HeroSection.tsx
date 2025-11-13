"use client";

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <section
      ref={heroRef}
      className="relative h-[70vh] min-h-[500px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-purple-900/70 to-orange-500/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Educating Professionals with Purpose and Integrity
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="text-xl md:text-2xl mb-8"
          >
            Where Faith, Knowledge, and Leadership Meet
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
          >
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg"
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
