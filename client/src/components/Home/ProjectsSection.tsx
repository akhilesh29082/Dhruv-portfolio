import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { projects } from "@/lib/constants";
import { ArrowRight, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleViewMore = () => {
    toast({
      title: "More Projects",
      description: "Additional projects will be added soon.",
    });
  };

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case "primary":
        return "default";
      case "accent":
        return "purple";
      case "secondary":
        return "green";
      default:
        return "default";
    }
  };

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Showcasing my work in interactive web applications and data analysis
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="h-full"
            >
              <Card 
                className="h-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={false}
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 
                    className={`text-xl font-bold mb-2 ${
                      project.color === "primary" 
                        ? "text-primary-700" 
                        : project.color === "accent" 
                        ? "text-accent-500" 
                        : "text-secondary-500"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant={getBadgeVariant(project.color)}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href={project.demoLink} 
                      className={`font-medium flex items-center ${
                        project.color === "primary" 
                          ? "text-primary hover:text-primary-700" 
                          : project.color === "accent" 
                          ? "text-accent-500 hover:text-accent-600" 
                          : "text-secondary-500 hover:text-secondary-600"
                      }`}
                    >
                      <span>View Demo</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                    <a 
                      href={project.sourceLink} 
                      className="text-slate-600 hover:text-slate-800 font-medium flex items-center"
                    >
                      <Code className="mr-1 h-4 w-4" />
                      <span>Source</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <Button 
            variant="outline" 
            onClick={handleViewMore}
            className="bg-white border border-primary text-primary hover:bg-primary-50 shadow hover:shadow-md"
          >
            View More Projects
            <span className="material-icons ml-2 text-lg">apps</span>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
