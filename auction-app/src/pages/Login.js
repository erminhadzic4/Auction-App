import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form">
      <h2 className="login-title">LOGIN</h2>
      <div className="input-group">
        <label htmlFor="email" className="label-typography">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input-field"
          placeholder="Enter your email"
          autoComplete="off"
        />
      </div>
      <div className="input-group label-typography">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Enter your password"
          autoComplete="off"
        />
      </div>
      <div className="remember-me">
        <div className="remember-me-checkbox">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="label-typography">
            Remember me
          </label>
        </div>
      </div>
      <button className="login-button">Login</button>
      <div className="social-buttons">
        <button className="social-button label-typography">
          <FontAwesomeIcon
            className="social-button-icon-primary"
            icon={faFacebook}
          />{" "}
          Login with Facebook
        </button>
        <button className="social-button label-typography">
          <FontAwesomeIcon
            icon={faGoogle}
            className="social-button-icon-secondary "
          />{" "}
          Login with Gmail
        </button>
      </div>
      <a href="/" className="forgot-password-label">
        Forgot password?
      </a>
    </div>
  );
};

export default Login;
