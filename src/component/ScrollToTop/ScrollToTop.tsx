import React, { useState, useEffect, useCallback } from "react"; // Import useCallback
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Use useCallback to memoize toggleVisibility
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []); // No dependencies for toggleVisibility as it only uses stable window and setIsVisible

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]); // <--- FIX: Added toggleVisibility to the dependency array

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-accent-500 text-white shadow-lg
                  transition-opacity duration-300 z-40
                  ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTop;
