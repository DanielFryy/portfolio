import { Card, CardContent } from "@repo/ui/components/card";
import { Cloud, Globe, Heart, Smartphone } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { AboutProps as Props } from "./About.types";

const About = (props: Props) => {
  return (
    <section id="about" className={twMerge("About py-20 bg-muted/30")}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-muted-foreground mb-12 leading-relaxed text-center">
            <p className="mb-6">
              My journey in software development has been an exciting evolution across different platforms and
              technologies. I started my career diving deep into mobile development with React Native, where I learned
              to create seamless cross-platform experiences.
            </p>
            <p className="mb-6">
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
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:scale-110 transition-transform">
                    <Smartphone className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
                <p className="text-muted-foreground">
                  Started with React Native, building cross-platform mobile experiences
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full group-hover:scale-110 transition-transform">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Evolution</h3>
                <p className="text-muted-foreground">Evolved into modern web development with React and Next.js</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:scale-110 transition-transform">
                    <Cloud className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Native</h3>
                <p className="text-muted-foreground">Mastered backend and serverless architecture with AWS</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-lg text-muted-foreground">
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              <span>Passionate about building tools that make a difference</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
