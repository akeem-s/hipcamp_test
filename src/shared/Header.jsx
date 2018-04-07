import React from 'react';
import Logo from '../assets/hipcampNewLogo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerLogoContainer'>
        <img src={Logo} className='headerLogo' alt='hipcampLogo'></img>
      </div>
    </div>
  );
};

export default Header;
