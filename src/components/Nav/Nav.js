import React, { useState } from 'react';
import styles from './Nav.module.css';
import shot from '../../assets/shot _small.webp';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    toggleSidebar();
  };

  return (
    <header className={styles.styledHeader}>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>{<img src={shot} alt='profile-pic-small'></img>}</div>
        <div className={styles.navbar}>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/clarity-engine">The Clarity Engine</Link></li>
            <li><button onClick={() => handleNavClick('aboutSection')}>About</button></li>
            <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
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
                    <Link to="/" onClick={toggleSidebar}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/clarity-engine" onClick={toggleSidebar}>
                      The Clarity Engine
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => handleNavClick('aboutSection')}>
                      About
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavClick('contact')}>
                      Contact
                    </button>
                  </li>
                </ol>
              </nav>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
