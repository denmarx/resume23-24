import { useState, useEffect, useRef, useCallback } from 'react';

const useTitleScrollAnimation = () => {
  const [transformValue, setTransformValue] = useState(0);
  const requestRef = useRef();

  const easeOutCubic = (x) => {
    return 1 - Math.pow(1 - x, 3);
  };

  // animate is re-triggered only when transform value changes
  const animate = useCallback(() => {
    // current vertical scroll position
    const currentScrollY = window.scrollY;
    // scroll threshold
    const maxScroll = 100;
    // scroll smoothing factor
    const scalingFactor = 0.5;
    // returns smoothed scroll position but not exceeding maxscroll
    const scrollAmount = Math.min(currentScrollY * scalingFactor, maxScroll);
    // creates slowing effect of animation
    const newValue = transformValue + (scrollAmount - transformValue) * easeOutCubic(0.05);

    // Check if scroll is at the top and set transformValue to 0
    if (currentScrollY === 0) {
      setTransformValue(0);
      return;
    }

    // updates transform value
    setTransformValue(newValue);

    // if animation is not near max scroll, keep going
    if (Math.abs(newValue - transformValue) > 1) {
      requestRef.current = requestAnimationFrame(animate);
      // else set final position of animation directly to scroll position
    } else {
      setTransformValue(scrollAmount);
    }
  }, [transformValue]);

  useEffect(() => {
    const handleScroll = () => {
      // if first scroll done, cancel animation for this scroll event
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      // triggers animate
      requestRef.current = requestAnimationFrame(animate);
    };
    // Listens to scroll event
    window.addEventListener('scroll', handleScroll);

    return () => {
      // clears off handleScroll from window
      window.removeEventListener('scroll', handleScroll);
      // cancels ongoing animation
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]); // animate is now a stable function
  return transformValue;
};

export default useTitleScrollAnimation;
