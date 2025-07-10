import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline"; // New: define button styles
  size?: "sm" | "md" | "lg"; // New: define button sizes
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary", // Default variant
  size = "md", // Default size
}) => {
  // Base styles
  let baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variant styles
  if (variant === "primary") {
    baseStyles +=
      " bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500";
  } else if (variant === "secondary") {
    baseStyles +=
      " bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500";
  } else if (variant === "outline") {
    baseStyles +=
      " border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white focus:ring-accent-500";
  }

  // Size styles
  if (size === "sm") {
    baseStyles += " px-4 py-2 text-sm";
  } else if (size === "md") {
    baseStyles += " px-6 py-3 text-base";
  } else if (size === "lg") {
    baseStyles += " px-8 py-4 text-lg";
  }

  // Disabled styles
  if (disabled) {
    baseStyles += " opacity-50 cursor-not-allowed";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`} // Combine base styles with any additional passed classes
    >
      {children}
    </button>
  );
};

export default Button;
