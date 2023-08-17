import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("HOME");
  const { isAuth } = useAuth();

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

  const specialRoutes = [
    "/my-account",
    "/about-us",
    "/terms-and-conditions",
    "/privacy-and-policy",
    "/home",
    "/shop",
  ];

  const isSpecialRoute = specialRoutes.includes(location.pathname);

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
          <Link
            to="https://www.instagram.com/ha.ermin/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={25} />
          </Link>
          <Link
            to="https://www.github.com/erminhadzic4"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={25} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ermin-had%C5%BEi%C4%87-0a939b228/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={25} />
          </Link>
        </div>
        <div className="user-actions">{greeting}</div>
      </div>

      <div className="navigation-bar">{headerContent}</div>
    </div>
  );
};

export default Header;
