import React from "react";

import ProjectCard from "./ProjectCard";
import { render } from "setupTests";

import projects from "../projects.json" with { type: "json" };

describe("ProjectCard", () => {
  it("renders with default props", () => {
    expect(projects.length).toBeGreaterThan(0);
    const project = projects[0]!;
    const { getByText } = render(<ProjectCard project={project} />);
    expect(getByText(project.title)).toBeInTheDocument();
    expect(getByText(project.description)).toBeInTheDocument();
  });
});
