import SectionHeader from "@/components/section-header"
import ServiceCard from "@/components/service-card"
import { Badge } from "lucide-react"
import React from "react"

const Services = () => {
  return (
    <div>
      <SectionHeader label="Services i offer" description="Projects I'm currently working on">
        <Badge strokeWidth={1} />
      </SectionHeader>

      <div className="container pt-8">
        <div className="space-y-6">
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  )
}

export default Services
