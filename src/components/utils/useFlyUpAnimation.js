import { useEffect, useRef } from 'react';
import animations from '../Menu/animations.module.css';

const useFlyUpAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add(animations.flyUpAnimation);
    }
  }, []);

  return ref;
};

export default useFlyUpAnimation;
