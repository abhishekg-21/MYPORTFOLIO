/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables dark mode based on the 'dark' class on the HTML or body tag
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // A clean, modern sans-serif font
        heading: ["Poppins", "sans-serif"], // A slightly bolder or more decorative font for headings
      },
      colors: {
        // Define your custom color palette
        // Light Mode Palette
        "light-bg": "#F9FAFB", // Very light gray background
        "light-text": "#1F2937", // Dark gray text
        "light-card": "#FFFFFF", // Pure white card background
        "light-border": "#E5E7EB", // Light gray border

        // Dark Mode Palette
        "dark-bg": "#0F172A", // Very dark blue-gray background (slate-900 equivalent)
        "dark-text": "#E2E8F0", // Light blue-gray text (slate-200 equivalent)
        "dark-card": "#1E293B", // Slightly lighter dark blue-gray for cards (slate-800 equivalent)
        "dark-border": "#334155", // Darker gray for borders (slate-700 equivalent)

        // Accent Color (used in both themes) - use a vibrant color that stands out
        accent: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1", // Your primary accent color
          600: "#4F46E5", // Darker shade for hover/active states
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          950: "#1E1B4B",
        },
        // You can add more specific colors if needed, e.g., for success, danger, warning
        success: "#10B981", // Green for success
        danger: "#EF4444", // Red for danger
      },
      // Keep your animation keyframes here
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.7s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
