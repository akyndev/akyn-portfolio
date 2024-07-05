"use client";
import SectionHeader from "@/components/section-header";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Akyn from "/public/images/akyn.png";
import Wrebble from "/public/images/wrebble.png";

const popularProjects = [
  {
    name: "Wrebble",
    description: "Website for web development agency",
    link: "https://wrebble.com",
    image: Wrebble,
  },
  {
    name: "Portfolio",
    description: "Porfolio website for developers and designers",
    link: "https://akyn.dev",
    image: Akyn,
  },
];

const PopularProducts = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div id="popular-projects">
      <SectionHeader
        label="My popular projects"
        description="Some of my most stared products in our community."
      >
        <WalletCards strokeWidth={1} />
      </SectionHeader>

      <div className="container">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ loop: true }}
        >
          <CarouselContent className="">
            {popularProjects.map((project, index) => (
              <CarouselItem key={index} className="">
                <CardContainer className="">
                  <CardBody className="group/card relative h-auto w-auto rounded-xl border border-border bg-card p-6 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
                    <CardItem
                      translateZ="50"
                      className="bg-card text-xl font-medium text-card-foreground"
                    >
                      {project.name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="mt-4 w-full">
                      <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="mt-20 flex items-center justify-between">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.link}
                        target="__blank"
                        className="rounded-xl px-4 py-2 text-xs font-normal capitalize text-foreground"
                      >
                        visit website →
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularProducts;
