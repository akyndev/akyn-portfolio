import { Copyright, Dot, Minus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { RiGithubLine, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0">
        <div className="flex-1 text-center text-sm sm:text-start">
          &copy; {new Date().getFullYear()} Akyn &ndash; Developed by Joseph
          Akinlade &#9787; Built with Nextjs
        </div>

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
  );
};

export default Footer;
