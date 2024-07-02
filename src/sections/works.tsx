"use client";
import SectionHeader from "@/components/section-header";
import Slider from "@/components/slider";
import { BadgeCheck, CloudCog } from "lucide-react";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

const works = [
  {
    src: "https://framerusercontent.com/images/3OdienqZZvCsPDnoz9TvTTV3yE.jpg?scale-down-to=1024",
    alt: "My work",
  },
  {
    src: "https://framerusercontent.com/images/KxmdOXjJIpxAsHLJB5HJbiylni4.jpg?scale-down-to=1024",
    alt: "My work",
  },
  {
    src: "https://framerusercontent.com/images/3OdienqZZvCsPDnoz9TvTTV3yE.jpg?scale-down-to=1024",
    alt: "My work",
  },
  {
    src: "https://framerusercontent.com/images/9wKpHKP6GEyr175Kqt41hBKKY.jpg?scale-down-to=1024",
    alt: "My work",
  },
];

const Works = () => {
  // const { slides, options } = props
  const [emblaRef, ] = useEmblaCarousel({ startIndex: 1, loop: true });

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
                <div className="embla__slide__number aspect-h-3 aspect-w-4 overflow-hidden rounded-md border border-gray-800">
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
