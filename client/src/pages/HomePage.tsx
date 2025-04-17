import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/Home/HeroSection";
import EducationSection from "@/components/Home/EducationSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import SkillsSection from "@/components/Home/SkillsSection";
import ExperienceSection from "@/components/Home/ExperienceSection";
import ContactSection from "@/components/Home/ContactSection";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { toast } = useToast();

  const handleResumeDownload = () => {
    toast({
      title: "Resume Download",
      description: "The resume download feature will be implemented soon.",
    });
  };

  useEffect(() => {
    document.title = "Dhruv Bompilwar | Portfolio";
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" 
        style={{ scaleX, transformOrigin: "0%" }} 
      />

      <HeroSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />

      {/* Floating Action Button for Resume */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          size="icon" 
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={handleResumeDownload}
        >
          <Download className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
};

export default HomePage;
