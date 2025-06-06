import type { Metadata } from "next";
import localFont from "next/font/local";

import Providers from "@/providers/Providers/Providers";
import { LayoutProps } from "@/types/App.types";

import "@repo/ui/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: "Daniel Freire - Full Stack Engineer",
  description:
    "Portfolio of a passionate full stack software engineer specializing in modern web, mobile, and serverless development.",
  keywords: ["full stack developer", "software engineer", "React", "Next.js", "AWS", "React Native"],
  authors: [{ name: "Daniel Freire" }],
  openGraph: {
    title: "Full Stack Engineer Portfolio",
    description: "Portfolio showcasing modern web, mobile, and serverless development projects",
    type: "website"
  }
};

const RootLayout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
