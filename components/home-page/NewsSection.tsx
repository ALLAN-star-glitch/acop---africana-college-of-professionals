"use client";

import React from "react";
import Image from "next/image";
import { PlayCircleIcon } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Africana Unveils 2025 Scholarship Opportunities",
    date: "June 15, 2025",
    excerpt:
      "New scholarship programs aim to support talented students from diverse backgrounds.",
    image:
      "https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "Student Entrepreneurs Making an Impact",
    date: "May 28, 2025",
    excerpt:
      "Meet the Africana students whose innovative ideas are transforming communities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "Faith and Education: Our 2025 Vision",
    date: "May 10, 2025",
    excerpt:
      "Africana College outlines its vision for integrating faith and academic excellence.",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
];

export const NewsSection = () => {
  return (
    <section className="py-16 bg-lavender">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">
            Campus Life & Highlights
          </h2>
          <p className="text-gray-600">
            Discover the stories shaping our community of professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Video */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-video group cursor-pointer">
              <Image
                src="/banner.jpg"
                alt="Campus video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                <PlayCircleIcon
                  size={64}
                  className="text-white opacity-90 group-hover:scale-110 transition-transform"
                />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-playfair text-lg font-bold mb-2">
                A Glimpse into Africana&apos;s Purpose-Driven Learning
              </h3>
              <p className="text-sm text-gray-600">
                Experience the unique blend of faith and academic excellence
                that defines Africana College.
              </p>
            </div>
          </div>

          {/* News & Events Cards */}
          <div className="space-y-6">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden flex hover:shadow-lg transition-shadow"
              >
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-medium text-primary mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-xs font-medium text-accent hover:text-accent/80 mt-2 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Promotional Banner */}
<div className="bg-linear-to-br from-accent to-accent/80 rounded-xl shadow-md overflow-hidden text-white p-6 flex flex-col items-center text-center gap-6">
  <div>
    <h3 className="font-playfair text-2xl font-bold mb-4">
      🎓 January Intake Now Open!
    </h3>
    <p className="mb-6">
      Start Your Purpose Journey with Africana.
    </p>
  </div>

  {/* Large Banner Image */}
  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
    <Image
      src="/banner.jpg"
      alt="Promotional Banner Image"
      fill
      className="object-cover"
      unoptimized
    />
  </div>

  <a
    href="#"
    className="bg-white text-primary hover:bg-lavender px-8 py-3 rounded-full font-medium transition-colors"
  >
    Apply Now
  </a>
</div>

        </div>
      </div>
    </section>
  );
};
