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

// Component to apply theme classes to the body based on context
const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useTheme();

  // useEffect to ensure the body class updates when theme changes
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
    // BrowserRouter wraps your entire application for routing
    <Router>
      {/* ThemeProvider makes the theme context available globally */}
      <ThemeProvider>
        {/* ThemeWrapper applies dark/light classes to the body */}
        <ThemeWrapper>
          <div className="flex flex-col min-h-screen font-sans bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-300">
            {/* Navbar is displayed on all pages */}
            <Navbar />

            {/* Main content area where pages will be rendered based on the route */}
            <main className="flex-grow">
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
