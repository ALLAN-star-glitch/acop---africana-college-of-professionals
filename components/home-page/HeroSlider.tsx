"use client";


import React, { useEffect, useState } from 'react'
const slides = [
  {
    id: 1,
    title: 'Education that Transforms Minds and Inspires Purpose',
    subtitle: 'Empowering ethical professionals for real-world impact.',
    bgImage:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    primaryCta: 'Join Africana Today',
    secondaryCta: 'Explore Courses',
  },
  {
    id: 2,
    title: 'Rooted in Faith, Driven by Excellence',
    subtitle: '',
    bgImage:
      'https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    primaryCta: '',
    secondaryCta: '',
  },
  {
    id: 3,
    title: 'Building Skills That Build Nations',
    subtitle: "Practical education for tomorrow's leaders.",
    bgImage:
      'https://media.istockphoto.com/id/2188069561/photo/young-woman-programmer-focused-on-her-work-coding-on-dual-monitors-in-a-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bV9cq8PGdjorVF9kH36HT3zr01mTahlbAyOhrMzeNLI=',
    primaryCta: 'Discover Our Courses',
    secondaryCta: '',
  },
  {
    id: 4,
    title: 'Join a Thriving Community of Purpose-Driven Students',
    subtitle: 'Where faith meets academic excellence.',
    bgImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    primaryCta: 'Apply Now',
    secondaryCta: '',
  },
]
export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-primary/40"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-[fadeIn_1s_ease-in]">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-lg md:text-xl mb-8 animate-[fadeIn_1s_ease-in_0.3s_both]">
                  {slide.subtitle}
                </p>
              )}
              {(slide.primaryCta || slide.secondaryCta) && (
                <div className="flex flex-wrap gap-4 animate-[fadeIn_1s_ease-in_0.6s_both]">
                  {slide.primaryCta && (
                    <a
                      href="#"
                      className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-medium transition-colors"
                    >
                      {slide.primaryCta}
                    </a>
                  )}
                  {slide.secondaryCta && (
                    <a
                      href="#"
                      className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-colors"
                    >
                      {slide.secondaryCta}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${index === currentSlide ? 'w-10 bg-accent' : 'w-3 bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
