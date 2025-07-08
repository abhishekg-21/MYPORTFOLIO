import React from "react";

interface IconProps {
  children: React.ReactNode; // This would typically be an SVG or an icon component from a library
  className?: string;
}

const Icon: React.FC<IconProps> = ({ children, className }) => {
  return <span className={`inline-block ${className}`}>{children}</span>;
};

export default Icon; // <-- ADDED EXPORT
