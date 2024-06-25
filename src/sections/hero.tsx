import { Button } from "@/components/ui/button"
import React from "react"

const Hero = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <h2 className="text-[20px] sm:text-[28px] leading-snug font-medium">Building Websites for 10+ Years.</h2>
            <h2 className="text-[20px] sm:text-[28px] leading-snug font-medium text-[#8A8A8A]">
              Enabling Success for Businesses Worldwide.
            </h2>
          </div>
          <p className="text-white/80">
            I am Aiden Wolfe, a Web Designer with over 10 years of experience crafting digital solutions that empower
            businesses globally. Specializing in user-centric design and strategic optimization. My commitment to
            excellence has earned me a reputation as a trusted partner in the online business community.
          </p>
        </div>

        <Button className="w-32">Get Started</Button>
      </div>
    </div>
  )
}

export default Hero
