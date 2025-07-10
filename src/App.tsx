import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext"; // Import useTheme to apply theme classes to HTML body

// Import Layout Components
import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";

// Import Page Components
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";

<<<<<<< HEAD
// Component to apply theme classes to the body based on context
=======
// Import global styles (if you have them)
import "./App.css"; // Keep if you have global app-wide CSS
import "./index.css"; // Keep if this is your main Tailwind CSS import
// ... (imports remain the same as your last provided App.tsx)

>>>>>>> 2786866 (Descriptive message about your changes)
const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useTheme();

  React.useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <ThemeWrapper>
          {/* Main App Container: Full height, responsive padding, consistent theme */}
          <div className="flex flex-col min-h-screen font-sans bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-300">
            {/* Navbar is displayed on all pages */}
            <Navbar />

            {/* Main content area: Responsive padding, max width for readability */}
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route
                  path="/certifications"
                  element={<CertificationsPage />}
                />
                <Route path="/contact" element={<ContactPage />} />
                {/* Optional: Add a 404 Not Found page */}
                {/* <Route path="*" element={<NotFoundPage />} /> */}
              </Routes>
            </main>

            {/* Footer is displayed on all pages */}
            <Footer />
          </div>
        </ThemeWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
