import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-light-card dark:bg-dark-card rounded-xl shadow-lg p-6 lg:p-8 border border-light-border dark:border-dark-border transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
