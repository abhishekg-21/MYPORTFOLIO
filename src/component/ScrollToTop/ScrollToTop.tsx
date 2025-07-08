import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline"; // Example icon

interface ScrollToTopProps {
  threshold?: number; // Scroll position to show button
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ threshold = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-accent-500 text-white p-3 rounded-full shadow-lg
                     hover:bg-accent-600 transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop; // <-- ADDED EXPORT
