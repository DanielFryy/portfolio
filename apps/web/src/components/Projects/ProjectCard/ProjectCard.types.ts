// ProjectCard component types and interfaces

export interface ProjectCardProps {
  className?: string;
  project: Project;
}

export interface Project {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
}
