import styles from './Nav.module.css';
import useNavFlyUpAnimation from '../utils/js/useNavFlyUpAnimation';

const Nav = ({ toggleTopMenu }) => {
  const buttonRef = useNavFlyUpAnimation();
  const contactRef = useNavFlyUpAnimation();
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
