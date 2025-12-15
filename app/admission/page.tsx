import { Metadata } from 'next'
import HeroSection from '@/components/admissions/HeroSection'
import { AdmissionSteps } from '@/components/admissions/AdmissionSteps'
import { MasomoPortal } from '@/components/admissions/MasomoPortal'
import { Scholarships } from '@/components/admissions/Scholarships'
import { Testimonials } from '@/components/admissions/Testmonials'
import { FinalCTA } from '@/components/admissions/FinalCta'

export const metadata: Metadata = {
  title: 'Admissions | Africana College of Professionals',
  description:
    'Apply for admission at Africana College of Professionals in Kenya. Learn about application requirements, admission steps, scholarships, and enrollment timelines for diploma and certificate programs.',
  keywords: [
    'Africana College admissions',
    'college admission Kenya',
    'apply for college Kenya',
    'diploma admissions',
    'certificate course admissions',
    'professional college Kenya',
    'higher education Kenya',
  ].join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.acop.co.ke/admissions',
  },
  openGraph: {
    title: 'Admissions | Africana College of Professionals',
    description:
      'Start your admission journey at Africana College of Professionals. Explore requirements, scholarships, and application steps for professional programs in Kenya.',
    url: 'https://www.acop.co.ke/admissions',
    siteName: 'Africana College of Professionals',
    type: 'website',
    images: [
      {
        url: '/admission-background.jpg',
        width: 1200,
        height: 630,
        alt: 'Africana College Admissions',
      },
    ],
  },
}

export default function AdmissionsPage() {
  return (
    <>
      {/* JSON-LD Structured Data for Admissions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollegeOrUniversity',
            name: 'Africana College of Professionals',
            url: 'https://www.acop.co.ke',
            sameAs: [
              'https://www.facebook.com/acop',
              'https://www.linkedin.com/company/africana-college',
            ],
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'KE',
            },
            department: {
              '@type': 'EducationalOccupationalProgram',
              name: 'Admissions',
              description:
                'Admissions process for diploma, certificate, and professional courses at Africana College of Professionals.',
              educationalCredentialAwarded: [
                'Diploma',
                'Certificate',
                'Professional Certification',
              ],
            },
          }),
        }}
      />

      {/* Admissions Content */}
      <div className="w-full min-h-screen bg-white">
        <HeroSection />
        <AdmissionSteps />
        <MasomoPortal />
        <Scholarships />
        <Testimonials />
        <FinalCTA />
      </div>
    </>
  )
}
