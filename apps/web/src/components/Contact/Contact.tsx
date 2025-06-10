"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@repo/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { Textarea } from "@repo/ui/components/textarea";
import { Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { ContactProps as Props } from "./Contact.types";

const Contact = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className={twMerge("Contact py-20 flex justify-center")}>
      <div className="container px-4 flex flex-col gap-16 items-center">
        <div className="text-center flex flex-col gap-6 items-center">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Let's connect and discuss opportunities, collaborations, or just chat about technology
          </p>
        </div>

        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
          {/* Contact Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold">Connect With Me</h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors group"
              >
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-primary group-hover:dark:bg-primary group-hover:text-primary-foreground transition-colors">
                  <SiGithub className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-sm text-muted-foreground">Check out my repositories</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors group"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-primary group-hover:dark:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-sm text-muted-foreground">Let's connect professionally</p>
                </div>
              </a>

              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors group"
              >
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-primary group-hover:dark:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-muted-foreground">your.email@example.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" className="w-full group">
                  <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
