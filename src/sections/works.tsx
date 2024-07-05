"use client";
import SectionHeader from "@/components/section-header";
import useEmblaCarousel from "embla-carousel-react";
import { CloudCog } from "lucide-react";
import Image from "next/image";
import Akyn from "/public/images/akyn.png";
import New from "/public/images/home-port.jpg";
import WrebblePort from "/public/images/wrebble-port.png";
import Wrebble from "/public/images/wrebble.png";

const works = [
  {
    src: New,
    alt: "My work",
  },
  {
    src: WrebblePort,
    alt: "My work",
  },
  {
    src: Wrebble,
    alt: "My work",
  },
  {
    src: Akyn,
    alt: "My work",
  },
];

const Works = () => {
  // const { slides, options } = props
  const [emblaRef] = useEmblaCarousel({ startIndex: 1, loop: true });

  return (
    <div id="works" className="space-y-6">
      <SectionHeader
        label="Latest work"
        description="Some of the recent websites I've worked on."
      >
        <CloudCog strokeWidth={1} />
      </SectionHeader>

      <div className="embla m-auto w-full px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {works.map(({ src }, index) => (
              <div className="embla__slide min-w-0" key={index}>
                <div className="embla__slide__number aspect-h-3 aspect-w-4 overflow-hidden rounded-md border border-border">
                  <Image
                    src={src}
                    alt="my work"
                    sizes="100%"
                    width={1024}
                    height={800}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
