import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/menu.css'; // CSS 파일 import

const MenuContainer = () => {
  return (
    <div className='menu-container'>
      <div className="menu-link">
        <Link to="/About">About</Link>
        <Link to="/write">WriteBoard</Link>
        <Link to="/map">Map</Link>
      </div>
    </div>
  );
}

export default MenuContainer;
