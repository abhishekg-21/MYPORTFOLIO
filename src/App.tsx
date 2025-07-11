import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";

// Import Layout Components
import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";

// Import Page Components
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";

// Import global styles
import "./App.css";
import "./index.css";

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
          <div className="flex flex-col min-h-screen font-sans bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-300">
            <Navbar />

            {/* Main content area: Responsive padding, max width for readability */}
            {/* Ensure consistent padding and max-width for content across all pages */}
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route
                  path="/certifications"
                  element={<CertificationsPage />}
                />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>

            <Footer />
            <ScrollToTop />
          </div>
        </ThemeWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
