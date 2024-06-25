"use client"
import SectionHeader from "@/components/section-header"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Badge } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const PopularProducts = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
 
  return (
    <div>
      <SectionHeader label="My popular projects" description="Projects I'm currently working on">
        <Badge strokeWidth={1} />
      </SectionHeader>

      <div className="container">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="">
            {[1, 2, 3, 4].map((_, index) => (
              <CarouselItem key={index} className="">
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                      Make things float in air
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Hover over this card to unleash the power of CSS perspective
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="https://framerusercontent.com/images/3OdienqZZvCsPDnoz9TvTTV3yE.jpg?scale-down-to=1024"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Sign up
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
  )
}

export default PopularProducts
