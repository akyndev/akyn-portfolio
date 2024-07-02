import SectionHeader from "@/components/section-header"
import ServiceCard from "@/components/service-card"
import { Folders } from "lucide-react"

const Services = () => {
  return (
    <div id="services">
      <SectionHeader
        label="Services i offer"
        description="Projects I'm currently working on"
      >
        <Folders strokeWidth={1} />
      </SectionHeader>

      <div className="container pt-8">
        <div className="space-y-6">
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default Services
