"use client";

import { Button } from "@repo/ui/components/button";
import { useRouter, usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { HeaderProps as Props } from "./Header.types";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

const Header = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const brandClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.replace(pathname);
  };

  return (
    <header
      className={twMerge(
        "Header flex justify-center fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b"
      )}
    >
      <div className="container px-4 py-4 flex justify-between items-center">
        <Button
          variant="ghost"
          className="text-xl font-bold hover:bg-transparent focus:bg-transparent"
          onClick={brandClickHandler}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Daniel Freire
          </span>
        </Button>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
