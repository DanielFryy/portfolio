import { SiGithub } from "@icons-pack/react-simple-icons";
import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { ExternalLink } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { iconMap } from "./ProjectCard.helpers";
import { ProjectCardProps as Props } from "./ProjectCard.types";

const ProjectCard = (props: Props) => {
  const { className, project } = props;
  const { icon, gradient, title, description, technologies, githubUrl, liveUrl } = project;
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <Card
      className={twMerge(
        "ProjectCard group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden p-0 gap-0",
        className
      )}
    >
      <CardHeader className="relative py-6">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-10 transition-opacity`}
        />
        <div className="relative flex flex-col gap-4 items-start">
          <div
            className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient} text-white group-hover:scale-110 transition-transform`}
          >
            {Icon ? <Icon className="h-8 w-8" /> : null}
          </div>
          <CardTitle className="text-2xl group-hover:text-primary transition-colors">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="relative py-6 flex flex-col gap-6">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <Badge
              key={tech}
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <SiGithub className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              Code
            </a>
          </Button>
          <Button size="sm" className="flex-1 group/btn" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
              Try it out
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
