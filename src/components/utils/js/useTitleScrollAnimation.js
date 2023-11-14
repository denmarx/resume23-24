import { useState, useEffect } from 'react';

const useTitleScrollAnimation = () => {
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollAmount = window.scrollY;
      let maxScroll = 250;

      setTransformValue(Math.min(scrollAmount, maxScroll));
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return transformValue;
};

export default useTitleScrollAnimation;
