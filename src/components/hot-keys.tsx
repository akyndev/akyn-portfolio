"use client";
import Hotkeys from "react-hot-keys";

const HotKeys = ({
  children,
  keyName,
}: {
  children: React.ReactNode;
  keyName: string;
}) => {
  return (
    <Hotkeys
      keyName={keyName}
      onKeyUp={() => {
        alert("pressed");
      }}
    >
      {children}
    </Hotkeys>
  );
};

export default HotKeys;
