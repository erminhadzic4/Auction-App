import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="black-header">
        <div className="social-icons">
          <FaInstagram className="social-icon"/>
          <FaGithub className="social-icon"/>
          <FaLinkedin className="social-icon"/>
        </div>
        <div className="user-actions">
          <span className="user-action"> Login</span>
          <span className="user-action-secondary"> or </span>
          <span className="user-action"> Create Account </span>
        </div>
      </div>


      <div className="navigation-bar">
        <div className="logo-container">
            <img
                src="auctionCover.png"
                alt="Cover"
                className="logo"
            />
        </div>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
          />
        </div>
        <div className="navigation-links">
          <span className="navigation-link" style={{color: "#8367D8", fontWeight: 'bold'}}>HOME</span>
          <span className="navigation-link">SHOP</span>
          <span className="navigation-link">MY ACCOUNT</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
