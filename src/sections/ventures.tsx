import SectionHeader from "@/components/section-header";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconTableColumn
} from "@tabler/icons-react";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import WrebblePort from "/public/images/wrebble-port.png";
const Ventures = () => {
  return (
    <div id="ventures">
      <SectionHeader
        label="ventures"
        description="Projects I'm currently working on."
      >
        <Lightbulb strokeWidth={1} />
      </SectionHeader>

      <div className="container pt-8">
        <BentoGrid className="">
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
          />
        </BentoGrid>
      </div>
    </div>
  );
};

export default Ventures;

const Skeleton = () => (
  <div className="aspect-h-6 aspect-w-16 flex flex-1 overflow-hidden rounded-xl border-border bg-card text-card-foreground">
    <Image
      src={WrebblePort}
      alt="my work"
      sizes="100%"
      width={1024}
      height={800}
      className="h-full w-full object-cover object-center"
    />
  </div>
);
const item = {
  title: "The Power of Communication",
  description: "Understand the impact of effective communication in our lives.",
  header: <Skeleton />,
  icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
};
