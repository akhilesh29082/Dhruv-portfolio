import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import TypewriterEffect from "@/components/animations/TypewriterEffect";
import { Download, ArrowRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const handleResumeDownload = () => {
    toast({
      title: "Resume Download",
      description: "The resume download feature will be implemented soon.",
    });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <FaLinkedin size={24} />;
      case "github":
        return <FaGithub size={24} />;
      case "twitter":
        return <FaTwitter size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hello, I'm Dhruv</span>
              <span className="block mt-2 text-primary">
                <TypewriterEffect phrases={personalInfo.titles} />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              {personalInfo.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="shadow-md hover:shadow-lg"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 shadow-md hover:shadow-lg"
                onClick={handleResumeDownload}
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex mt-8 space-x-4">
              {socialLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition"
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1568607689150-17e625c1586e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Dhruv Bompilwar"
              className="rounded-xl shadow-xl max-w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
