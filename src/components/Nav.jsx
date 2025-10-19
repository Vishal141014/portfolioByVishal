import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconCode,
  IconBriefcase,
} from "@tabler/icons-react";

export function Nav() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-yellow-500" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <IconCode className="h-full w-full text-yellow-500" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-yellow-500" />
      ),
      href: "#projects",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-yellow-500" />
      ),
      href: "https://www.linkedin.com/in/your-profile",
      target: "_blank",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-yellow-500" />
      ),
      href: "https://github.com/asynchronousJavascriptor",
      target: "_blank",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-yellow-500" />
      ),
      href: "#contact",
    },
  ];
  
  return (
    <div className="fixed top-4 md:top-8 left-0 right-0 z-50 flex items-center justify-center pointer-events-none px-4">
      <div className="pointer-events-auto w-full max-w-fit">
        <FloatingDock
          desktopClassName="bg-black border border-yellow-500/20"
          // mobileClassName="fixed bottom-4 left-1/2 transform -translate-x-1/2 border border-yellow-500/30"
          mobileClassName="fixed top-4 right-7 transform z-50 border border-yellow-500/30"
          items={links} 
        />
      </div>
    </div>
  );
}

export default Nav;
