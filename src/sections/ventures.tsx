import SectionHeader from "@/components/section-header"
import { Badge } from "lucide-react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react"
import Image from "next/image"

const Ventures = () => {
  return (
    <div>
      <SectionHeader label="ventures" description="Projects I'm currently working on">
        <Badge strokeWidth={1} />
      </SectionHeader>

      <div className="container pt-8">
        <BentoGrid className="">
          <BentoGridItem title={item.title} description={item.description} header={item.header} icon={item.icon} />
        </BentoGrid>
      </div>
    </div>
  )
}

export default Ventures

const Skeleton = () => (
  <div className="flex flex-1 aspect-w-16 aspect-h-6 rounded-xl overflow-hidden  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
      src={"https://framerusercontent.com/images/9wKpHKP6GEyr175Kqt41hBKKY.jpg?scale-down-to=1024"}
      alt="my work"
      sizes="100%"
      width={1024}
      height={800}
      className="w-full object-cover object-center h-full"
    />
  </div>
)
const item = {
  title: "The Power of Communication",
  description: "Understand the impact of effective communication in our lives.",
  header: <Skeleton />,
  icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
}
