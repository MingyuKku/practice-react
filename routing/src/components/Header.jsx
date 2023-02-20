import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header-wrap">
        <div className="header-left-wrap">
          <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
            <img 
              src="http://pngimg.com/uploads/apple_logo/apple_logo_PNG19695.png" 
              alt="애플" 
              style={{width: '50px'}}/>
          </Link>
          <ul>
            <li>
              <Link className='header-nav-item' to="/movie">영화</Link>
            </li>
            <li>
              <Link className='header-nav-item' to="/tv">TV 프로그램</Link>
            </li>
            <li>
              <Link className='header-nav-item' to="/person">인물</Link>
            </li>
          </ul>
        </div>
        <div className="header-right-wrap"></div>
      </div>
    </div>
  );
};

export default Header;