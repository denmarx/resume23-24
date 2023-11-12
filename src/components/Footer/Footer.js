import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.info} ${!isVisible ? styles.hide : ''}`}>
      <div className={styles.infoLeft}>
        <div className={styles.infoContact}>
          <ul>
            <li>Dennis Marx</li>
            <li>Web Developer</li>
          </ul>
          <ul>
            <li>Bremen, Germany</li>
            <li>info@email.com</li>
          </ul>
        </div>
      </div>
      <div className={styles.infoRight}>
        <nav className={styles.social}>
          <ul>
            <li>
              <a href='/' target='_blanks' rel='noopener'>
                <span>01</span>
                <strong>instagram</strong>
              </a>
            </li>
            <li>
              <a href='/' target='_blanks' rel='noopener'>
                <span>02</span>
                <strong>twitter</strong>
              </a>
            </li>
            <li>
              <a href='/' target='_blanks' rel='noopener'>
                <span>03</span>
                <strong>linkedin</strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
