import styles from './Nav.module.css';
import useFlyUpAnimation from '../utils/js/useFlyUpAnimation';

const Nav = ({ toggleTopMenu }) => {
  const buttonRef = useFlyUpAnimation();
  const contactRef = useFlyUpAnimation();
  return (
    <nav>
      <button ref={buttonRef} className={styles.menuButton} onClick={toggleTopMenu}>
        Menu
      </button>
      <a ref={contactRef} className={styles.contactMe} href='/'>
        Contact me
      </a>
    </nav>
  );
};

export default Nav;