"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Mr Kagondu Jr",
    course: "Diploma in Counselling Psychology",
    quote:
      "Africana taught me not just a profession — but a purpose. The mentorship I received transformed my approach to helping others.",
    image:
      "/kagondu.jpg",
  },
  {
    id: 2,
    name: "Mr Allan Mathenge",
    course: "Certificate in Training of Trainers",
    quote:
      "The values-based education at Africana prepared me to be an ethical leader and a trainer of trainers",
    image:
      "/allan.jpg",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 bg-linear-to-br from-primary to-accent overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1470&q=80"
          alt="Students background"
          fill
          className="object-cover mix-blend-overlay opacity-30"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-12">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-white font-playfair text-3xl sm:text-4xl font-bold mb-2">
            Voices of Transformation
          </h2>
          <p className="text-white/90 text-lg sm:text-xl">
            Hear from those whose lives were transformed at Africana.
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative max-w-xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`flex flex-col items-center text-center px-6 py-10 rounded-lg transition-all duration-700 ease-in-out
                ${index === currentIndex ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
            >
              {/* Small rounded image */}
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white">
                <Image src={t.image} alt={t.name} width={64} height={64} className="object-cover" />
              </div>

              {/* Quote */}
              <blockquote className="text-white text-base sm:text-lg leading-relaxed mb-4">
                “{t.quote}”
              </blockquote>

              {/* Name */}
              <div className="text-white font-semibold text-sm sm:text-base">{t.name}</div>

              {/* Course */}
              <div className="text-white/80 text-xs sm:text-sm">{t.course}</div>
            </div>
          ))}

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${index === currentIndex ? "bg-white scale-110" : "bg-white/50 scale-90 hover:scale-105"}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-white text-2xl sm:text-3xl font-playfair mb-6">
            Begin your journey with Africana today.
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://form.jotform.com/253171134791556"
              target="_blank"
              rel = "noopener noreferrer"
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-transform transform hover:scale-105 shadow-md"
            >
              Register Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-transform transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
