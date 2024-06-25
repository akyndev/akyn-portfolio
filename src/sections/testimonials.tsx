"use client"
import SectionHeader from "@/components/section-header"
import { ArrowLeft, ArrowRight, Badge, Star } from "lucide-react"
import React from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    image: "https://avatars.githubusercontent.com/u/1834413?s=64&v=4",
    name: "Robin Malfait",
    title: "Designer, Develop, Footballer",
    testimonial:
      "The Flux Template is a revelation for my portfolio. Its sleek design and user-friendly interface make showcasing my projects a joy. It strikes the perfect balance between elegance and functionality, truly elevating my work to the next level.",
    rating: 5
  },
  {
    image: "https://avatars.githubusercontent.com/u/16038754?s=96&v=4",
    name: "David Luhr",
    title: "Designer, Develop, Footballer",
    testimonial:
      "The Flux Template is a revelation for my portfolio. Its sleek design and user-friendly interface make showcasing my projects a joy. It strikes the perfect balance between elegance and functionality, truly elevating my work to the next level.",
    rating: 5
  },
  {
    image: "https://avatars.githubusercontent.com/u/16060559?s=64&v=4",
    name: "Enzo Innocenzi",
    title: "Designer, Develop, Footballer",
    testimonial:
      "The Flux Template is a revelation for my portfolio. Its sleek design and user-friendly interface make showcasing my projects a joy. It strikes the perfect balance between elegance and functionality, truly elevating my work to the next level.",
    rating: 5
  },
  {
    image: "https://avatars.githubusercontent.com/u/485747?s=64&v=4",
    name: "Simon Vrachliotis",
    title: "Designer, Develop, Footballer",
    testimonial:
      "The Flux Template is a revelation for my portfolio. Its sleek design and user-friendly interface make showcasing my projects a joy. It strikes the perfect balance between elegance and functionality, truly elevating my work to the next level.",
    rating: 5
  }
]

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  // const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    // setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <SectionHeader label="Happy clients" description="Projects I'm currently working on">
        <Badge strokeWidth={1} />
      </SectionHeader>

      <div className="container pt-8">
        <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent>
            {testimonials.map((client, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-start gap-3">
                        <Avatar>
                          <AvatarImage src={client.image} alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col justify-center overflow-hidden">
                          <h2 className="leading-5 font-medium capitalize">{client.name}</h2>
                          <p className="text-[#7D7D7D] text-xs sm:text-sm">{client.title}</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-6">
                      <p className="sm:text-lg">{client.testimonial}</p>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: client.rating }).map((_, index) => (
                          <Star key={index} fill="white" size={14} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center  gap-4">
              {testimonials.map((client, index) => (
                <div key={index} className={cn("opacity-50 scale-100 transition-all duration-300 ease-in-out", current === index + 1 && "opacity-100 scale-125")}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={client.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>

            <div className="flex w-max gap-3 items-center justify-center">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("  h-8 w-8 rounded-full", className)}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    )
  }
)
CarouselPrevious.displayName = "CustomCarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(" h-8 w-8 rounded-full", className)}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    )
  }
)
CarouselNext.displayName = "CustomCarouselNext"
