import React, { useState } from 'react';
import styles from './Nav.module.css';
import shot from '../../assets/shot _small.webp';

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
        <div className={styles.menu}>
          <div>
            <button className={styles.hamburgerButton} onClick={toggleSidebar}>
              <div className={styles.hambox}>
                <div className={styles.hamboxInner}></div>
              </div>
            </button>
            <aside
              aria-hidden={!isSidebarOpen}
              tabIndex={isSidebarOpen ? '0' : '-1'}
              className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}
            >
              <nav>
                <ol>
                  <li>
                    <a href='#aboutSection' onClick={toggleSidebar}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#jobs' onClick={toggleSidebar}>
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href='#projects' onClick={toggleSidebar}>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href='#contact' onClick={toggleSidebar}>
                      Contact
                    </a>
                  </li>
                </ol>
                <a href='/resume.pdf' onClick={toggleSidebar} className={styles.resumeLink}>
                  Resume
                </a>
              </nav>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
