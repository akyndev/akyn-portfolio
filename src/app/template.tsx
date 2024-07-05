"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return <motion.div>{children}</motion.div>;
};

export default Template;
