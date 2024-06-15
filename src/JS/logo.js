// Logo.js

import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/ALCOK.png'} alt="로고" className="logo" />
      </Link>
    </div>
  );
}

export default Logo;
