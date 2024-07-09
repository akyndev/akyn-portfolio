import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import Wrebble from "/public/images/wrebble.png";

interface ServiceDialogProps {
  title: string;
  icon: React.ReactNode;
}

export function ServiceDialog({ title, icon }: ServiceDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-max w-max rounded px-1 py-0">
          <Plus className="mr-2 h-4 w-4" /> More
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 p-1 py-2 sm:max-w-[640px]">
        <ScrollArea className="h-[32rem]">
          <div className="p-4">
            <div className="space-y-6">
              {icon}
              <h2 className="text-[20px] font-medium capitalize">{title}</h2>
              <p>
                With my expertise as a skilled Framer Expert and Top Creator, I
                have successfully brought complex, multi-page websites to life.
                Let&apos;s work together to create something amazing!{" "}
              </p>
            </div>
            <Separator className="my-4" />
            <h3>Some of related work: </h3>
            <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-h-3 aspect-w-4 my-1 w-full overflow-hidden rounded-md bg-white/60"
                >
                  <Image src={Wrebble} alt="port" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
        {/* <DialogFooter>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
