import styles from './Footer.module.css';
import stylesAnimation from '../utils/animations/animations.module.css';
import useScrollAnimation from '../utils/js/useScrollAnimation';

const Footer = () => {
  const isVisible = useScrollAnimation();

  return (
    <div className={`${styles.info} ${!isVisible ? stylesAnimation.hide : ''}`}>
      <div className={`${styles.infoLeft} ${stylesAnimation.infoLeft}`}>
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
      <div className={`${styles.infoRight} ${stylesAnimation.infoRight}`}>
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
