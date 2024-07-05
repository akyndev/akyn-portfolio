"use client";
import { useRouter } from "next/navigation";
import Hotkeys from "react-hot-keys";

const HotKeys = ({
  children,
  keyName,
}: {
  children: React.ReactNode;
  keyName: string;
}) => {
  const router = useRouter();

  return (
    <Hotkeys
      keyName={keyName}
      onKeyUp={(key) => {
        if (key === "s") {
          router.push("mailto:akinlade3880@gmail.com");
        }
        if (key === "h") {
          router.push("/");
        }
      }}
    >
      {children}
    </Hotkeys>
  );
};

export default HotKeys;
