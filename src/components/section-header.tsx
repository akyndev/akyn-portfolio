import { BadgeCheck } from "lucide-react"
import React from "react"

interface SectionHeaderProps {
  children: React.ReactNode
  label: string
  description: string
}

const SectionHeader = ({ children, label, description }: SectionHeaderProps) => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center gap-1">
        {children}
        <h2 className="font-medium text-[20px] capitalize">{label}</h2>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  )
}

export default SectionHeader
