"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Kamau",
    course: "Counselling Psychology",
    quote:
      "Africana taught me not just a profession — but a purpose. The mentorship I received transformed my approach to helping others.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "John Ochieng",
    course: "Business Administration",
    quote:
      "The values-based education at Africana prepared me to be an ethical business leader. I'm now running my own company with integrity.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Faith Wanjiku",
    course: "Information Technology",
    quote:
      "The hands-on approach at Africana gave me practical skills that employers value. I secured a job even before graduation.",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=200&q=80",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        ),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary to-accent opacity-90">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1470&q=80"
          alt="Students background"
          fill
          className="object-cover mix-blend-overlay opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-2">
            Voices of Transformation
          </h2>
          <p className="text-white/90 text-base sm:text-lg">
            Hear from those whose lives were transformed at Africana.
          </p>
        </div>

        {/* SLIDES */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[380px] sm:min-h-80 md:min-h-[280px]">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 px-4
                  ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : index < currentIndex
                      ? "opacity-0 -translate-x-12"
                      : "opacity-0 translate-x-12"
                  }`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <blockquote className="text-white text-lg sm:text-xl leading-relaxed max-w-2xl mb-4">
                  “{t.quote}”
                </blockquote>

                <div className="text-white font-semibold text-base sm:text-lg">
                  {t.name}
                </div>
                <div className="text-white/80 text-sm">{t.course}</div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3.5 h-3.5 rounded-full transition-all 
                  ${
                    index === currentIndex
                      ? "bg-white scale-110"
                      : "bg-white/50 scale-90"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-14 text-center">
          <h3 className="text-white text-xl sm:text-2xl font-playfair mb-6">
            Begin your journey with Africana today.
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-medium transition"
            >
              Register Now
            </a>
            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
