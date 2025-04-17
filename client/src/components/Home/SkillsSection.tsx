import { Progress } from "@/components/ui/progress";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { developmentSkills, dataSkills, tools } from "@/lib/constants";
import { Code, LineChart } from "lucide-react";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills & Expertise</h2>
        <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          My technical skills span web development, programming languages, and data science
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Development Skills */}
          <AnimatedSection direction="left">
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
              <Code className="h-6 w-6 mr-2" />
              Development & Programming
            </h3>

            <div className="space-y-6">
              {developmentSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 mb-2" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-slate-100 text-slate-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Data Science Skills */}
          <AnimatedSection direction="right">
            <h3 className="text-2xl font-bold mb-6 text-accent-500 flex items-center">
              <LineChart className="h-6 w-6 mr-2" />
              Data Science & Analytics
            </h3>

            <div className="space-y-6">
              {dataSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 mb-2 bg-slate-200 [&>div]:bg-accent-500" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-slate-100 text-slate-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Tools & Technologies */}
        <AnimatedSection className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-secondary-500">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-4 flex flex-col items-center">
                  <span className="material-icons text-3xl text-primary mb-2">{tool.icon}</span>
                  <span className="font-medium">{tool.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
