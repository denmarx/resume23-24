import { useEffect, useRef } from 'react';
import animations from '../animations/animations.module.css';

// old version
const useRevealOnScroll = () => {
  const elementsRef = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      const fromTop = window.scrollY;
      const viewportHeight = window.innerHeight;

      elementsRef.current.forEach((el) => {
        if (el && fromTop + viewportHeight > el.offsetTop) {
          el.style.animationDelay = `${el.dataset.delay}s`;
          el.classList.add(animations.revealOnScroll);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const addRef =
    (delay = 0) =>
    (el) => {
      if (el && !elementsRef.current.includes(el)) {
        el.dataset.delay = delay;
        elementsRef.current.push(el);
      }
    };

  return addRef;
};

export default useRevealOnScroll;
