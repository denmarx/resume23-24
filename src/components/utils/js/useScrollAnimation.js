import { useState, useEffect } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const tenthOfViewportHeight = viewportHeight / 10;
      const fullHeight = document.body.scrollHeight;
      const fromTop = window.scrollY;

      const isAtBottom = fromTop + viewportHeight >= fullHeight;
      const isPastHalf = fromTop > tenthOfViewportHeight;

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
