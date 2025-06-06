import React from "react";

import Projects from "./Projects";
import { render } from "setupTests";

describe("Projects", () => {
  it("renders with default props", () => {
    render(<Projects />);
  });
});
