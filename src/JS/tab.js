// TabNav.js
import React from 'react';
import { Nav } from 'react-bootstrap';

function TabNav({ handleCategoryClick }) {
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link eventKey="izakaya" onClick={() => handleCategoryClick("izakaya")} 
        className='noto-sans-kr-pubfont'
        >이자카야 🍶</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="tradDrinks" onClick={() => handleCategoryClick("tradDrinks")} 
        className='noto-sans-kr-pubfont'
       >막걸리&맥주 🌾</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="foodtruck" onClick={() => handleCategoryClick("foodtruck")} 
        className='noto-sans-kr-pubfont'
       >포장마차 🥡</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabNav;
