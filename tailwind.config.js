/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure purge paths for production optimization
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Enable dark mode based on a class on the html or body element
  darkMode: "class", // 'media' or 'class'

  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default font for body text
        heading: ["Poppins", "sans-serif"], // Font for headings
      },
      // Custom color palette (adjust as per design preference)
      colors: {
        // Light mode colors
        "light-bg": "#F3F4F6", // Lighter gray for backgrounds
        "light-text": "#1F2937", // Dark gray for text
        "light-card": "#FFFFFF", // White for cards
        "light-border": "#E5E7EB", // Light gray for borders

        // Dark mode colors
        "dark-bg": "#111827", // Very dark blue-gray for backgrounds
        "dark-text": "#F9FAFB", // Off-white for text
        "dark-card": "#1F2937", // Darker gray for cards
        "dark-border": "#374151", // Dark gray for borders

        // Accent color (consistent across themes)
        "accent-500": "#3B82F6", // A vibrant blue (you can choose green, teal, etc.)
        "accent-600": "#2563EB", // Slightly darker accent for hover/active states
      },
      // You can extend other Tailwind properties like spacing, breakpoints etc.
    },
  },
  plugins: [], // This is where you would put Tailwind plugins, like @tailwindcss/forms, not PostCSS plugins
};
