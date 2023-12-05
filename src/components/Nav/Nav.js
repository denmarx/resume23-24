import styles from './Nav.module.css';
import shot from '../../assets/shot _small.webp';

const Nav = () => {
  return (
    <header className={styles.styledHeader}>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>{<img src={shot} alt='profile-pic-small'></img>}</div>
        <div className={styles.navbar}>
          <ol>
            <li>
              <a href='#aboutSection'>About</a>
            </li>
            <li>
              <a href='#jobs'>Experience</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
