import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("HOME");

  const handleNavigationClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className="black-header">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/ha.ermin/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.github.com/erminhadzic4"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ermin-had%C5%BEi%C4%87-0a939b228/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="user-actions">
          <span className="user-action">
            <Link to="/login">Login</Link>
          </span>
          <span className="user-action-secondary"> or </span>
          <span className="user-action">
            <Link to="/register">Create Account</Link>
          </span>
        </div>
      </div>

      <div className="navigation-bar">
        <div className="logo-container">
          <img src="auctionCover.png" alt="Cover" className="logo" />
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="navigation-links">
          <Link
            to="/"
            className={`navigation-link ${
              activeLink === "HOME" ? "active" : ""
            }`}
            onClick={() => handleNavigationClick("HOME")}
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className={`navigation-link ${
              activeLink === "SHOP" ? "active" : ""
            }`}
            onClick={() => handleNavigationClick("SHOP")}
          >
            SHOP
          </Link>
          <Link
            to="/my-account"
            className={`navigation-link ${
              activeLink === "MY ACCOUNT" ? "active" : ""
            }`}
            onClick={() => handleNavigationClick("MY ACCOUNT")}
          >
            MY ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
