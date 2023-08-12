import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      Swal.fire("Login Successful", response.data.message, "success");
    } catch (error) {
      Swal.fire("Login Failed", error.response.data.error, "error");
    }
  };
  return (
    <div className="login-form">
      <h2 className="login-title">LOGIN</h2>
      <form onSubmit={handleSubmit}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      </form>
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
