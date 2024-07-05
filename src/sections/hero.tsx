"use client"
import HotKeys from "@/components/hot-keys";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <h2 className="text-[20px] font-medium leading-snug sm:text-[28px]">
              Designing websites for 2+ years.
            </h2>
            <h2 className="text-[20px] font-medium leading-snug text-[#8A8A8A] sm:text-[26px]">
              Empowering Success for Businesses Worldwide.
            </h2>
          </div>
          <p className="text-foreground/80">
            I am Joseph Akinlade, a web developer focusing on
            website creation and web animations. I have a strong passion for
            designing digital solutions that engage users, with expertise in
            user-centric design and strategic optimization. My goal is to
            continuously learn and evolve, aiming to become a valued
            collaborator in the online business landscape.
          </p>
        </div>

        <div>
          <Button className="visible md:hidden">Get Started</Button>
          <div className="hidden md:block">
            <HotKeys keyName="s">
              Press{" "}
              <span className="cursor-pointer rounded border border-border bg-neutral-200 px-1.5 py-0.5 text-foreground dark:bg-neutral-800">
                S
              </span>{" "}
              to send an email anytime
            </HotKeys>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
