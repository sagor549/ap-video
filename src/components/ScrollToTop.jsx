import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Use a timeout if you have route transitions/animations
      setTimeout(() => {
        lenis.scrollTo(0, { immediate: true });
      }, 1400); // match delay if needed, or reduce
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
