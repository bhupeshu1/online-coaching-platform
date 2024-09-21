import React, { ReactNode } from "react";

interface TextComponentsProps {
  label: string;
  size?: "small" | "medium" | "large"; // Optional size prop
  children?: ReactNode;
}

const TextComponents: React.FC<TextComponentsProps> = ({ label, size = "medium", children }) => {
  // Define the Tailwind classes based on the size prop
  const textSizeClass = {
    small: "text-[32px] leading-[32px]",
    medium: "text-[48px] leading-[48px]",
    large: "text-[64px] leading-[64px]",
  }[size]; // Use the size prop to select the appropriate class

  return (
    <h1 className={`font-sans font-normal my-6 text-center p-2 text-[#232323] ${textSizeClass}`}>
      {label}
      {children}
    </h1>
  );
};

export default TextComponents;
