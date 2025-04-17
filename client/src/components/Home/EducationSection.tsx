import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { education } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Education</h2>
        <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Pursuing dual degrees to build expertise in both computer engineering and data science
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <AnimatedSection
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.2}
            >
              <Card className="overflow-hidden shadow-lg">
                <div 
                  className={`h-40 flex items-center justify-center p-4 ${
                    edu.color === "primary" 
                      ? "bg-primary text-white"
                      : "bg-accent text-white"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-center">{edu.degree}</h3>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{edu.institution}</h4>
                  <p className="text-slate-600 mb-4">{edu.period}</p>
                  <ul className="space-y-2 text-slate-700">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight 
                          className={`mr-2 h-5 w-5 mt-0.5 ${
                            edu.color === "primary" 
                              ? "text-primary" 
                              : "text-accent"
                          }`} 
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
