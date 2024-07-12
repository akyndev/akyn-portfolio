"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useInnerWidth } from "@/lib/hooks/use-inner-width";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import {
  FileText,
  Folders,
  Heart,
  House,
  Layers,
  Lightbulb,
  Moon,
  Sun,
  WalletCards,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

const navIcons = [
  {
    icon: <House strokeWidth={2} size={20} />,
    label: "Home",
    link: "#",
  },
  {
    icon: <Lightbulb strokeWidth={2} size={20} />,
    label: "Ventures",
    link: "#ventures",
  },

  {
    icon: <WalletCards strokeWidth={2} size={20} />,
    label: "Services",
    link: "#services",
  },
  {
    icon: <Folders strokeWidth={2} size={20} />,
    label: "Projects",
    link: "#popular-projects",
  },

  {
    icon: <Heart strokeWidth={2} size={20} />,
    label: "Testimonial",
    link: "#testimonials",
  },
  {
    icon: <Layers strokeWidth={2} size={20} />,
    label: "Stack",
    link: "#tech-stack",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const { x } = useInnerWidth() as { x: number };
  const [open, setOpen] = useState(false);
  const bottom = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 0.018],
    // Into these values:
    [-46, 18],
    { ease: cubicBezier(0.32, 0, 0.67, 0) },
  );
  const opacity = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 0.018],
    // Into these values:
    [0, 1],
    { ease: cubicBezier(0.16, 1, 0.3, 1) },
  );

  return (
    <>
      <motion.div
        style={{
          bottom: x < 640 ? 18 : bottom,
          opacity: x < 640 ? 1 : opacity,
        }}
        className="fixed inset-x-0"
      >
        <div className="flex items-center justify-center gap-1.5 sm:scale-100 sm:gap-3">
          <div
            className="rounded-lg border border-border bg-nav/70 shadow-lg blur-[.2px] backdrop-blur-2xl"
            onClick={() => {
              if (theme === "dark") setTheme("light");
              else setTheme("dark");
            }}
          >
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer p-3 opacity-50">
                    {theme !== "light" ? (
                      <Sun strokeWidth={2} size={20} />
                    ) : (
                      <Moon strokeWidth={2} size={20} />
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Change theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center rounded-lg border border-border bg-nav/70 shadow-lg blur-[.2px] backdrop-blur-2xl">
            {navIcons.map((nav) => (
              <TooltipProvider key={nav.link} delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={nav.link}
                      className="cursor-pointer p-3 opacity-50"
                    >
                      {nav.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{nav.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>

          <div
            onClick={() => setOpen(true)}
            className="rounded-lg border border-border bg-nav/70 shadow-lg blur-[.2px] backdrop-blur-2xl"
          >
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={"https://github.com"}>
                    <div className="p-3 opacity-50">
                      <FileText strokeWidth={2} size={20} />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Fork</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
