import React from 'react';
import './style.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
const HeaderComponent = () => {
  return (
    <div className='header-container'>
      {/* menu icon for mobile view */}
      <div className='hamburger-menu'>
        <MenuIcon fontSize='large'/>

      </div>

      {/* logo section */}
      <div className='logo-section'>
        <img
          className='header-logo'
          src='https://cdn-prod.mytutor.co.uk/shared-assets/mytutor-logo.svg'
        ></img>
      </div>
      {/* nav items */}
      <ul className='navbar-links'>
        <li>
          <a href='#find a tutor'>Find a tutor</a>
        </li>
        <li>
          <a href='#How it works'>How it works</a>
        </li>
        <li>
          <a href='#Prices'>Prices</a>
        </li>
        <li>
          <a href='#Resources'>Resources</a>
          {/* <KeyboardArrowDownIcon className='down-icon'/> */}
        </li>
        <li>
          <a href='For schools'>For schools</a>
        </li>
        <li>
          <a href='Become a tutor'>Become a tutor</a>
        </li>
      </ul>
      {/* button section */}
      <div className='header-right-section'>
        <p className='contact-number'>+44 (0) 203 773 6024</p>
        <div className='login-signup-btn'>
          <button className='login-button'>Log in</button>
          <button className='signup-button'>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
