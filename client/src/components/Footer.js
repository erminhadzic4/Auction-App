import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className="footer">
      <div className="column">
        <div className="row">AUCTION</div>
        <div className="row">
          <Link to="/about-us" className="row" onClick={scrollToTop}>
            About Us
          </Link>
        </div>
        <div className="row">
          <Link
            to="/terms-and-conditions"
            className="row"
            onClick={scrollToTop}
          >
            Terms and Conditions
          </Link>
        </div>
        <div className="row">
          <Link to="/privacy-and-policy" className="row" onClick={scrollToTop}>
            Privacy and Policy
          </Link>
        </div>
      </div>
      <div className="column">
        <div className="row">GET IN TOUCH</div>
        <div className="row">
          <span>Call us at +387878787</span>
        </div>
        <div className="row">support@auction.com</div>
        <div className="row">
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
      </div>
      <div className="column">
        <div className="row">NEWSLETTER</div>
        <div className="row">
          Enter your email address and get notified about new products. We hate
          spam!
        </div>
        <div className="row">
          <input type="email" placeholder="Your email" />
          <button>GO</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
