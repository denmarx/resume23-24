import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  // State to manage the display of the menu
  const [isTopMenuVisible, setTopMenuVisible] = useState(false);

  // Function to toggle menu visibility
  const toggleTopMenu = () => {
    setTopMenuVisible(!isTopMenuVisible);
  };

  return (
    <div className={styles.menuWrap}>
      <button className={styles.menuButton} onClick={toggleTopMenu}>
        Menu
      </button>
      <a className={styles.contactMe} href='/'>
        Contact me
      </a>
      {isTopMenuVisible && (
        <div className={styles.topMenu}>
          <button className={styles.menuButton} onClick={toggleTopMenu}>
            Close
          </button>
          <div>Menu Item 1</div>
          <div>Menu Item 2</div>
          <div>Menu Item 3</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
