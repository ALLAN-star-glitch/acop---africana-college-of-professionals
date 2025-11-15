"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState([
    { value: 0, target: 1200, label: "Graduates", suffix: "+" },
    { value: 0, target: 20, label: "Accredited Courses", suffix: "+" },
    { value: 0, target: 15, label: "Years of Mentorship", suffix: "+" },
  ]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setStats((currentStats) =>
          currentStats.map((stat) => ({
            ...stat,
            value:
              stat.value < stat.target
                ? Math.min(stat.value + Math.ceil(stat.target / 20), stat.target)
                : stat.target,
          }))
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="about-section" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE */}
          <div className="relative flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-xl relative h-64 sm:h-80 md:h-96 w-full">
              <Image
                src="/slide1.jpeg"
                alt="Africana College campus"
                className="object-cover"
                fill
              />
            </div>

            {/* Decorative shapes */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-40 sm:h-40 bg-accent rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-primary rounded-full opacity-20 -z-10"></div>
          </div>

          {/* TEXT CONTENT */}
          <div className="fade-in-section text-center lg:text-left">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-primary mb-4">
              About Africana College of Professionals
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Africana College of Professionals (ACOP) offers accredited
              courses under TVETA, KCPA, and KASNEB. We blend Christian values
              with modern technical and professional training to nurture
              purpose-driven graduates.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-playfair text-3xl sm:text-4xl font-bold text-accent mb-1">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/about"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium inline-block transition-colors"
              >
                Learn More About Us
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};