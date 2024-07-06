"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";

let hotkeyActionExecuted = false;

const HotKeys = ({
  children,
  keyName,
  link,
}: {
  children: React.ReactNode;
  keyName: string;
  link: string;
}) => {
  const router = useRouter();

  const ref = useRef<HTMLAnchorElement | null>(null);

  useHotkeys(
    keyName,
    () => {
      if (ref.current) ref.current.click();
    },
    { keyup: true },
  );

  return (
    <a href={link} ref={ref}>
      {children}
    </a>
  );
};

export default HotKeys;
