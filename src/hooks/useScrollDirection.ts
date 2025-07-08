import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down" | "none";

export const useScrollDirection = (): ScrollDirection => {
  // <-- ADDED EXPORT
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("none");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY && currentScrollY > 0) {
        // Scrolling up
        setScrollDirection("up");
      } else if (currentScrollY <= 0) {
        // At the very top
        setScrollDirection("none");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Depend on lastScrollY to re-run effect logic

  return scrollDirection;
};
