import { AboutSection } from "@/components/home-page/AboutSection";
import { CoursesSection } from "@/components/home-page/CoursesSection";
import { FeaturesSection } from "@/components/home-page/FeaturesSection";
import { HeroSlider } from "@/components/home-page/HeroSlider";
import { NewsSection } from "@/components/home-page/NewsSection";
import { TestimonialsSection } from "@/components/home-page/TestmonialSection";


export default function Home() {
  return (
    <div>

      <HeroSlider />
      <NewsSection/>
      <AboutSection/>
      <FeaturesSection/>
      <CoursesSection/>
      <TestimonialsSection/>
      
     
       
    </div>
  );
}
