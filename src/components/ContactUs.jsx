"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Button as MovingBorderButton } from "./ui/moving-border";
import Globe from "@/components/lightswind/globe";


export function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center py-12 px-4 md:px-8 font-sans">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left side - Form */}
        <div className="w-full">
          <div className="shadow-input w-full rounded-2xl bg-black border border-yellow-500/20 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-['Inter',_system-ui,_sans-serif]">
              Get In Touch
            </h2>
            <p className="mt-2 max-w-sm text-sm text-white font-['Inter',_system-ui,_sans-serif] leading-relaxed">
              Let's collaborate and build something amazing together
            </p>
            <form className="my-8 font-['Inter',_system-ui,_sans-serif]" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project inquiry" type="text" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="flex h-auto w-full rounded-md border border-yellow-500/30 bg-black px-3 py-2 text-sm text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:cursor-not-allowed disabled:opacity-50 font-['Inter',_system-ui,_sans-serif]"
                />
              </LabelInputContainer>

              <MovingBorderButton
                borderRadius="0.5rem"
                duration={3000}
                containerClassName="w-full"
                borderClassName="bg-[radial-gradient(#4deeea_40%,transparent_60%)]"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                as="button"
                type="submit"
              >
                Send Message &rarr;
              </MovingBorderButton>

              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

              <div className="flex flex-col space-y-4">
                <MovingBorderButton
                  borderRadius="0.5rem"
                  duration={3000}
                  containerClassName="w-full"
                  borderClassName="bg-[radial-gradient(#facc15_40%,transparent_60%)]"
                  className="bg-black/80 backdrop-blur-xl border-yellow-500/30 text-white font-medium font-['Inter',_system-ui,_sans-serif]"
                  as="button"
                  type="button"
                >
                  <div className="flex items-center justify-start space-x-2 px-4">
                    <IconBrandGithub className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-300">GitHub</span>
                  </div>
                </MovingBorderButton>

                <MovingBorderButton
                  borderRadius="0.5rem"
                  duration={3000}
                  containerClassName="w-full"
                  borderClassName="bg-[radial-gradient(#facc15_40%,transparent_60%)]"
                  className="bg-black/80 backdrop-blur-xl border-yellow-500/30 text-white font-medium font-['Inter',_system-ui,_sans-serif]"
                  as="button"
                  type="button"
                >
                  <div className="flex items-center justify-start space-x-2 px-4">
                    <IconBrandGoogle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-300">Google</span>
                  </div>
                </MovingBorderButton>
              </div>
            </form>
          </div>
        </div>


        {/* Right side - Globe */}
        <div className="w-full hidden md:flex items-center justify-center pt-50">
          <div className="relative w-full max-w-[600px] h-[600px]">
            <Globe className="w-full h-full" width={800} height={800} />
          </div>
        </div>
      </div>
    </div>

  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default ContactUs;