"use client";
import { GetStartForm } from "@/components/get-started-form";
import HotKeys from "@/components/hot-keys";

const Hero = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <h2 className="text-[20px] font-medium leading-snug sm:text-[28px]">
              Creating stuff that works for 5+ years
            </h2>
            <h2 className="text-[20px] font-medium leading-snug text-[#8A8A8A] sm:text-[26px]">
              Empowering Growth for Businesses Worldwide.
            </h2>
          </div>
          <p className="text-foreground/80">
            I am John Doe, a web developer specializing in website creation and
            web animations. I am passionate about designing engaging digital
            solutions, with expertise in user-centric design and strategic
            optimization. My goal is to continuously learn and evolve, striving
            to become a valued collaborator in the online business landscape.
          </p>
        </div>

        <div>
          <div className="visible md:hidden">
            <GetStartForm />
          </div>
          <div className="hidden md:block">
            <HotKeys keyName="s" link="mailto:example@gmail.com">
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
