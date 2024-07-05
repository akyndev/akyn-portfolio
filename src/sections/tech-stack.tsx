import SectionHeader from "@/components/section-header";
import { Layers } from "lucide-react";
import React from "react";
import NextJs from "/public/next.svg";
import Framer from "/public/framer.svg";
import VSCode from "/public/vscode.svg";
import Supabase from "/public/supabase.svg";
import Python from "/public/python.svg";
import Typescript from "/public/typescript.svg";
import Image from "next/image";

const techStack = [
  {
    logo: NextJs,
    label: "NextJs",
    description: "React Framework",
  },
  {
    logo: Framer,
    label: "Framer",
    description: "website builder",
  },
  {
    logo: Supabase,
    label: "Supabase",
    description: "Postgres Database",
  },
  {
    logo: Typescript,
    label: "Typescript",
    description: "website builder",
  },
  {
    logo: VSCode,
    label: "VS Code",
    description: "IDE",
  },
  {
    logo: Python,
    label: "Python",
    description: "Beginner tho",
  },
];

const TechStack = () => {
  return (
    <div id="tech-stack">
      <SectionHeader
        label="tech stack"
        description="Some of the tools I use in my workflow."
      >
        <Layers strokeWidth={1} />
      </SectionHeader>

      <div className="container pt-8">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {techStack.map((_, index) => (
            <div
              key={index}
              className="flex cursor-pointer rounded-lg border border-border bg-card p-2 blur-[.2px] transition-transform duration-300 ease-in-out hover:scale-[105%] sm:p-3"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="h-9 w-9">
                  <Image
                    src={_.logo}
                    alt={_.label}
                    sizes="100%"
                    className="rounded-md"
                  />
                </div>
                <div>
                  <h2 className="text-sm font-medium leading-tight text-foreground sm:text-base">
                    {_.label}
                  </h2>
                  <p className="text-xs capitalize text-foreground/80 sm:text-sm">
                    {_.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
