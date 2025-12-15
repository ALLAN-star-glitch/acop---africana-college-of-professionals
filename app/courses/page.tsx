
import CourseClient from '@/components/courses/CoursesClient';
import { courses } from '@/lib/constants/courses';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Professional Courses in Kenya | Africana College of Professionals",
  description:
    "Explore diploma, certificate, and short courses at Africana College of Professionals. Join now to develop professional skills, earn certifications, and grow your career.",
  keywords: [
    "Africana College",
    "professional courses",
    "diploma courses Kenya",
    "certificate courses Kenya",
    "short courses",
    "career development",
    "online learning",
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://www.acop.co.ke/courses",
  },
  openGraph: {
    title: "Professional Courses at Africana College of Professionals",
    description:
      "Join Africana College of Professionals to access top-tier diploma, certificate, and short courses for career advancement in Kenya.",
    url: "https://www.acop.co.ke/courses",
    siteName: "Africana College of Professionals",
    type: "website",
    images: [
      {
        url: "https://www.acop.co.ke/courses-background.JPG",
        width: 1200,
        height: 630,
        alt: "Africana College Courses",
      },
    ],
  },
};

export default function CoursesPage() {
  return (
    <>
      {/* JSON-LD structured data for all courses */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Africana College Courses",
            itemListElement: courses.map((course, index) => ({
              "@type": "Course",
              position: index + 1,
              name: course.title,
              description: course.description,
              provider: {
                "@type": "Organization",
                name: "Africana College of Professionals",
                sameAs: "https://www.acop.co.ke",
              },
            })),
          }),
        }}
      />

      {/* Courses UI */}
      <CourseClient />
    </>
  );
}
