import AnimatedSection from "@/components/animations/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/constants";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  // Get badge variant based on color
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

  // Get icon color based on color name
  const getIconColor = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "accent":
        return "text-accent-500";
      case "secondary":
        return "text-secondary-500";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="experience" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          My journey through internships, projects, and research
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-1/2 w-1 bg-primary h-full transform -translate-x-1/2 hidden md:block"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Mobile Timeline Line */}
          <motion.div
            className="absolute left-6 w-1 bg-primary h-full md:hidden"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex ${
                  exp.side === "left" 
                    ? "md:justify-start" 
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Circle for Desktop */}
                <motion.div 
                  className={`absolute left-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 z-10 hidden md:block`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  style={{ top: "1.5rem" }}
                />

                {/* Timeline Circle for Mobile */}
                <motion.div 
                  className={`absolute left-6 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 z-10 md:hidden`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  style={{ top: "1.5rem" }}
                />
                
                <AnimatedSection
                  direction={exp.side === "left" ? "left" : "right"}
                  delay={index * 0.3}
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    exp.side === "right" ? "md:ml-auto" : ""
                  }`}
                >
                  <Card className="shadow-lg mb-8 ml-12 md:ml-0">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <span className={`material-icons text-2xl ${getIconColor(exp.color)} mr-3`}>
                          {exp.icon}
                        </span>
                        <div>
                          <h3 className={`text-xl font-bold ${getIconColor(exp.color)}`}>{exp.title}</h3>
                          <h4 className="text-lg font-medium mb-1">{exp.company}</h4>
                          <p className="text-sm text-slate-500 mb-3">{exp.period}</p>
                          <p className="text-slate-600 mb-3">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag, tagIndex) => (
                              <Badge 
                                key={tagIndex} 
                                variant={getBadgeVariant(exp.color)}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
