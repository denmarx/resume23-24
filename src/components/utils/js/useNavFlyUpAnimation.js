import { useEffect, useRef } from 'react';
import animations from '../animations/animations.module.css';

const useNavFlyUpAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add(animations.navFlyUpAnimation);
    }
  }, []);

  return ref;
};

export default useNavFlyUpAnimation;
