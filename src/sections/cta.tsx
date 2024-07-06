"use client";
import { GetStartForm } from "@/components/get-started-form";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PiHandWavingLight } from "react-icons/pi";
import Akyn from "/public/images/wrebble.png";

const CTA = () => {
  return (
    <div className="container">
      <Card className="group space-y-8 overflow-hidden bg-card p-6 sm:relative">
        <CardContent className="p-0">
          <div className="">
            <div className="flex flex-1 flex-col justify-between gap-3">
              <PiHandWavingLight strokeWidth={1} size={24} />
              <h2 className="pt-2 text-2xl font-medium leading-tight text-foreground">
                Let work together?
              </h2>
              <p>
                Now that you&apos;ve come this far, let&apos;s work <br />{" "}
                together on your next website?
              </p>
            </div>
            <div className="pt-3">
              <span className="mr-3">
                <GetStartForm />
              </span>
              Or press{" "}
              <span className="cursor-pointer rounded border border-border bg-neutral-200 px-1.5 py-0.5 text-foreground dark:bg-neutral-800">
                S
              </span>
            </div>
          </div>
        </CardContent>
        <div className="w-54 -bottom-16 -right-16 h-full overflow-hidden rounded-lg border border-border transition-all duration-500 ease-in-out group-hover:-bottom-12 group-hover:-right-12 sm:absolute">
          <Image
            src={Akyn}
            alt="my work"
            sizes="100%"
            width={1024}
            height={800}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </Card>
    </div>
  );
};

export default CTA;
