
import { AdmissionSteps } from '@/components/admissions/AdmissionSteps'
import { FinalCTA } from '@/components/admissions/FinalCta'
import { HeroSection } from '@/components/admissions/HeroSection'
import { MasomoPortal } from '@/components/admissions/MasomoPortal'
import { Scholarships } from '@/components/admissions/Scholarships'
import { Testimonials } from '@/components/admissions/Testmonials'
import React from 'react'

export default function AdmissionsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection />
      <AdmissionSteps />
      <MasomoPortal />
      <Scholarships />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}
