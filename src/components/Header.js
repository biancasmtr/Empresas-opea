import React from 'react';
import '../styles/Header.scss'; 
import icon from '../images/icon-profile.svg'

const Header = ({ userName }) => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src="../../logo.svg" alt="Logo" />
      </div>
      <div className="user-info">
        <span>{userName}</span>
        <img src={icon} alt="icon list" />
      </div>
    </header>
  );
};

export default Header;