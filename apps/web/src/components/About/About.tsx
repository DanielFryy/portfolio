import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Cloud, Globe, Heart, Smartphone } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { AboutProps as Props } from "./About.types";

const About = (props: Props) => {
  return (
    <section id="about" className={twMerge("About py-20 bg-muted/30 flex justify-center")}>
      <div className="container px-4 flex flex-col gap-16 items-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
        </div>

        <div className="max-w-4xl flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-6 text-xl text-muted-foreground leading-relaxed text-center">
            <p>
              My journey in software development has been an exciting evolution across different platforms and
              technologies. I started my career diving deep into mobile development with React Native, where I learned
              to create seamless cross-platform experiences.
            </p>
            <p>
              As the web ecosystem evolved, I naturally transitioned into modern web development, mastering React and
              Next.js to build fast, scalable applications. The shift to backend and serverless architecture with AWS
              opened up new possibilities for creating robust, cloud-native solutions.
            </p>
            <p>
              When I'm not coding, you'll find me reading about the latest tech trends, experimenting with new
              frameworks, or building tools for games. I believe in continuous learning and love sharing knowledge with
              the developer community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center flex flex-col gap-2">
                <CardHeader className="flex flex-col gap-4 items-center">
                  <div className="flex justify-center">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:scale-110 transition-transform">
                      <Smartphone className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">Mobile First</CardTitle>
                </CardHeader>
                <CardDescription className="text-base">
                  Started with React Native, building cross-platform mobile experiences
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center flex flex-col gap-2">
                <CardHeader className="flex flex-col gap-4 items-center">
                  <div className="flex justify-center">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full group-hover:scale-110 transition-transform">
                      <Globe className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">Web Evolution</CardTitle>
                </CardHeader>
                <CardDescription className="text-base">
                  Evolved into modern web development with React and Next.js
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center flex flex-col gap-2">
                <CardHeader className="flex flex-col gap-4 items-center">
                  <div className="flex justify-center">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:scale-110 transition-transform">
                      <Cloud className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">Cloud Native</CardTitle>
                </CardHeader>
                <CardDescription className="text-base">
                  Mastered backend and serverless architecture with AWS
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 text-lg text-muted-foreground text-center">
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span>Passionate about building tools that make a difference</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
