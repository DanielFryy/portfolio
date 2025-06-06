"use client";

import { ProvidersProps as Props } from "./Providers.types";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

const Providers = (props: Props) => {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
