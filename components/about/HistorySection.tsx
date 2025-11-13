'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const leadershipTeam = [
  {
    name: 'Dr. James Mwangi',
    title: 'President',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    description:
      'Leading with vision and integrity for over 15 years in higher education.',
    category: 'administration',
  },
  {
    name: 'Prof. Sarah Odhiambo',
    title: 'Academic Dean',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
    description:
      'Committed to academic excellence and student success in all programs.',
    category: 'administration',
  },
  {
    name: 'Dr. Samuel Kimani',
    title: 'Professor of Business',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    description:
      'Expert in business strategy with extensive industry experience.',
    category: 'faculty',
  },
  {
    name: 'Dr. Elizabeth Wangari',
    title: 'Professor of Ethics',
    image:
      'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    description:
      'Passionate about integrating ethics into professional education.',
    category: 'faculty',
  },
  {
    name: 'Pastor David Omondi',
    title: 'Spiritual Mentor',
    image:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1448&q=80',
    description:
      'Guiding students in spiritual growth and character development.',
    category: 'mentors',
  },
  {
    name: 'Ms. Ruth Njoroge',
    title: 'Career Development Director',
    image:
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    description:
      'Dedicated to helping students transition successfully to professional careers.',
    category: 'mentors',
  },
  {
    name: 'Mr. Joseph Wafula',
    title: 'Professor of Technology',
    image:
      'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    description:
      'Innovator in educational technology and digital learning methods.',
    category: 'faculty',
  },
  {
    name: 'Mrs. Grace Mutua',
    title: 'Student Affairs Director',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    description:
      'Creating a supportive environment for student growth and development.',
    category: 'administration',
  },
];

const LeadershipSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredLeadership =
    activeFilter === 'all'
      ? leadershipTeam
      : leadershipTeam.filter((member) => member.category === activeFilter);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">
            Meet Our Leadership & Faculty
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our team of dedicated professionals is committed to providing
            excellent education and mentorship.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['all', 'administration', 'faculty', 'mentors'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredLeadership.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-purple-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
