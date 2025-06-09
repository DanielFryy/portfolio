import { Badge } from "@repo/ui/components/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Calendar, MapPin } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { ExperienceCardProps as Props } from "./ExperienceCard.types";

const ExperienceCard = (props: Props) => {
  const { className, experience } = props;
  const { title, company, year, location, description, technologies } = experience;

  return (
    <Card className={twMerge("group hover:shadow-lg transition-all duration-300 hover:-translate-y-1", className)}>
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
          <span className="font-semibold text-primary">{company}</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{year}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
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
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
