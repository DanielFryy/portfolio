import { Badge } from "@repo/ui/components/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Calendar, MapPin } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { ExperienceProps as Props } from "./Experience.types";

const Experience = (props: Props) => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Engineer",
      company: "Tech Innovation Corp",
      location: "Remote",
      description:
        "Leading development of cloud-native applications using Next.js, AWS Lambda, and serverless architecture. Mentoring junior developers and driving technical decisions for scalable solutions.",
      technologies: ["Next.js", "AWS", "TypeScript", "Serverless", "DynamoDB"]
    },
    {
      year: "2022 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      location: "San Francisco, CA",
      description:
        "Built responsive web applications and mobile solutions using React, React Native, and Node.js. Collaborated with cross-functional teams to deliver high-quality products on time.",
      technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      year: "2021 - 2022",
      title: "Mobile Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      description:
        "Developed cross-platform mobile applications from concept to deployment. Implemented complex UI/UX designs and integrated with various APIs and third-party services.",
      technologies: ["React Native", "Redux", "Firebase", "REST APIs", "iOS/Android"]
    }
  ];

  return (
    <section id="experience" className={twMerge("Experience py-20")}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through different roles and technologies, each building upon the last
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-semibold text-primary">{exp.company}</span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
