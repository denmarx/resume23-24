import { useState } from 'react';

const MenuUtils = () => {
  // State to manage the display of the menu
  const [isTopMenuVisible, setTopMenuVisible] = useState(false);

  // Function to toggle menu visibility
  const toggleTopMenu = () => {
    setTopMenuVisible(!isTopMenuVisible);
  };
  return {
    isTopMenuVisible,
    toggleTopMenu,
  };
};

export default MenuUtils;
