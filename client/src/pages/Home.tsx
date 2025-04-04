import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TeamSection from "@/components/team/TeamSection";
import AboutSection from "@/components/about/AboutSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
