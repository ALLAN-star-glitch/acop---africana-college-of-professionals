import HeroSection from '@/components/about/HeroSection'
import HistorySection from '@/components/about/HistorySection'
import MissionVisionSection from '@/components/about/MissionVisionSection'
import ValuesSection from '@/components/about/ValuesSection'


const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <HeroSection />
        <MissionVisionSection />
        <HistorySection />
        {/*  <LeadershipSection />*/}
       
        <ValuesSection />
      </main>
    </div>
  )
}
export default AboutPage
