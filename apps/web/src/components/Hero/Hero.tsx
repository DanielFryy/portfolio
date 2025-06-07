import { Button } from "@repo/ui/components/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { HeroProps as Props } from "./Hero.types";

const Hero = (props: Props) => {
  return (
    <section className={twMerge("Hero min-h-screen flex items-center justify-center relative overflow-hidden")}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="container px-4 text-center relative z-10 flex flex-col gap-6 items-center justify-center">
        <div className="flex justify-center">
          <div className="relative">
            <Code className="h-16 w-16 text-blue-600 animate-bounce" />
            <Sparkles className="h-6 w-6 text-purple-600 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl leading-20 font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
          Full Stack Engineer
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed pb-2">
          Passionate about experimenting with new technologies, following the latest trends, and building innovative
          tools to solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 group" asChild>
            <a href="#projects">
              See My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
