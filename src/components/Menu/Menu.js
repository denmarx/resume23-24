import React, { useState } from 'react';
import styles from './Menu.module.css';
import MenuUtils from '../utils/MenuUtils';
import TopMenu from './TopMenu';

const Menu = () => {
  const { isTopMenuVisible, toggleTopMenu } = MenuUtils();
  return (
    <div className={styles.menuWrap}>
      <button className={styles.menuButton} onClick={toggleTopMenu}>
        Menu
      </button>
      <a className={styles.contactMe} href='/'>
        Contact me
      </a>
      {isTopMenuVisible && <TopMenu toggleTopMenu={toggleTopMenu} />}
    </div>
  );
};

export default Menu;
