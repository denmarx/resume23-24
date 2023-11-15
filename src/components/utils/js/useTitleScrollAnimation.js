import { useState, useEffect, useRef, useCallback } from 'react';

const useTitleScrollAnimation = () => {
  const [transformValue, setTransformValue] = useState(0);
  const requestRef = useRef();

  const easeOutCubic = (x) => {
    return 1 - Math.pow(1 - x, 3);
  };

  const animate = useCallback(() => {
    const currentScrollY = window.scrollY;
    const maxScroll = 100;
    const scalingFactor = 0.5;
    const scrollAmount = Math.min(currentScrollY * scalingFactor, maxScroll);

    const newValue = transformValue + (scrollAmount - transformValue) * easeOutCubic(0.05);

    setTransformValue(newValue);

    if (Math.abs(newValue - transformValue) > 1) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setTransformValue(scrollAmount);
    }
  }, [transformValue]); // Add any other dependencies of animate here

  useEffect(() => {
    const handleScroll = () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]); // animate is now a stable function
  console.log(transformValue);
  return transformValue;
};

export default useTitleScrollAnimation;
