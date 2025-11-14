import React, { Fragment } from 'react'
import {
  BookOpenIcon,
  CheckCircleIcon,
  FileTextIcon,
  FolderIcon,
  MailIcon,
} from 'lucide-react'
const steps = [
  {
    icon: BookOpenIcon,
    title: 'Choose Your Course',
    description: 'On-campus or online via Masomo Portal',
    step: 1,
  },
  {
    icon: CheckCircleIcon,
    title: 'Check Requirements',
    description: 'Eligibility per course level',
    step: 2,
  },
  {
    icon: FileTextIcon,
    title: 'Complete Application Form',
    description: 'Online via Masomo Portal or PDF',
    step: 3,
  },
  {
    icon: FolderIcon,
    title: 'Submit Documents',
    description: 'Transcripts, ID, recommendations',
    step: 4,
  },
  {
    icon: MailIcon,
    title: 'Receive Admission Decision',
    description: 'Email confirmation & next steps',
    step: 5,
  },
]
export function AdmissionSteps() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Apply
          </h2>
          <p className="text-lg text-gray-600">
            Follow these simple steps to begin your journey
          </p>
        </div>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:flex items-start justify-between gap-4 mb-8">
          {steps.map((step, index) => (
            <Fragment key={step.step}>
              <div className="flex-1 group">
                <div className="bg-white border-2 border-violet-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-violet-400">
                  <div className="bg-linear-to-br from-violet-600 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-violet-600 mb-2">
                      STEP {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex items-center pt-8">
                  <div className="w-8 h-0.5 bg-violet-300"></div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-white border-2 border-violet-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-violet-400"
            >
              <div className="flex items-start gap-4">
                <div className="bg-linear-to-br from-violet-600 to-orange-500 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-violet-600 mb-1">
                    STEP {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Tracker */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <Fragment key={step.step}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="text-xs text-gray-500 mt-2 hidden md:block">
                    Step {step.step}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 bg-violet-200 mx-2"></div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
