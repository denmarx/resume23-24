import styles from './Menu.module.css';
import MenuUtils from '../utils/js/MenuUtils';
import TopMenu from './TopMenu';
import Nav from './Nav';

const Menu = () => {
  const { isTopMenuVisible, toggleTopMenu } = MenuUtils();
  return (
    <div className={styles.menuWrap}>
      <Nav toggleTopMenu={toggleTopMenu} />
      {isTopMenuVisible && <TopMenu toggleTopMenu={toggleTopMenu} />}
    </div>
  );
};

export default Menu;
