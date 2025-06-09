import { twMerge } from "tailwind-merge";

import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectsProps as Props } from "./Projects.types";

import projects from "./projects.json" with { type: "json" };

const Projects = (props: Props) => {
  return (
    <section id="projects" className={twMerge("Projects py-20 bg-muted/30 flex justify-center")}>
      <div className="container px-4 flex flex-col gap-16 items-center">
        <div className="text-center flex flex-col gap-6 items-center">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A showcase of personal projects that solve real problems and demonstrate technical expertise
          </p>
        </div>

        <div className="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
