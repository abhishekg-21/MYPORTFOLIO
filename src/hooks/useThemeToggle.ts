import { useTheme } from "../context/ThemeContext";

export const useThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return toggleTheme;
};
