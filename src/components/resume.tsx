import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { RiGithubLine, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function Resume({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-11/12 p-4 sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle className="text-left capitalize">
            👋 Nice to see you here, I&apos;m Joseph Akinlade
          </DialogTitle>
          <DialogDescription className="px-4 text-left">
            I am Joseph Akinlade, a web developer focusing on website creation
            and web animations. I have a strong passion for designing digital
            solutions that engage users, with expertise in user-centric design
            and strategic optimization. My goal is to continuously learn and
            evolve, aiming to become a valued collaborator in the online
            business landscape.
          </DialogDescription>
        </DialogHeader>
        <ul className="space-y-4 sm:space-y-6">
          <li>
            <h2 className="pb-2 font-semibold capitalize">Follow me: </h2>
            <div className="flex items-center justify-start gap-3 px-4">
              <Link href={"https://www.instagram.com/akyndev/"}>
                <RiInstagramLine />
              </Link>
              <Link href={"https://github.com/akyndev"}>
                <RiGithubLine />
              </Link>
              <Link href={"https://x.com/akyndev"}>
                <RiTwitterXLine />
              </Link>
            </div>
          </li>

          <li>
            <h2 className="pb-2 font-semibold capitalize">My email: </h2>
            <div className="flex items-center justify-start gap-3 px-4 text-sm">
              <Link href={"https://www.instagram.com/akyndev/"}>
                Akinlade3880@gmail.com
              </Link>
            </div>
          </li>

          <li>
            <h2 className="pb-2 font-semibold capitalize">
              My work experience:{" "}
            </h2>
            <ul className="space-y-3 px-4 text-sm">
              <li className="flex items-center gap-4">
                <span className="text-muted-foreground">2024 - now</span>
                <h3>Fullstack developer at Wrebble</h3>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-muted-foreground">2024 - now</span>
                <h3>Web developer for Akyn templates</h3>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="pb-2 font-semibold capitalize">My recent blog: </h2>
            <ul className="space-y-3 px-4 text-sm">
              <li className="flex items-center gap-4">
                Making a new template with shadcn-ui
              </li>
              <li className="flex items-center gap-4">
                Why I use OKLCH color for my application 
              </li>
            </ul>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
