import { SiGithub } from "@icons-pack/react-simple-icons";
import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Calculator, ExternalLink, Puzzle } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { ProjectsProps as Props } from "./Projects.types";

const Projects = (props: Props) => {
  const projects = [
    {
      title: "Archittect",
      description:
        "A powerful VSCode extension that helps developers visualize and manage their project architecture. Features include dependency graphs, code analysis, and architectural pattern suggestions.",
      icon: <Puzzle className="h-8 w-8" />,
      technologies: ["TypeScript", "VSCode API", "Node.js", "D3.js", "Webpack"],
      githubUrl: "https://github.com/username/archittect",
      liveUrl: "https://marketplace.visualstudio.com/items?itemName=username.archittect",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "og-tools",
      description:
        "A comprehensive web application featuring custom calculators and tools specifically designed for game developers and enthusiasts. Includes damage calculators, stat optimizers, and build planners.",
      icon: <Calculator className="h-8 w-8" />,
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "TypeScript"],
      githubUrl: "https://github.com/username/og-tools",
      liveUrl: "https://og-tools.vercel.app",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className={twMerge("Projects py-20 bg-muted/30")}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of personal projects that solve real problems and demonstrate technical expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardHeader className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative">
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {project.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 group/btn" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
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

export default Projects;
