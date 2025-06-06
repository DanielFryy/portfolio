import React from "react";

import Hero from "./Hero";
import { render } from "setupTests";

describe("Hero", () => {
  it("renders with default props", () => {
    render(<Hero />);
  });
});
