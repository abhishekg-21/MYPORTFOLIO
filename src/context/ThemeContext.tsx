import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

// Define the shape of the theme context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Create the context with a default undefined value
// This will be properly typed when consumed within the provider
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define props for the ThemeProvider
interface ThemeProviderProps {
  children: ReactNode; // ReactNode allows any valid React child (elements, strings, etc.)
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // State to hold the current theme
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Initialize theme from localStorage or default to 'light'
    if (typeof window !== "undefined") {
      // Check if window is defined (for SSR compatibility)
      const storedTheme = localStorage.getItem("theme");
      return storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : "light";
    }
    return "light"; // Default for server-side rendering or environments without window
  });

  // Effect to apply the theme class to the document's html element
  useEffect(() => {
    const root = window.document.documentElement; // Get the html element
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save the theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // Re-run effect whenever 'theme' state changes

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provide the theme and toggle function to children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily consume the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
