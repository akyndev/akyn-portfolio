"use client";
import HotKeys from "@/components/hot-keys";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NotfoundPage = () => {
  return (
    <div className="relative h-screen w-full">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%", left: "50%", top: "50%" }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute rounded-lg border border-border text-white bg-black/30 w-max p-10 backdrop-blur-sm z-50"
      >
        <h2 className="text-lg">Sorry, this page doesn&apos;t exist :( </h2>
        <div>
          <div className="pt-3">
            <Link href={"/"}>
              <Button className="mr-3">Go Back Home</Button>
            </Link>
            <HotKeys keyName="h">
              Or press{" "}
              <span className="cursor-pointer rounded border border-border bg-neutral-200 px-1.5 py-0.5 text-foreground dark:bg-neutral-800">
                H
              </span>
            </HotKeys>
          </div>
        </div>
      </motion.div>
      <div className="relative h-full w-full bg-black/20">
        <Image
          src={
            "https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="bg"
          fill
          className="-z-10 object-cover"
        />
      </div>
    </div>
  );
};

export default NotfoundPage;
