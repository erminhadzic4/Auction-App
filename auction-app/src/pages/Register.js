import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-form">
      <h2 className="register-title">REGISTER</h2>
      <div className="input-group">
        <label htmlFor="firstName" className="label-typography">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="input-field"
          placeholder="Enter your first name"
          autoComplete="off"
        />
      </div>
      <div className="input-group">
        <label htmlFor="lastName" className="label-typography">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="input-field"
          placeholder="Enter your last name"
          autoComplete="off"
        />
      </div>
      <div className="input-group">
        <label htmlFor="email" className="label-typography">
          Enter Email
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
      <button className="register-button">Register</button>
      <div className="social-buttons">
        <button className="social-button label-typography">
          <FontAwesomeIcon
            className="social-button-icon-primary"
            icon={faFacebook}
          />{" "}
          Register with Facebook
        </button>
        <button className="social-button label-typography">
          <FontAwesomeIcon
            icon={faGoogle}
            className="social-button-icon-secondary"
          />{" "}
          Register with Gmail
        </button>
      </div>
      <span className="already-have-container">
        Already have an account?
        <a href="/login" className="already-have-label">
          Login
        </a>
      </span>
    </div>
  );
};

export default Register;
