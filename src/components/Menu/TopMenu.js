import React from 'react';
import styles from './TopMenu.module.css';

const TopMenu = ({ toggleTopMenu }) => {
  return (
    <div className={styles.topMenu}>
      <button className={styles.menuButton} onClick={toggleTopMenu}>
        Close
      </button>
      <div>Menu Item 1</div>
      <div>Menu Item 2</div>
      <div>Menu Item 3</div>
    </div>
  );
};

export default TopMenu;
