// src/component/ToggleSwitch/ToggleSwitch.tsx
import React from "react";
import { useTheme } from "../../context/ThemeContext"; // Assuming this is where your theme context is

interface ToggleSwitchProps {
  className?: string; // To allow passing additional Tailwind classes
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 ${className}
        ${theme === "dark" ? "bg-accent-500" : "bg-gray-200 dark:bg-gray-700"}`}
      aria-pressed={theme === "dark"}
      aria-label="Toggle dark mode"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200
          ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
      ></span>
    </button>
  );
};

export default ToggleSwitch; // ENSURE this is a DEFAULT export
