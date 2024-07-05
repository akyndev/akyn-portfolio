import SectionHeader from "@/components/section-header";
import ServiceCard from "@/components/service-card";
import { Computer, FileStack, Folders } from "lucide-react";

const Services = () => {
  return (
    <div id="services">
      <SectionHeader
        label="Services i offer"
        description="Let's collaborate on crafting your next remarkable website."
      >
        <Folders strokeWidth={1} />
      </SectionHeader>

      <div className="container pt-8">
        <div className="space-y-6">
          <ServiceCard
            icon={<Computer />}
            price="Starts at $199"
            title="Landing page design"
            description="Looking to create a stunning landing page in Framer or NextJs? Count on me to bring your vision to life with a professionally designed landing page."
          />
          <ServiceCard
            icon={<FileStack />}
            price="Starts at $399"
            title="Custom website"
            description="I'm a skilled developer proficient in Next.js and Framer, known for bringing complex, multi-page websites to life with creativity and precision. Let's team up and create something amazing together!"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
