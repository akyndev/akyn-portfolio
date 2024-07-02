import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "lucide-react"
import Image from "next/image"
import React from "react"
import { PiHandWavingLight } from "react-icons/pi";

const CTA = () => {
  return (
    <div className="container">
      <Card className="p-6 overflow-hidden sm:relative bg-card group space-y-8">
        <CardContent className="p-0">
          <div className="">
            <div className="flex flex-col justify-between flex-1 gap-3">
              <PiHandWavingLight strokeWidth={1}  size={24}/>
              <h2 className="text-2xl text-foreground font-medium leading-tight pt-2">Let work together?</h2>
              <p>
                Now that you&apos;ve come this far, let&apos;s work <br /> together on your next website?
              </p>
            </div>
            <div className="pt-3">
              <Button>Get In Touch</Button>
            </div>
          </div>
        </CardContent>
        <div className=" border-border border sm:absolute -right-16 -bottom-16 h-full w-54 overflow-hidden rounded-lg group-hover:-right-12 group-hover:-bottom-12 transition-all duration-500 ease-in-out">
          <Image
            src={"https://framerusercontent.com/images/9wKpHKP6GEyr175Kqt41hBKKY.jpg?scale-down-to=1024"}
            alt="my work"
            sizes="100%"
            width={1024}
            height={800}
            className="w-full object-cover object-center h-full"
          />
        </div>
      </Card>
    </div>
  )
}

export default CTA
