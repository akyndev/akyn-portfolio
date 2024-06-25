import SectionHeader from "@/components/section-header"
import { Badge } from "lucide-react"
import React from "react"

const techStack = [
  {
    logo: "",
    label: "Framer",
    description: "website builder"
  },
  {
    logo: "",
    label: "Framer",
    description: "website builder"
  },
  {
    logo: "",
    label: "Framer",
    description: "website builder"
  },
  {
    logo: "",
    label: "Framer",
    description: "website builder"
  },
  {
    logo: "",
    label: "Framer",
    description: "website builder"
  },
  {
    logo: "",
    label: "Framer",
    description: "website builder"
  }
]

const TechStack = () => {
  return (
    <div>
      <SectionHeader label="tech stack" description="Projects I'm currently working on">
        <Badge strokeWidth={1} />
      </SectionHeader>

      <div className="pt-8 container">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ">
          {techStack.map((_, index) => (
            <div key={index} className="flex p-2 sm:p-3 blur-[.5px] border border-gray-800 rounded-lg">
              <div className="flex gap-3 items-center justify-center">
                <div className="h-9 w-9 rounded bg-white"></div>
                <div>
                  <h2 className="text-white font-medium leading-tight text-sm sm:text-base">{_.label}</h2>
                  <p className="text-xs sm:text-sm text-white/80 capitalize">{_.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
