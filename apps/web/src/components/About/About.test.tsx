import React from "react";

import About from "./About";
import { render } from "setupTests";

describe("About", () => {
  it("renders with default props", () => {
    render(<About />);
  });
});
