import { twMerge } from "tailwind-merge";

import { ExperienceProps as Props } from "./Experience.types";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

import experiences from "./experiences.json" with { type: "json" };

const Experience = (props: Props) => {
  return (
    <section id="experience" className={twMerge("Experience py-20 flex justify-center")}>
      <div className="container px-4 flex flex-col gap-16 items-center">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
          <p className="text-xl text-muted-foreground max-w-2xl">
            A journey through different roles and technologies, each building upon the last
          </p>
        </div>

        <div className="max-w-4xl flex flex-col gap-8">
          {experiences.map(experience => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
