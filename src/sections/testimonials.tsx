"use client";
import SectionHeader from "@/components/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Heart, Star } from "lucide-react";
import React from "react";

const testimonials = [
  {
    image:
      "https://pbs.twimg.com/profile_images/1765530182557810688/1ULu-32X_400x400.jpg",
    name: "Pwecious",
    title: "Designer",
    testimonial:
      "My experience with the Akyn's Template has been truly exceptional. This template has not only elevated the visual appeal of my portfolio but also streamlined the way I showcase my work online.",
    rating: 5,
    fallback: "PW",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1507087868757483534/ayHdm8f9_400x400.jpg",
    name: "Joshua Akinlade",
    title: "Photographer",
    testimonial:
      "Akyn has transformed my photography portfolio. It's now a sleek design making my work presentation effortless. It strikes a perfect balance between elegance and functionality, elevating my photography to new heights.",
    rating: 5,
    fallback: "JA",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1771588720317059072/s_lORNLt_400x400.jpg",
    name: "ClintonGuy",
    title: "UI & UX Designer",
    testimonial:
      "I've had the pleasure of working with Akyn on a recent web development project. Akyn's proficiency is top notch and was instrumental in bringing  visions to life.",
    rating: 5,
    fallback: "CC",
  },
];

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  // const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div id="testimonials">
      <SectionHeader
        label="Happy clients"
        description="Glowing client testimonials from my work."
      >
        <Heart strokeWidth={1} />
      </SectionHeader>

      <div className="container pt-8">
        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((client, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-start gap-3">
                        <Avatar>
                          <AvatarImage src={client.image} alt="@shadcn" />
                          <AvatarFallback>{client.fallback}</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col justify-center overflow-hidden">
                          <h2 className="font-medium capitalize leading-5">
                            {client.name}
                          </h2>
                          <p className="text-xs text-[#7D7D7D] sm:text-sm">
                            {client.title}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-6">
                      <p className="sm:text-lg">{client.testimonial}</p>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: client.rating }).map(
                          (_, index) => (
                            <Star key={index} fill="white" size={14} />
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-4">
              {testimonials.map((client, index) => (
                <div
                  key={index}
                  className={cn(
                    "scale-100 opacity-50 transition-all duration-300 ease-in-out",
                    current === index + 1 && "scale-125 opacity-100",
                  )}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={client.image} alt="@shadcn" />
                    <AvatarFallback>{client.fallback}</AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>

            <div className="flex w-max items-center justify-center gap-3">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("h-8 w-8 rounded-full", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CustomCarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("h-8 w-8 rounded-full", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CustomCarouselNext";
