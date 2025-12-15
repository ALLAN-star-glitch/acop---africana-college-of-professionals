import { Metadata } from 'next'
import HeroSection from '@/components/about/HeroSection'
import HistorySection from '@/components/about/HistorySection'
import MissionVisionSection from '@/components/about/MissionVisionSection'
import ValuesSection from '@/components/about/ValuesSection'

export const metadata: Metadata = {
  title: 'About Us | Africana College of Professionals',
  description:
    'Learn about Africana College of Professionals, our mission, vision, values, and history. Discover how we prepare students in Kenya for professional excellence and leadership.',
  keywords: [
    'About Africana College',
    'Africana College of Professionals',
    'professional college Kenya',
    'college mission and vision',
    'education institution Kenya',
    'career-focused education',
  ].join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.acop.co.ke/about',
  },
  openGraph: {
    title: 'About Africana College of Professionals',
    description:
      'Discover the mission, vision, values, and history of Africana College of Professionals and our commitment to quality education in Kenya.',
    url: 'https://www.acop.co.ke/about',
    siteName: 'Africana College of Professionals',
    type: 'website',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/pw/AP1GczOY6nX_pGvI42ic6xQyJg8rMvM9paCpirg7c4N8OYR96MSGsnEf87g8ozJMvN1GLc9kWfO1aoTWyRW1nQO7N3mIjmOIaj68AhLdkA9wnNSxKpbG7piYo82i8NijsqGHfrSfcHDubhg1YW7S2JjHDM-Q=w2850-h1984-s-no-gm?authuser=0',
        width: 1200,
        height: 630,
        alt: 'About Africana College of Professionals',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollegeOrUniversity',
            name: 'Africana College of Professionals',
            url: 'https://www.acop.co.ke',
            logo: 'https://www.acop.co.ke/logo.png',
            description:
              'Africana College of Professionals is a leading professional training institution in Kenya offering diploma, certificate, and short courses.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'KE',
            },
            sameAs: [
              'https://www.facebook.com/acop',
              'https://www.linkedin.com/company/africana-college',
            ],
          }),
        }}
      />

      <div className="flex flex-col min-h-screen">
        <main className="grow">
          <HeroSection />
          <MissionVisionSection />
          <HistorySection />
          {/* <LeadershipSection /> */}
          <ValuesSection />
        </main>
      </div>
    </>
  )
}
