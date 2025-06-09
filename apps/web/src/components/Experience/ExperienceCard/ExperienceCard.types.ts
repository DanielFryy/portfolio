// ExperienceCard component types and interfaces

export interface ExperienceCardProps {
  className?: string;
  experience: Experience;
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}
