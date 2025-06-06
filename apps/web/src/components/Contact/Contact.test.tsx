import React from "react";

import Contact from "./Contact";
import { render } from "setupTests";

describe("Contact", () => {
  it("renders with default props", () => {
    render(<Contact />);
  });
});
