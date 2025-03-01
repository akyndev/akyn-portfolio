import React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
  label: string;
  description: string;
}

const SectionHeader = ({
  children,
  label,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center gap-1">
        {children}
        <h2 className="text-[20px] font-medium capitalize">{label}</h2>
        <p className="text-sm text-foreground/80">{description}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
