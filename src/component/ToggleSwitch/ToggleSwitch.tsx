import React from "react";

// Define the props interface for the ToggleSwitch component
interface ToggleSwitchProps {
  isActive: boolean; // Determines if the switch is in the 'on' (dark) state
  onToggle: () => void; // Function to call when the switch is toggled
  className?: string; // Optional: for adding extra Tailwind classes from parent
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isActive,
  onToggle,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      // Combine base classes with any additional classes passed via props
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full
        transition-colors duration-300 ease-in-out
        ${isActive ? "bg-accent-500" : "bg-gray-200 dark:bg-gray-700"}
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500
        ${className || ""}
      `}
      role="switch"
      aria-checked={isActive}
      aria-label="Toggle dark mode"
    >
      {/* Visually hidden span for accessibility (screen readers) */}
      <span className="sr-only">Toggle dark mode</span>

      {/* The movable circle/thumb of the switch */}
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white shadow-lg
          transition-transform duration-300 ease-in-out
          ${isActive ? "translate-x-6" : "translate-x-1"}
        `}
        aria-hidden="true" // Hide from screen readers as parent button is accessible
      />
    </button>
  );
};

export default ToggleSwitch;
