import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/home") {
      setActiveLink("HOME");
    } else if (pathname === "/shop") {
      setActiveLink("SHOP");
    } else if (pathname === "/my-account") {
      setActiveLink("MY ACCOUNT");
    }
  }, [location.pathname]);

  const handleNavigationClick = (link) => {
    setActiveLink(link);
  };

  const isSpecialRoute =
    location.pathname === "/my-account" ||
    location.pathname === "/about-us" ||
    location.pathname === "/terms-and-conditions" ||
    location.pathname === "/privacy-and-policy" ||
    location.pathname === "/home" ||
    location.pathname === "/shop";

  const headerContent = !isSpecialRoute ? (
    <div className="logo-container-special">
      <div className="logo-wrapper">
        <img src="auctionCover.png" alt="Cover" className="logo" />
      </div>
      <div className="horizontal-line"></div>
    </div>
  ) : (
    <>
      <div className="logo-container">
        <img src="auctionCover.png" alt="Cover" className="logo" />
      </div>
      <div className="search-bar-container">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="navigation-links">
        <Link
          to="/home"
          className={`navigation-link ${activeLink === "HOME" ? "active" : ""}`}
          onClick={() => handleNavigationClick("HOME")}
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className={`navigation-link ${activeLink === "SHOP" ? "active" : ""}`}
          onClick={() => handleNavigationClick("SHOP")}
        >
          SHOP
        </Link>
        {isAuth ? (
          <Link
            to="/my-account"
            className={`navigation-link ${
              activeLink === "MY ACCOUNT" ? "active" : ""
            }`}
            onClick={() => handleNavigationClick("MY ACCOUNT")}
          >
            MY ACCOUNT
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );

  const greeting = isAuth ? (
    <span className="user-action">
      {" "}
      Hi, {localStorage.getItem("firstname")} {localStorage.getItem("lastname")}
    </span>
  ) : (
    <>
      <span className="user-action">
        <Link to="/login">Login</Link>
      </span>
      <span className="user-action-secondary"> or </span>
      <span className="user-action">
        <Link to="/register">Create Account</Link>
      </span>
    </>
  );

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
            <FaInstagram size={25} />
          </a>
          <a
            href="https://www.github.com/erminhadzic4"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/ermin-had%C5%BEi%C4%87-0a939b228/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
        <div className="user-actions">{greeting}</div>
      </div>

      <div className="navigation-bar">{headerContent}</div>
    </div>
  );
};

export default Header;
