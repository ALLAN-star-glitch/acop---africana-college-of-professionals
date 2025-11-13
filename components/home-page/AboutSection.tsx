"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState([
    {
      value: 0,
      target: 1200,
      label: "Graduates",
      suffix: "+",
    },
    {
      value: 0,
      target: 20,
      label: "Accredited Courses",
      suffix: "+",
    },
    {
      value: 0,
      target: 15,
      label: "Years of Mentorship",
      suffix: "+",
    },
  ]);

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
    <section id="about-section" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl relative h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Africana College campus"
                className="object-cover"
                fill
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-20 -z-10"></div>
          </div>
          <div className="fade-in-section">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              About Africana College of Professionals
            </h2>
            <p className="text-gray-600 mb-8">
              Africana College of Professionals (ACOP) offers accredited courses
              under TVETA, KCPA, and KASNEB. We blend Christian values with
              modern technical and professional training to nurture
              purpose-driven graduates.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-playfair text-3xl md:text-4xl font-bold text-accent mb-1">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium inline-block transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
