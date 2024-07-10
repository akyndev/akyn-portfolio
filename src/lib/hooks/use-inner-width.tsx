"use client";
import { useEffect, useState } from "react";

export const useInnerWidth = () => {
  const width = typeof window !== "undefined" && window.innerWidth;
  const [x, setX] = useState(width);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onResize() {
    setX(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [width, onResize]);

  return {
    x,
  };
};
