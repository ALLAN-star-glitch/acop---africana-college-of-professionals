"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2005",
    title: "Humble Beginnings",
    description:
      "Africana College of Professionals was founded with a vision to provide quality education rooted in Christian values.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    year: "2010",
    title: "TVETA Accreditation",
    description:
      "Achieved our first major accreditation from the Technical and Vocational Education and Training Authority.",
    image:
      "https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    year: "2014",
    title: "Campus Expansion",
    description:
      "Expanded our campus facilities to accommodate growing student enrollment and additional programs.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1486&q=80",
  },
  {
    year: "2018",
    title: "KCPA & KASNEB Recognition",
    description:
      "Received recognition from Kenya College of Professional Accountants and KASNEB, further establishing our academic excellence.",
    image:
      "https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80",
  },
  {
    year: "2022",
    title: "International Partnerships",
    description:
      "Established partnerships with international institutions to enhance global learning opportunities for our students.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

const HistorySection = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">
            Our Journey
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Since our founding, Africana College has been committed to
            excellence in education, guided by Christian principles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line for timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-300"></div>

          {/* Timeline items */}
          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow"></div>

                {/* Card */}
                <div className="flex-1 md:pr-12 md:pl-0 pl-0 pr-0">
                  <div
                    className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                      index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                    }`}
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
