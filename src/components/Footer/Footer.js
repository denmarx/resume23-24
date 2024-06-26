import styles from './Footer.module.css';
import stylesAnimation from '../utils/animations/animations.module.css';
import useScrollAnimation from '../utils/js/useScrollAnimation';

const Footer = () => {
  const isVisible = useScrollAnimation();

  return (
    <div className={`${styles.info} ${!isVisible ? stylesAnimation.hide : ''}`}>
      <div className={`${styles.infoLeft} ${stylesAnimation.infoLeft}`}>
        <div className={styles.infoContact}>
          <ul className={styles.occupation}>
            <li>Dennis Marx</li>
            <li>Web Developer</li>
          </ul>
          <ul className={styles.location}>
            <li>Vancouver, Canada</li>
            <li>
              <strong>dennis.marx93@gmail.com</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.infoRight} ${stylesAnimation.infoRight}`}>
        <nav className={styles.social}>
          <ul>
            <li>
              <a href='https://github.com/denmarx' target='_blank' rel='noopener noreferrer'>
                <span>01</span>
                <strong>GitHub</strong>
              </a>
            </li>
            <li>
              <a href='https://www.researchgate.net/profile/Dennis-Marx' target='_blank' rel='noopener noreferrer'>
                <span>02</span>
                <strong>ResearchGate</strong>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/dennis-marx-5b479b2a8' target='_blank' rel='noopener noreferrer'>
                <span>03</span>
                <strong>LinkedIn</strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
