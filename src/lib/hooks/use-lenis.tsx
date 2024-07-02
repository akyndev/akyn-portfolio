"use client"
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import type LenisType from "@studio-freight/lenis";

const useLenis = () => {
  const [lenisScroll, setLenisScroll] = useState<LenisType | null>(null);
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    setLenisScroll(lenisScroll);
  }, [lenisScroll]);
  return lenisScroll;
};

export default useLenis;
