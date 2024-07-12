import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { LuDot  } from "react-icons/lu";
import { RiGithubLine, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mb-14" id="header">
      <div className="flex flex-nowrap items-center justify-between p-0">
        <div className="flex items-center justify-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/akyndev.png" alt="@akyndev" />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>

          <div className="flex flex-col justify-center overflow-hidden">
            <h2 className="font-medium leading-5">Akyn</h2>
            <p className="text-xs text-[#7D7D7D] sm:text-sm">
              Designer, Developer, Footballer
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="hidden items-center justify-center sm:flex">
            <LuDot  className="text-green-500" size={32} />
            <span className="text-sm text-foreground/80">
              Available for Work
            </span>
          </div>

          <Separator orientation="vertical" className="hidden h-5 sm:block" />

          <div className="flex items-center justify-center gap-3 text-lg">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
