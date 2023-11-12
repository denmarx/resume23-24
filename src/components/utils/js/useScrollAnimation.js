import { useState, useEffect } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const halfViewportHeight = viewportHeight / 2;
      const fullHeight = document.body.scrollHeight;
      const fromTop = window.scrollY;

      const isAtBottom = fromTop + viewportHeight >= fullHeight;
      const isPastHalf = fromTop > halfViewportHeight;

      if (isAtBottom || !isPastHalf) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible;
};

export default useScrollAnimation;
