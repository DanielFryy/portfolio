import React from "react";

import ExperienceCard from "./ExperienceCard";
import { render } from "setupTests";

import experiences from "../experiences.json" with { type: "json" };

describe("ExperienceCard", () => {
  it("renders with default props", () => {
    expect(experiences.length).toBeGreaterThan(0);
    const experience = experiences[0]!;
    const { getByText } = render(<ExperienceCard experience={experience} />);
    expect(getByText(experience.title)).toBeInTheDocument();
    expect(getByText(experience.company)).toBeInTheDocument();
  });
});
